import { NextRequest,NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";
import { cookies } from 'next/headers';

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY || "" });

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value; // Using optional chaining for safety
  const response = await fetch('https://api.x.com/2/users/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
            });
       const userData = await response.json();

       if (!userData.data || !userData.data.id) {
        return new Response(JSON.stringify({ error: 'User ID not found' }), { status: 401 });
       }
       const twitterResponse = await fetch(`https://api.x.com/2/users/${userData.data.id}/tweets?max_results=5&expansions=author_id,referenced_tweets.id,attachments.media_keys&tweet.fields=created_at,public_metrics,entities,source&user.fields=username,name,profile_image_url&media.fields=url`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

       const tweetData = await twitterResponse.json();
        //return NextResponse.json(tweetData);
       const GeminiResponse = await ai.models.generateContent({
           model: "gemini-2.5-flash",
           contents: "Do sentiment analysis for 'How people feel about something after looking tweet'. use 'Text' field as tweet from provided data. return data in json format. " + JSON.stringify(tweetData),
         });
        // Access the generated content from GeminiResponse
        const GeminiResponseData = GeminiResponse.text;
         if (!GeminiResponseData) {
           return new Response(JSON.stringify({ error: 'Failed to generate content' }), { status: 500 });
         } 
         //return NextResponse.json({ GeminiResponseData });
         const responseRedirect = NextResponse.redirect(new URL('/Gemini?data=' + encodeURIComponent(JSON.stringify(GeminiResponseData)), req.url));
         //responseRedirect.cookies.set('Geminidata', JSON.stringify(GeminiResponseData), { httpOnly: true, secure: true });
         //responseRedirect.cookies.set('twitterData', JSON.stringify(tweetData), { httpOnly: true, secure: true });

         return responseRedirect;
}