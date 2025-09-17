"use client";
import { useSearchParams } from 'next/navigation';
   import { Suspense } from 'react';

//    function decodeURIComponentSafe(uriComponent) {
//   try {
//     return decodeURIComponent(uriComponent);
//   } catch (e) {
//     if (e instanceof URIError) {
//       console.warn("URIError caught:", e.message, "Input:", uriComponent);
//       // Handle the error gracefully, e.g., return the original string or an empty string
//       return uriComponent; 
//     } else {
//       throw e; // Re-throw other types of errors
//     }
//   }
// }
// const malformedUri = "%E0%A4%A"; 
// const decoded = decodeURIComponentSafe(malformedUri); 
// console.log("Decoded URI Component:");
// console.log(decoded); // Will log the warning and return the original string
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
      
      
      console.log("geminiDataNestedObj:");
      console.log(geminiDataNestedObj);
      console.log(typeof(geminiDataNestedObj));
      console.log("geminiDataNestedObjInner:");
      console.log(geminiDataNestedObjInner);
      console.log(typeof(geminiDataNestedObjInner));
      console.log("geminiDataObj:");
      const check=JSON.parse(geminiDataObj);
      console.log(typeof(geminiDataObj));
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