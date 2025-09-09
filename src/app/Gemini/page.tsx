
import { cookies } from 'next/headers';

export default async function Responsedata() {

       const cookieStore = await cookies();
       const GeminiData = cookieStore.get('Geminidata')?.value; // Using optional chaining for safety

      return (
        <div>
           {
            GeminiData ? <p>Gemini&apos;s Response - {GeminiData}</p> : 'Loading...'
          } 
        </div>
      );
    }