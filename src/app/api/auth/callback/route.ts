import { NextRequest,NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";
import { cookies } from 'next/headers';

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY || "" });

export async function GET(req: NextRequest) {

    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUri = process.env.REDIRECT_URI;
    const xTokenUrl = process.env.X_TOKEN_URL;

    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');  
    if (!code) {     
        //return new Response('Authorization failed', { status: 400 });
        return NextResponse.json({ error: 'Authorization failed.' }, { status: 400 });
      }
  
   try {
     if (!xTokenUrl) {
       return NextResponse.json({ error: 'Token URL is not defined.' }, { status: 500 });
     }
     const tokenResponse = await fetch(xTokenUrl, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
        'Content-Type': 'application/x-www-form-urlencoded',
       },
       body: new URLSearchParams({
         grant_type: 'authorization_code',
         client_id: clientId ?? '',
         client_secret: clientSecret ?? '',
         code: code ?? '',
         redirect_uri: redirectUri ?? '',
         code_verifier: 'challenge', // Must match the code_challenge sent in the initial request
       }).toString(),
     });

     const data = await tokenResponse.json();

     if (data.error) {
         return NextResponse.json({ error: data }, { status: 400 });
     }
     const response = await fetch('https://api.twitter.com/2/users/me', {
              headers: {
                'Authorization': `Bearer ${data.access_token}`,
              },
            });
       const userData = await response.json();
       if (!userData.data.id) {
        return new Response(JSON.stringify({ error: 'User ID not found' }), { status: 401 });
       }
       const twitterResponse = await fetch(`https://api.twitter.com/2/users/${userData.data.id}/tweets`, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    });

       const tweetData = await twitterResponse.json();

       const GeminiResponse = await ai.models.generateContent({
           model: "gemini-2.5-flash",
           contents: "Presented the data in readable format " + JSON.stringify(tweetData),
         });
        // Access the generated content from GeminiResponse
        const GeminiResponseData = GeminiResponse.candidates?.[0]?.content ?? null;
         if (!GeminiResponseData) {
           return new Response(JSON.stringify({ error: 'Failed to generate content' }), { status: 500 });
         } 
         const responseRedirect = NextResponse.redirect(new URL('/Gemini', req.url));
         responseRedirect.cookies.set('Geminidata', JSON.stringify(GeminiResponseData), { httpOnly: true, secure: true });
         responseRedirect.cookies.set('accessToken', `${data.access_token}`, { httpOnly: true, secure: true });
         responseRedirect.cookies.set('twitterData', JSON.stringify(tweetData), { httpOnly: true, secure: true });

         return responseRedirect;

   } catch (error) {
       return NextResponse.json({ error: `Error in token exchange: ${error}` }, { status: 500 });
   }
}











