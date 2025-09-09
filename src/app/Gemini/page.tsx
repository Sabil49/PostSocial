import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY || "" });

export default async function GeminiPage() {  
  const data=[
  {
    "tweet_id": 1000001,
    "username": "@sky_gazer",
    "tweet": "Life is better when you’re laughing at your own typos.",
    "likes": 1324,
    "comments": 214,
    "reposts": 512,
    "timestamp": "2025-09-09T08:30:00Z"
  },
  {
    "tweet_id": 1000002,
    "username": "@techwizard99",
    "tweet": "Just launched my new portfolio site. Feedback is welcome!",
    "likes": 934,
    "comments": 87,
    "reposts": 142,
    "timestamp": "2025-09-09T08:31:30Z"
  },
  {
    "tweet_id": 1000003,
    "username": "@coffee_code",
    "tweet": "Mondays should come with a snooze button for life.",
    "likes": 1567,
    "comments": 320,
    "reposts": 667,
    "timestamp": "2025-09-09T08:33:00Z"
  },
  {
    "tweet_id": 1000004,
    "username": "@wanderer_soul",
    "tweet": "Sunsets are proof that endings can be beautiful too.",
    "likes": 2088,
    "comments": 154,
    "reposts": 412,
    "timestamp": "2025-09-09T08:34:30Z"
  },
  {
    "tweet_id": 1000005,
    "username": "@pixel_painter",
    "tweet": "Working on a new digital art piece. Teaser soon 👀",
    "likes": 764,
    "comments": 45,
    "reposts": 129,
    "timestamp": "2025-09-09T08:36:00Z"
  },
  {
    "tweet_id": 1000006,
    "username": "@nocturnal_dev",
    "tweet": "Midnight coding sessions hit different.",
    "likes": 1499,
    "comments": 220,
    "reposts": 384,
    "timestamp": "2025-09-09T08:37:30Z"
  },
  {
    "tweet_id": 1000007,
    "username": "@laughing_luna",
    "tweet": "Told my dog my problems and he fell asleep. Mood.",
    "likes": 1832,
    "comments": 310,
    "reposts": 598,
    "timestamp": "2025-09-09T08:39:00Z"
  },
  {
    "tweet_id": 1000008,
    "username": "@eco_enthusiast",
    "tweet": "Planting trees is cheaper than therapy. 🌱",
    "likes": 1107,
    "comments": 76,
    "reposts": 205,
    "timestamp": "2025-09-09T08:40:30Z"
  },
  {
    "tweet_id": 1000009,
    "username": "@cyber_samurai",
    "tweet": "When the code compiles on the first try 👨‍💻✨",
    "likes": 2354,
    "comments": 410,
    "reposts": 784,
    "timestamp": "2025-09-09T08:42:00Z"
  },
  {
    "tweet_id": 1000010,
    "username": "@bookish_bird",
    "tweet": "Currently reading 4 books and finishing none of them. 🫠",
    "likes": 890,
    "comments": 121,
    "reposts": 263,
    "timestamp": "2025-09-09T08:43:30Z"
  }
]
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Format this data into a table format " + JSON.stringify(data),
  });
  console.log(response.text);
  return <div>{response.text}</div>;

}