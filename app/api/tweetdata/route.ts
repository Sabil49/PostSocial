import { NextRequest,NextResponse } from 'next/server';
import { GoogleGenAI, Type } from "@google/genai";
// import { cookies } from 'next/headers';
import tweetData from '@/utils/tweetData.json';
import { title } from 'process';

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY || "" });

export async function GET(req: NextRequest) {
  //const cookieStore = await cookies();
  //const accessToken = cookieStore.get('accessToken')?.value; // Using optional chaining for safety
  // const response = await fetch('https://api.x.com/2/users/me', {
  //   headers: {
  //     'Authorization': `Bearer ${accessToken}`,
  //   },
  //           });
  //      const userData = await response.json();
  //           if (userData.status === 429) {
  //            const errorRedirect = NextResponse.redirect(new URL('/SocialAccount?error=' + userData.detail + ' from userData', req.url));
  //            return errorRedirect;
  //           }
  //           //return NextResponse.json({ userData });
  //      if (!userData.data || !userData.data.id) {
  //       return new Response(JSON.stringify({ error: 'User ID not found' }), { status: 401 });
  //      }
  //      const twitterResponse = await fetch(`https://api.x.com/2/users/${userData.data.id}/tweets?max_results=5&expansions=author_id,referenced_tweets.id,attachments.media_keys&tweet.fields=created_at,public_metrics,entities,source&user.fields=username,name,profile_image_url&media.fields=url`, {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  //      const tweetData = await twitterResponse.json();
  //     if (tweetData.status === 429) {
  //            const errorRedirect = NextResponse.redirect(new URL('/SocialAccount?error=' + tweetData.detail + ' from tweetData', req.url));
  //            return errorRedirect;
  //           }

    
      const tweetDataArray = tweetData.data;
      if (!tweetDataArray || tweetDataArray.length === 0) {
        return new Response(JSON.stringify({ error: 'No tweets found' }), { status: 404 });
      }
     
      

      
       const GeminiResponse = await ai.models.generateContent({
           model: "gemini-2.5-flash",
             contents: "Analyze the following 'text' field data as tweets and return JSON data(No pre text, after text and special characters) for sentiment analysis distribution and chart insights: " + JSON.stringify(tweetDataArray),
    config: {
      responseMimeType: "application/json",
      responseSchema: {
  type: Type.OBJECT,
  properties: {
    sentiment_distribution: {
      type: Type.OBJECT,
      properties: {
        positive_count: { type: Type.INTEGER },
        neutral_count: { type: Type.INTEGER },
        negative_count: { type: Type.INTEGER },
      },
      propertyOrdering: ["positive_count", "neutral_count", "negative_count"],
    },
   sentiment_percentage: {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      label: { type: Type.STRING },
      value: { type: Type.NUMBER },
    },
    propertyOrdering: ["label", "value"],
  },
},
    histogram_data: {
      type: Type.ARRAY,

      items: {
        type: Type.OBJECT,
        properties: {
          score_range: { type: Type.STRING },
          count: { type: Type.INTEGER },
        },
        propertyOrdering: ["score_range", "count"],
      },
    },
    scatterplot_data: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          tweet_id: { type: Type.STRING },
          sentiment_score: { type: Type.NUMBER },
          likes: { type: Type.INTEGER },
          retweets: { type: Type.INTEGER },
          replies: { type: Type.INTEGER },
        },
        propertyOrdering: ["tweet_id", "sentiment_score", "likes", "retweets", "replies"],
      },
    },
    heatmap_data: {
      type: Type.OBJECT,
      properties: {
        sentiment_score_vs_engagement: {
          type: Type.OBJECT,
          properties: {
            likes: { type: Type.NUMBER },
            retweets: { type: Type.NUMBER },
            replies: { type: Type.NUMBER },
          },
          propertyOrdering: ["likes", "retweets", "replies"],
        },
      },
      propertyOrdering: ["sentiment_score_vs_engagement"],
    },
    word_cloud: {
      type: Type.OBJECT,
      properties: {
        positive_words: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
        neutral_words: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
        negative_words: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
      },
      propertyOrdering: ["positive_words", "neutral_words", "negative_words"],
    },
    interpretations: {
      type: Type.OBJECT,
      properties: {
        overall_sentiment: { type: Type.STRING },
        key_insights: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
      },
      propertyOrdering: ["overall_sentiment", "key_insights"],
    },
  },
  propertyOrdering: [
    "sentiment_distribution",
    "sentiment_percentage",
    "histogram_data",
    "scatterplot_data",
    "heatmap_data",
    "word_cloud",
    "interpretations",
  ],
},
  }
        });
        // Access the generated content from GeminiResponse
        const GeminiResponseData = GeminiResponse.text;
         if (!GeminiResponseData) {
           return new Response(JSON.stringify({ error: 'Failed to generate content' }), { status: 500 });
         }

         const GeminiResponseDataStr = JSON.stringify(GeminiResponseData);
         const encodedJson =  Buffer.from(GeminiResponseDataStr).toString("base64");
         
          // Return the generated content as JSON
         // const GeminiResponseString = JSON.stringify(GeminiResponseData);
         // const GeminiResponseStringEncoded = encodeURIComponent(GeminiResponseString);
          
          const responseRedirect = NextResponse.redirect(new URL('/Gemini?data=' + encodedJson, req.url));
         // responseRedirect.cookies.set('Geminidata', JSON.stringify(GeminiResponseData), { httpOnly: true, secure: true });
         // responseRedirect.cookies.set('twitterData', JSON.stringify(tweetData), { httpOnly: true, secure: true });

        return responseRedirect;

}