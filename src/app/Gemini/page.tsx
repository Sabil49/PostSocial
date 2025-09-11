"use client";
import { useSearchParams } from 'next/navigation';
   import { Suspense } from 'react';

   function MyGeminiComponent() {
         const searchParams = useSearchParams();
      const geminiData = searchParams.get('data');
      console.log("geminiData");
      console.log(geminiData);
      //geminiData?.replace('\n', ""); // Return the generated content as JSON
      //geminiData?.replace("\"", ""); // Return the generated content as JSON
      geminiData?.replace("```", ""); // Return the generated content as JSON
      // Parse the JSON string into an object
      const geminiDataObj = JSON.parse(JSON.stringify(geminiData));
      console.log("geminiDataObj:");
      console.log(geminiDataObj.sentiment_summary);
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