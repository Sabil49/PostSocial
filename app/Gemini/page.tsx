"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import clientData from '@/utils/clientData.json';
import { array } from 'zod/v4';

function capitalizeFirstLetter(val:string) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
       function displayJson(data : Record<string, unknown>, parentElement: HTMLElement) {
        debugger;
        for (const key in data) {
          console.log("Key: " + key);
            if (data.hasOwnProperty(key)) {
                const value = data[key];
                console.log("Key: " + key + " Value: " + value);
                const itemElement = document.createElement('div');
                if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
                    const keyElement = document.createElement('strong');
                    const keyReplaced = key.replace(/_/g, ' ');
                    keyElement.textContent = `${capitalizeFirstLetter(keyReplaced)}: `;
                    itemElement.appendChild(keyElement);
                    const nestedContainer = document.createElement('div');
                    nestedContainer.style.marginLeft = '20px'; // Indent nested content
                    nestedContainer.style.marginTop = '5px'; 
                    displayJson(value as Record<string, unknown>, nestedContainer); // Recursive call
                    itemElement.appendChild(nestedContainer);
                }
                else if (Array.isArray(value)) {
                    const keyElement = document.createElement('strong');
                    keyElement.textContent = `${key}: `;
                    itemElement.appendChild(keyElement);
                    const nestedContainer = document.createElement('div');
                    nestedContainer.style.marginLeft = '20px'; // Indent nested content
                    nestedContainer.style.marginBottom = '15px'; 
                    value.forEach((item, index) => {
                        const arrayItemElement = document.createElement('div');
                        arrayItemElement.style.marginLeft = '20px';
                        //arrayItemElement.textContent = `${index + 1}. `;
                        if (typeof item === 'object' && item !== null) {
                            displayJson(item as Record<string, unknown>, arrayItemElement);
                        } else {
                            arrayItemElement.textContent += String(item);
                        }
                        nestedContainer.appendChild(arrayItemElement);
                    });
                    itemElement.appendChild(nestedContainer);
                } else {
                    const keyElement = document.createElement('strong');
                    keyElement.textContent = `${key}. `;
                    itemElement.appendChild(keyElement);
                    const keyElement2 = document.createElement('span');
                    keyElement2.textContent = `${value}. `;
                    itemElement.appendChild(keyElement2);
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
      console.log("jsonOutputElement is not null.........");
      displayJson(clientData, jsonOutputElement);
    }
    else{
      console.log("jsonOutputElement is null");
    }  
    return null;

       }
export default function Responsedata() {

    return (
        <div className=' max-w-[90%] mx-auto p-4 m-[10px_auto] bg-white shadow-md'>
          <div id="json-output" className='grid grid-cols-2 gap-4 *:border *:p-2.5 *:rounded-md'></div>
          <Suspense fallback={<div>Loading error...</div>}>
                      <MyGeminiComponent />
          </Suspense>
        </div>
      );
    }