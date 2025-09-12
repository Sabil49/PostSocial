"use client";
import { useSearchParams } from 'next/navigation';
   import { Suspense } from 'react';

   function MyGeminiComponent() {
      const searchParams = useSearchParams();
      const geminiData = searchParams.get('data');
      console.log("geminiData");
      console.log(geminiData);
      const geminiDataObj = JSON.parse(geminiData || '{}');
      console.log("geminiDataObj:");
      console.log(geminiDataObj);
      console.log(geminiDataObj[0].overall_sentiment_analysis);
      console.log(geminiDataObj[0].overall_sentiment_analysis.positive_percentage);
      console.log(typeof geminiDataObj);
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