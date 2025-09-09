
 import { cookies } from 'next/headers';

export default async function Responsedata() {

       const cookieStore = await cookies();
       const Geminidata = cookieStore.get('Geminidata')?.value; // Using optional chaining for safety

      return (
        <div>
           {
            Geminidata ? <p>Gemini&apos;s Response: {Geminidata}</p> : 'Loading...'
          } 
        </div>
      );
    }