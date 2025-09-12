"use client";
import { useSearchParams } from 'next/navigation';
   import { Suspense } from 'react';

   function MyGeminiComponent() {
      const searchParams = useSearchParams();
      const geminiData = searchParams.get('data');
      console.log("geminiData");
      console.log(geminiData);
      /* decodeURIComponent uri malformed error */ 
      const geminiDataDecoded = decodeURIComponent(geminiData || '');
      // const geminiDataString= JSON.stringify(geminiData);
      // console.log("geminiDataString:");
      // console.log(geminiDataString);
      const geminiDataObj = JSON.parse(geminiDataDecoded || '{}');
     // const geminiDataObj = JSON.parse(geminiData || '{}');
      console.log("geminiDataObj:");
      console.log(geminiDataObj);

      const geminiDataNestedObj = JSON.parse(geminiDataObj.data || '{}');
      const geminiDataNestedObjInner = JSON.parse(geminiDataNestedObj.data || '{}');
      // const myObject = geminiDataObj[0];
      // const keys = Object.keys(myObject);
      // const values = Object.values(myObject);
      // console.log("keys:" + keys[0]);
      // console.log("values:" + values[0]);
      
      console.log(geminiDataObj);
      
      console.log("geminiDataNestedObj:");
      console.log(geminiDataNestedObj);
      console.log(typeof(geminiDataNestedObj));
      console.log("geminiDataNestedObjInner:");
      console.log(geminiDataNestedObjInner);
      console.log(typeof(geminiDataNestedObjInner));
      console.log("geminiDataObj:");
      const check=JSON.parse(geminiDataObj);
      console.log(typeof(check));
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