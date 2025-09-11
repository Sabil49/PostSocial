import { NextRequest,NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";
import { cookies } from 'next/headers';
import tweetData from '@/utils/tweetData.json';

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY || "" });

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value; // Using optional chaining for safety
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
           contents: "Do sentiment analysis for tweets and How people feel after looking tweets. Use 'Text' fields as tweets to provided data. No pre text, No after text and do not use 'provided data' related text as I need to show this data on a web page. 1) Return result with Positive, Neutral, Negative percentage, overall feelings and suggestions in a separate 'suggestion' field within their specific niche to post tweets for more engagement. 2) Find out success full Trend, Hashtag, keywords and popular discussion within their specific niche in a separate field 3) Analyze tweet performance and add field 'well' or 'fail' regarding that tweet. 4) Analyze success full strategy within their specific niche and collect data like( tweet insight, Trends, hashtags, keywords, Discussion, Tweets format, Tweet strategy(post day count, post schedule). " + JSON.stringify(tweetDataArray),
         });
        // Access the generated content from GeminiResponse
        const GeminiResponseData = GeminiResponse.text;
         if (!GeminiResponseData) {
           return new Response(JSON.stringify({ error: 'Failed to generate content' }), { status: 500 });
         }
          return NextResponse.json(typeof(GeminiResponse.text));
         //return NextResponse.json({ GeminiResponseData });
         //const responseRedirect = NextResponse.redirect(new URL('/Gemini?data=' + encodeURIComponent(JSON.stringify(GeminiResponseData)), req.url));
         //responseRedirect.cookies.set('Geminidata', JSON.stringify(GeminiResponseData), { httpOnly: true, secure: true });
         //responseRedirect.cookies.set('twitterData', JSON.stringify(tweetData), { httpOnly: true, secure: true });

        // return responseRedirect;

}