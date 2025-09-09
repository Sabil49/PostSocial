
 import { cookies } from 'next/headers';

export default async function Responsedata() {

       const cookieStore = await cookies();
       const Geminidata = cookieStore.get('Geminidata')?.value; // Using optional chaining for safety
      console.log(cookieStore.get('twitterData')?.value);
      return (
        <div>
           {
            Geminidata ? <p>Gemini&apos;s Response: {Geminidata}</p> : 'Loading...'
          } 
        </div>
      );
    }