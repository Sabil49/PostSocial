"use client";
import { useSearchParams } from 'next/navigation';
export default function Responsedata() {

    // Example for Next.js Server Components

     const searchParams = useSearchParams();
      const geminiData = searchParams.get('data');
      console.log("geminiData");
      console.log(geminiData);
      return (
        <div>
           {
            geminiData ? geminiData : 'Loading...'
          } 
        </div>
      );
    }