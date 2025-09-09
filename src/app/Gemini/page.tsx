import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY || "" });

export default async function GeminiPage() {  

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words.",
  });
  console.log(response.text);
  return <div>{response.text}</div>;

}