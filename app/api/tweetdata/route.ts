import { NextResponse } from 'next/server';
import { GoogleGenAI, Type } from "@google/genai";
import { cookies } from 'next/headers';
// import tweetData from '@/utils/tweetData.json';


const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY || "" });

export async function GET() {
  try{
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value; // Using optional chaining for safety
  if (!accessToken) {
    return new Response(JSON.stringify({ error: 'Token not found. Please login first.' }), { status: 401 });
  }
  const response = await fetch('https://api.x.com/2/users/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
            });
       if (response.status === 429) {
          const retryAfter = response.headers.get('Retry-After');
          if (retryAfter) {
            const delay = parseInt(retryAfter)/60; // Convert seconds to minutes
            return new Response(JSON.stringify({ error: `Rate limit exceeded. Please try again ${delay} milliseconds later.` }), { status: 429, headers: { 'Retry-After': retryAfter } });
            
          }
        } 
        if (!response.ok) { 
          return new Response(JSON.stringify({ error: 'Failed to fetch user data from Twitter' }), { status: response.status });
       }
       const userData = await response.json();
       if (!userData.data || !userData.data.id) {
        return new Response(JSON.stringify({ error: 'User account ID not found' }), { status: response.status });
       }
       const twitterResponse = await fetch(`https://api.x.com/2/users/${userData.data.id}/tweets?max_results=5&expansions=author_id,referenced_tweets.id,attachments.media_keys&tweet.fields=created_at,public_metrics,entities,source&user.fields=username,name,profile_image_url&media.fields=url`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
        if (!twitterResponse.ok) { 
          return new Response(JSON.stringify({ error: 'Failed to fetch tweet data from Twitter' }), { status: twitterResponse.status });
       }

       const tweetData = await twitterResponse.json();
       if(!tweetData || tweetData.errors || tweetData.errors.length > 0 || !tweetData.data){
        return new Response(JSON.stringify({ error: 'User account data not found' }), { status: twitterResponse.status });
       }

      const tweetDataArray = tweetData.data;
     
      
      
              const GeminiResponse = await ai.models.generateContent({
           model: "gemini-2.5-flash",
             contents: "Analyze the following 'text' field data as tweets and return JSON data(No pre text, No after text and No special characters) for chart insights: " + JSON.stringify(tweetDataArray),
    config: {
      responseMimeType: "application/json",
      responseSchema: {
  type: Type.OBJECT,
  properties: {
   sentiment_percentage: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        data: { type: Type.ARRAY,
          items: {
             type: Type.OBJECT,
             properties: {
               label: { type: Type.STRING },
               value: { type: Type.NUMBER },
             },
             propertyOrdering: ["label", "value"],
           },
      },
    },propertyOrdering: ["title", "data"]
  },  
    histogram_data: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        data: { type: Type.ARRAY,
          items: {
             type: Type.OBJECT,
             properties: {
               score_range: { type: Type.STRING },
               count: { type: Type.NUMBER },
             },
             propertyOrdering: ["score_range", "count"],
           },
      },
    },propertyOrdering: ["title", "data"]
  },  
    scatterplot_data: {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING },
    data: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          tweet_id: { type: Type.STRING },
          sentiment_score: { type: Type.NUMBER },
          likes: { type: Type.INTEGER },
          retweets: { type: Type.INTEGER },
          replies: { type: Type.INTEGER }
        },
        propertyOrdering: ["tweet_id", "sentiment_score", "likes", "retweets", "replies"]
      }
    }
  },
  propertyOrdering: ["title", "data"]
},
    word_cloud: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        data: { type: Type.OBJECT,
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
    },propertyOrdering: ["title", "data"]
    },
    interpretations: {
      type: Type.OBJECT,
      properties: {
        key_insights: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
        overall_insights: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },        
      },
      propertyOrdering: [ "key_insights","overall_insights"],
    },
  },
  propertyOrdering: [
    "sentiment_percentage",
    "histogram_data",
    "scatterplot_data",
    "word_cloud",
    "interpretations",
  ],
},
    },
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
          
          //const responseRedirect = NextResponse.redirect(new URL('/Gemini?data=' + encodedJson, req.url));
         // responseRedirect.cookies.set('Geminidata', JSON.stringify(GeminiResponseData), { httpOnly: true, secure: true });
         // responseRedirect.cookies.set('twitterData', JSON.stringify(tweetData), { httpOnly: true, secure: true });

        // return responseRedirect;
        return NextResponse.json({ geminiData: encodedJson, message: 'Analysis has been completed successfully.', status: 200 });
      }
      catch (error: unknown) {
    return NextResponse.json(
      {
        error: {
          message: (error as Error)?.message || "Something went wrong. Please try again later.",
          code: (error as { code?: number })?.code || 500,
          status: (error as { status?: string })?.status || "INTERNAL_ERROR",
        },
      },
      { status: (error as { statusCode?: number })?.statusCode || 503 }
    );    
  }
      
}