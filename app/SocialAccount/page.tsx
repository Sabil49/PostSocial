    "use client";
    import React from 'react';
    import { useState } from 'react';
    import { PieChart } from '@mui/x-charts/PieChart';
    import { BarChart } from '@mui/x-charts/BarChart';
    import { ScatterChart } from '@mui/x-charts/ScatterChart';
    import dynamic from "next/dynamic";
    import type { Word } from "@/types/react-d3-cloud";
    import { signOutUser } from '@/app/api/auth/actions';
    import { useSession } from "next-auth/react";
    
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


    function SessionComponent() {
      const { data: session } = useSession();
      if (session) {
        return (
          <><pre>{JSON.stringify(session, null, 2)}</pre>
          <form action={signOutUser}>
            <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
          </>
        );
      }
        
    }

 export default function ConnectXButton() {
      
      const dataInterface = {
        sentiment_percentage: {
          title: "",    
          data: []
        },
        histogram_data: {
          title: "",
          data: []
        },
        scatterplot_data: {
          title: "",
          data: []
        },
        word_cloud: {
          title: "",
          data: {
            positive_words: [],
            neutral_words: [],
            negative_words: []
          }
        },
        interpretations: {
          key_insights: [],
          overall_insights: []
        }
      };

      const [error, setError] = useState('');
      const [loading, setLoading] = useState(false);
      const [data, setData] = useState(dataInterface);

      const handleConnectX = async () => {
        setLoading(true);
        try {
          const response = await fetch('/api/tweetdata');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          const geminiDataDecoded = JSON.parse(Buffer.from(data.geminiData || '', "base64").toString("utf8"));
          const geminiDataObj = JSON.parse(geminiDataDecoded || '{}');
          setData(geminiDataObj);         

        } catch (error) {
          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError('Something went wrong. Please try again.');
          }
        } finally {
          setLoading(false);
        }
      };

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
              data?.word_cloud?.data || {};

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
        <div className='w-full'>
          <button onClick={handleConnectX}>
            <b>Connect with Twitter</b>
          </button>
          {data && (
            <div>
              <h3>Fetched Tweet Data:</h3>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
    <SessionComponent />   
    <div className="grid grid-cols-2 gap-4 *:border *:p-2.5 *:rounded-md">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">{data?.sentiment_percentage.title}</h2>
          <PieChart series={[{ data: data?.sentiment_percentage.data, highlightScope: { fade: 'global', highlight: 'item' }, faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' }, valueFormatter: valueFormatterPiechart, }, ]} height={200}
        width={200} />
        </div>
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center">{data?.histogram_data.title}</h2>
                <BarChart
                  dataset={data?.histogram_data.data}
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
      data: data?.scatterplot_data.data.map((d: scatterplot_data) => ({
        x: d.sentiment_score,
        y: d.likes,
        id: d.tweet_id,
        meta: d,
      }))
    },
  ]}
  slotProps={{
    tooltip: {
      trigger: 'item',
    },
  }}
      xAxis={[{ label: "Sentiment Score" }]}
      yAxis={[{ label: "Likes" }]}
    />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">{data?.word_cloud.title}</h2>
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
        <div className='col-span-2'>
          {
            data?.interpretations.key_insights.length > 0 &&
            <div>
              <h2 className="text-2xl font-bold my-4 text-center">Key Insights</h2> 
              <ul className=' ps-[50px]'>
                {data?.interpretations.key_insights.map((insight: string, index: number) => (
                  <li key={index} className=" py-2 list-disc">{insight}</li>
                ))}
              </ul>
            </div>
          }
          {
            data?.interpretations.overall_insights.length > 0 &&
            <div>
              <h2 className="text-2xl font-bold mb-4 mt-6 text-center">Overall Insights</h2> 
              <ul className=' ps-[50px]'>
                {data?.interpretations.overall_insights.map((insight: string, index: number) => (
                  <li key={index} className="py-2 list-disc">{insight}</li>
                ))}
              </ul>
            </div>
          }
        </div>
      </div>
        </div>
        
      );
    }
