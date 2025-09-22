import { NextRequest,NextResponse } from 'next/server';
import { GoogleGenAI, Type } from "@google/genai";
// import { cookies } from 'next/headers';
import tweetData from '@/utils/tweetData.json';

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
             contents:
      "Using the text field in provided all data, generate JSON data(Don't use pre text, after text and special characters as i need to encode, decode this json data) to understand sentiment distribution and key insights and data for the charts: 1) Bar Chart – Show the count of Positive, Neutral, and Negative tweets. 2) Pie Chart – Display percentage share of each sentiment. 3) Histogram – Plot sentiment scores to observe frequency distribution. 4) Scatterplot – Visualize sentiment score vs. engagement metrics (likes, retweets, replies). 5) Heatmap – Show correlations between sentiment scores and engagement metrics. 6) Word Cloud – Generate for Positive, Negative, and Neutral tweets separately to highlight frequently used words. Ensure data are clean, well-labeled, and provide short interpretations of the findings. " + JSON.stringify(tweetDataArray),
    config: {
      responseMimeType: "application/json",
  //     responseSchema: {
  // type: Type.OBJECT,
  // properties: {
  //   sentiment_analysis: {
  //     type: Type.ARRAY,
  //     items: {
  //       type: Type.OBJECT,
  //       properties: {
  //         label: {
  //           type: Type.STRING,
  //         },
  //         value: {
  //           type: Type.NUMBER,
  //         },
  //       },
  //     },
  //   },
  //   overall_feelings: {
  //     type: Type.STRING,
  //   },
  //   suggestion: {
  //     type: Type.STRING,
  //   },
  // },

  //   },
          //  contents: "Do sentiment analysis for tweets and How people feel after looking tweets. Use 'Text' fields as tweets to provided data. No pre text, No after text and do not use 'provided data' related text or \"%~!*()'```\n\\\" like special characters as I need to show this data on a web page. only return valid json format data. 1) Return result with Positive, Neutral, Negative percentage(do not include % sign), overall feelings and suggestions in a separate 'suggestion' field within their specific niche to post tweets for more engagement. 2) Find out success full Trend, Hashtag, keywords and popular discussion within their specific niche in a separate field 3) Analyze tweet performance and add field 'well' or 'fail' regarding that tweet. 4) Analyze success full strategy within their specific niche and collect data like( tweet insight, Trends, hashtags, keywords, Discussion, Tweets format, Tweet strategy(post day count, post schedule). " + JSON.stringify(tweetDataArray),
          //  config: {
          //      responseMimeType: "application/json"
          //  }
  }
       });
        // Access the generated content from GeminiResponse
        const GeminiResponseData = GeminiResponse.text;
         if (!GeminiResponseData) {
           return new Response(JSON.stringify({ error: 'Failed to generate content' }), { status: 500 });
         }

         const GeminiResponseDataStr = JSON.stringify(GeminiResponseData);
         const encodedJson = encodeURIComponent(GeminiResponseDataStr);
         
          // Return the generated content as JSON
         // const GeminiResponseString = JSON.stringify(GeminiResponseData);
         // const GeminiResponseStringEncoded = encodeURIComponent(GeminiResponseString);
          
          const responseRedirect = NextResponse.redirect(new URL('/Gemini?data=' + encodedJson, req.url));
         // responseRedirect.cookies.set('Geminidata', JSON.stringify(GeminiResponseData), { httpOnly: true, secure: true });
         // responseRedirect.cookies.set('twitterData', JSON.stringify(tweetData), { httpOnly: true, secure: true });

        return responseRedirect;

}