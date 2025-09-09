
import { cookies } from 'next/headers';

export default async function Responsedata() {

       const cookieStore = await cookies();
       const cookieValue = cookieStore.get('Geminidata')?.value;
       const GeminiData = cookieValue ? JSON.parse(cookieValue) : {};

      return (
        <div>
           {
            GeminiData ? <p>Gemini&apos;s Response: {GeminiData}</p> : 'Loading...'
          } 
        </div>
      );
    }