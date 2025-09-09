import { GoogleGenAI } from "@google/genai";
import { cookies } from 'next/headers'; 

const cookieStore = await cookies();
const twitterData = cookieStore.get('twitterData') ? JSON.parse(cookieStore.get('twitterData')?.value || '{}') : {};

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY || "" });

export async function GET(){    
  console.log(twitterData);
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Presented the data in html table format with separate rows" + JSON.stringify(twitterData),
  });
  
  if (!response) {
    return new Response(JSON.stringify({ error: 'Failed to generate content' }), { status: 500 });
  } 
  return new Response(JSON.stringify(response), { status: 200 });
}