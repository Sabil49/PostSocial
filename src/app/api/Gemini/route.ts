import { GoogleGenAI } from "@google/genai";
import { cookies } from 'next/headers'; 
import { NextResponse,NextRequest } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY || "" });

export async function GET(req: NextRequest){   
  const cookieStore = await cookies();
  const twitterData = cookieStore.get('twitterData') ? JSON.parse(cookieStore.get('twitterData')?.value || '{}') : {};
 
  console.log(twitterData);
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Presented the data in html table format with separate rows" + JSON.stringify(twitterData),
  });
  
  if (!response) {
    return new Response(JSON.stringify({ error: 'Failed to generate content' }), { status: 500 });
  } 
  const responseRedirect = NextResponse.redirect(new URL('/Gemini', req.url));
  responseRedirect.cookies.set('Geminidata', JSON.stringify(response), { httpOnly: true, secure: true });

  return responseRedirect;
}