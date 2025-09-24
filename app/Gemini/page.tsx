"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';

const valueFormatterPiechart = (item: { value: number }) => `${item.value}%`;

const valueFormatterHistogram = (value: number | null) => `Count: ${value}`;

const chartSetting = {
  yAxis: [
    {
      label: 'Count',
      width: 60,
    },
  ],
  series: [{ dataKey: 'count', valueFormatter: valueFormatterHistogram }],
  height: 300,
  margin: { left: 0 },
};

function displayJson(data : Record<string, unknown>, parentElement: HTMLElement) {
        debugger;
        for (const key in data) {
          //console.log("Key: " + key);
            if (data.hasOwnProperty(key)) {
                const value = data[key];
                //console.log("Key: " + key + " Value: " + value);
                const keyReplaced = key.replace(/_/g, ' ');
                const keyCapitalized = keyReplaced.charAt(0).toUpperCase() + keyReplaced.slice(1);
                //console.log("Key Capitalized: " + keyCapitalized);
                const itemElement = document.createElement('div');
                if (typeof value === 'object' && value !== null) {
                    const keyElement = document.createElement('strong');
                    keyElement.textContent = `${keyCapitalized}: `;
                    keyElement.style.fontSize = '1.1em';
                    itemElement.appendChild(keyElement);
                    const nestedContainer = document.createElement('div');
                    nestedContainer.style.marginLeft = '20px'; // Indent nested content
                    nestedContainer.style.marginTop = '5px'; 
                    displayJson(value as Record<string, unknown>, nestedContainer); // Recursive call
                    itemElement.appendChild(nestedContainer);
                }
                 else {
                    const keyElement = document.createElement('strong');
                    keyElement.textContent = `${keyCapitalized}. `;
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
      const geminiDataDecoded = JSON.parse(Buffer.from(geminiData || '', "base64").toString("utf8"));
      const geminiDataObj = JSON.parse(geminiDataDecoded || '{}');
      console.log("geminiDataObj:");
      console.log(geminiDataObj);
      // const geminiDataObjParseagain=JSON.parse(geminiDataObj);
      // console.log("geminiDataObjParseagain:");
      // console.log(geminiDataObjParseagain);
      // console.log(typeof(geminiDataObjParseagain));
       //const keys = Object.keys(geminiDataObjParseagain);
       //const values = Object.values(geminiDataObjParseagain);
      //  console.log("keys:" + keys[0]);
      //  console.log("values:" + values[0]);
    // Call the function with your data and a target HTML element
    const jsonOutputElement = document.getElementById('json-output');
    if (jsonOutputElement) {
      console.log("jsonOutputElement is not null.........");
      displayJson(geminiDataObj, jsonOutputElement);
    }
    else{
      console.log("jsonOutputElement is null");
    }  
    const data = [
  { "id": "data-1", "x1": 21, "y1": 201, "x2": 144, "y2": 17 },
  { "id": "data-2", "x1": 242, "y1": 428, "x2": 159, "y2": 85 },
  { "id": "data-3", "x1": 156, "y1": 324, "x2": 292, "y2": 196 },
  { "id": "data-4", "x1": 42, "y1": 254, "x2": 226, "y2": 190 },
  { "id": "data-5", "x1": 23, "y1": 209, "x2": 150, "y2": 38 },
  { "id": "data-6", "x1": 228, "y1": 418, "x2": 297, "y2": 206 },
  { "id": "data-7", "x1": 16, "y1": 194, "x2": 181, "y2": 110 },
  { "id": "data-8", "x1": 145, "y1": 326, "x2": 295, "y2": 213 },
  { "id": "data-9", "x1": 0, "y1": 241, "x2": 368, "y2": 282 },
  { "id": "data-10", "x1": 133, "y1": 311, "x2": 314, "y2": 201 },
  { "id": "data-11", "x1": 182, "y1": 362, "x2": 309, "y2": 224 },
  { "id": "data-12", "x1": 14, "y1": 212, "x2": 353, "y2": 301 },
  { "id": "data-13", "x1": 95, "y1": 321, "x2": 225, "y2": 128 },
  { "id": "data-14", "x1": 27, "y1": 209, "x2": 330, "y2": 294 },
  { "id": "data-15", "x1": 153, "y1": 382, "x2": 181, "y2": 74 },
  { "id": "data-16", "x1": 180, "y1": 342, "x2": 196, "y2": 154 },
  { "id": "data-17", "x1": 15, "y1": 197, "x2": 268, "y2": 177 },
  { "id": "data-18", "x1": 94, "y1": 311, "x2": 348, "y2": 224 },
  { "id": "data-19", "x1": 125, "y1": 270, "x2": 370, "y2": 281 },
  { "id": "data-20", "x1": 241, "y1": 476, "x2": 280, "y2": 228 }
];

interface scatterplot_data {
 tweet_id: string;
 sentiment_score: number;
 likes: number;
 retweets: number;
 replies: number;
}
    return (
      <div className="grid grid-cols-2 gap-4 *:border *:p-2.5 *:rounded-md">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">{geminiDataObj.sentiment_percentage.title}</h2>
          <PieChart series={[{ data: geminiDataObj.sentiment_percentage.data, highlightScope: { fade: 'global', highlight: 'item' }, faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' }, valueFormatter: valueFormatterPiechart, }, ]} height={200}
        width={200} />
        </div>
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center">{geminiDataObj.histogram_data.title}</h2>
                <BarChart
                  dataset={geminiDataObj.histogram_data.data}
                  xAxis={[{ dataKey: 'score_range', label: 'Score Range' }]}
                  {...chartSetting}
                />
        </div>
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Sentiment Score vs Likes Scatterplot</h2>
                 <ScatterChart
      height={300}
      series={[
        {
          label: "Tweets",
          data: geminiDataObj.scatterplot_data.data.map((d: scatterplot_data) => ({
            x: d.sentiment_score,   // X-axis → sentiment
            y: d.likes,             // Y-axis → likes
            id: d.tweet_id,
            size: (d.retweets + 1) * 10, // bubble size → retweets
            meta: d, // store full object for tooltip
          })),
        },
      ]}
      xAxis={[{ label: "Sentiment Score" }]}
      yAxis={[{ label: "Likes" }]}
    />
        </div>
      </div>
    )
       }
export default function Responsedata() {

    return (
        <div className=' max-w-[90%] mx-auto p-4 m-[10px_auto] bg-white shadow-md'>
          <Suspense fallback={<div>Loading error...</div>}>
                      <MyGeminiComponent />
          </Suspense>
          <div id="json-output" className='grid grid-cols-2 gap-4 *:border *:p-2.5 *:rounded-md'></div>
          
        </div>
      );
    }