"use client";
import { useSearchParams } from 'next/navigation';
   import { Suspense } from 'react';

   function MyGeminiComponent() {
      const searchParams = useSearchParams();
      const geminiData = searchParams.get('data');
      console.log("geminiData");
      console.log(geminiData);
      const geminiDataDecoded = decodeURIComponent(geminiData || '');
      const geminiDataObj = JSON.parse(geminiDataDecoded || '{}');
      console.log("geminiDataObj:");
      console.log(geminiDataObj);
      const geminiDataObjParseagain=JSON.parse(geminiDataObj);
      console.log("geminiDataObjParseagain:");
      console.log(geminiDataObjParseagain);
      console.log(typeof(geminiDataObjParseagain));
      return <div>{geminiDataObj ? geminiDataObj : 'Loading...'}</div>;
       }
export default function Responsedata() {

    return (
        <div>
          <Suspense fallback={<div>Loading error...</div>}>
                      <MyGeminiComponent />
          </Suspense>
        </div>
      );
    }