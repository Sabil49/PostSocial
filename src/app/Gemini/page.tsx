"use client";
import { useSearchParams } from 'next/navigation';
   import { Suspense } from 'react';

   function MyGeminiComponent() {
         const searchParams = useSearchParams();
      const geminiData = searchParams.get('data');
      console.log("geminiData");
      console.log(geminiData);
      const geminiDataObj = JSON.parse(JSON.stringify(geminiData));
      console.log("geminiDataObj:");
      console.log(geminiDataObj);
      console.log(typeof geminiDataObj);
      return <div>{geminiData ? geminiData : 'Loading...'}</div>;
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