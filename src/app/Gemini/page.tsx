"use client";
import { useSearchParams } from 'next/navigation';
export default function Responsedata() {

    // Example for Next.js Server Components

     const searchParams = useSearchParams();
      const geminiData = searchParams.get('data');
    // const GeminidataStr =
    //   typeof Geminidata === 'string' ? Geminidata : Array.isArray(Geminidata) ? Geminidata[0] || '' : '';
    // // const GeminidataDecoded = decodeURIComponent(GeminidataStr);
    // const GeminidataParsed = JSON.parse(GeminidataStr || '{}');
    // console.log('Geminidata::::');
    // console.log(JSON.parse(JSON.stringify(Geminidata)));
      return (
        <div>
           {
            geminiData ? geminiData : 'Loading...'
          } 
        </div>
      );
    }