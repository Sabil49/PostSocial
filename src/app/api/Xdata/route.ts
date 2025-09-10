import { NextResponse } from 'next/server';
//import { GoogleGenAI } from "@google/genai";
import { cookies } from 'next/headers';

//const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY || "" });

export async function GET() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value; // Using optional chaining for safety
  return NextResponse.json({ accessToken: accessToken || null });
  // const response = await fetch('https://api.twitter.com/2/users/me', {
  //   headers: {
  //     'Authorization': `Bearer ${accessToken}`,
  //   },
  // });
  //  const userData = await response.json();
  // if (!userData.data.id) {
  //   return new Response(JSON.stringify({ error: 'User ID not found' }), { status: 401 });
  // }
  // const twitterResponse = await fetch(`https://api.twitter.com/2/users/${userData.data.id}/tweets`, {
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  //});

      //   const tweetData = await twitterResponse.json();

      //  const GeminiResponse = await ai.models.generateContent({
      //      model: "gemini-2.5-flash",
      //      contents: "Convert the data in row format " + JSON.stringify(tweetData),
      //    });
        // Access the generated content from GeminiResponse
        // const GeminiResponseData = GeminiResponse.candidates?.[0]?.content ?? null;
        //  if (!GeminiResponseData) {
        //    return new Response(JSON.stringify({ error: 'Failed to generate content' }), { status: 500 });
        //  } 
        //  const responseRedirect = NextResponse.redirect(new URL('/Gemini', req.url));
        //  responseRedirect.cookies.set('Geminidata', JSON.stringify(GeminiResponseData), { httpOnly: true, secure: true });
        //  responseRedirect.cookies.set('twitterData', JSON.stringify(tweetData), { httpOnly: true, secure: true });

        //  return responseRedirect;
}