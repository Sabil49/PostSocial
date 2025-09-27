"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import dynamic from "next/dynamic";
import type { Word } from "@/types/react-d3-cloud";

const valueFormatterPiechart = (item: { value: number }) => `${item.value}%`;
const valueFormatterHistogram = (value: number | null) => `Count: ${value}`;

/* Chart setting for bar chart */
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

/* Display query string json data in table */
function displayJson(data : Record<string, unknown>, parentElement: HTMLElement) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const value = data[key];
                const keyReplaced = key.replace(/_/g, ' ');
                const keyCapitalized = keyReplaced.charAt(0).toUpperCase() + keyReplaced.slice(1);
                const itemElement = document.createElement('div');
                itemElement.className = `border p-2.5 rounded-md ${value}-className`;
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
                    // const keyElement = document.createElement('strong');
                    // keyElement.textContent = `${keyCapitalized}. `;
                    // itemElement.appendChild(keyElement);
                    const keyElement2 = document.createElement('span');
                    keyElement2.textContent = `${value}. `;
                    itemElement.appendChild(keyElement2);
                }
                parentElement.appendChild(itemElement);
            }
        }
    }

/* Get query string data to decode */
function Responsedata() {
      const searchParams = useSearchParams();
      const geminiData = searchParams.get('data');
      const geminiDataDecoded = JSON.parse(Buffer.from(geminiData || '', "base64").toString("utf8"));
      const geminiDataObj = JSON.parse(geminiDataDecoded || '{}');
      console.log(geminiDataObj);
    // Call the function with your data and a target HTML element
    const jsonOutputElement = document.getElementById('json-output');
    if (jsonOutputElement) {
      displayJson(geminiDataObj, jsonOutputElement);
    }

    /* Scatter plot data type */
interface scatterplot_data {
 tweet_id: string;
 sentiment_score: number;
 likes: number;
 retweets: number;
 replies: number;
}

/* Word Cloud start */

const WordCloud = dynamic(() => import("react-d3-cloud"), { ssr: false });

interface CloudWord{
  text: string;
  value: number;
  sentiment: "positive" | "neutral" | "negative";
}

const { positive_words = [], neutral_words = [], negative_words = [] } =
    geminiDataObj.word_cloud.data;

  const words: CloudWord[] = [
    ...positive_words.map((w:string): CloudWord => ({
      text: w,
      value: 30,
      sentiment: "positive",
    })),
    ...neutral_words.map((w:string): CloudWord => ({
      text: w,
      value: 15,
      sentiment: "neutral",
    })),
    ...negative_words.map((w:string): CloudWord => ({
      text: w,
      value: 10,
      sentiment: "negative",
    })),
  ];

  // Library mappers use base Word
  const fontSizeMapper = (word: Word) => word.value;
  const rotate = () => (Math.random() > 0.5 ? 0 : 90);

  // For color we cast to CloudWord to access sentiment
  const colorMapper = (word: Word) => {
    const cw = word as CloudWord;
    switch (cw.sentiment) {
      case "positive":
        return "#22c55e";
      case "negative":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

/* Word Cloud end */


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
            markerSize: (d.retweets + 1) * 10, // bubble size → retweets
            size: (d.retweets + 1) * 10, // bubble size → retweets
            meta: d, // store full object for tooltip
          })),
          
        },
      ]}
      xAxis={[{ label: "Sentiment Score" }]}
      yAxis={[{ label: "Likes" }]}
    />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">{geminiDataObj.word_cloud.title}</h2>
          <WordCloud
             data={words}
             font="Impact"
             fontSize={fontSizeMapper}
             rotate={rotate}
             padding={2}
             fill={colorMapper}
             width={500}
             height={300}
          />
        
        </div>
        <div className='col-end-2'>
          <div id="json-output" className='grid grid-cols-2 gap-4 *:border *:p-2.5 *:rounded-md'>

          </div>
        </div>
      </div>
    )
       }
export default function GeminiComponent() {

    return (
        <div className=' max-w-[90%] mx-auto p-4 m-[10px_auto] bg-white shadow-md'>
          <Suspense fallback={<div>Loading error...</div>}>
                      <Responsedata />
          </Suspense>
        </div>
      );
    }