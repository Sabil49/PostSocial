



// import OpenAI from "openai";
// let openaiClient: OpenAI | null = null;

// try {
//   if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
//     throw new Error('OPENAI_API_KEY is not configured');
//   }
//   openaiClient = new OpenAI({
//     apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//   });
// } catch (error) {
//   console.error('Error initializing OpenAI API:', error);
//   // Continue execution - we'll handle the error in the route handler
// }

// if (!openaiClient) {
//   throw new Error('OpenAI client is not initialized.');
// }

// const response = await openaiClient.chat.completions.create({
//   model: "gpt-4o-mini",
//   messages: [
//     {
//       role: "user",
//       content: "How to analyze Twitter data to increase engagement and create viral posts?",
      
//     },
//   ],
//   temperature: 0.2,
//   max_tokens: 1500,
// });

// console.log(response.choices[0].message.content);