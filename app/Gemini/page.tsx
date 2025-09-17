"use client";
import { useSearchParams } from 'next/navigation';
   import { Suspense } from 'react';

       function displayJson(data: Record<string, undefined>, parentElement: HTMLElement) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const value = data[key];
                const itemElement = document.createElement('div');
                if (typeof value === 'object' && value !== null) {
                    const keyElement = document.createElement('strong');
                    keyElement.textContent = `${key}: `;
                    itemElement.appendChild(keyElement);
                    const nestedContainer = document.createElement('div');
                    nestedContainer.style.marginLeft = '20px'; // Indent nested content
                    displayJson(value, nestedContainer); // Recursive call
                    itemElement.appendChild(nestedContainer);
                } else {
                    itemElement.textContent = `${key}: ${value}`;
                }
                parentElement.appendChild(itemElement);
            }
        }
    }



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
       const keys = Object.keys(geminiDataObjParseagain);
       const values = Object.values(geminiDataObjParseagain);
       console.log("keys:" + keys[0]);
       console.log("values:" + values[0]);
    // Call the function with your data and a target HTML element
    const jsonOutputElement = document.getElementById('json-output');
    if (jsonOutputElement) {
      console.log("jsonOutputElement is not null");
      displayJson(geminiDataObjParseagain, jsonOutputElement);
    }
    else{
      console.log("jsonOutputElement is null");
    }  
    return null;

       }
export default function Responsedata() {

    return (
        <div>
          <div id="json-output"></div>
          <Suspense fallback={<div>Loading error...</div>}>
                      <MyGeminiComponent />
          </Suspense>
        </div>
      );
    }