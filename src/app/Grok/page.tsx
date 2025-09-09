import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.x.ai/v1",
  apiKey: process.env.NEXT_PUBLIC_X_API_Key,
});

export const completion = await client.chat.completions.create({
  model: "grok-3",
  messages: [
    {
      role: "system",
      content: "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy."
    },
    {
      role: "user",
      content: "What is the meaning of life, the universe, and everything?"
    },
  ],
  temperature: 0,
});
console.log(completion.choices[0].message);  

  // Below is a simple React component to interact with the Grok API
  // Uncomment and use it in your React application as needed

  //  "use client";
  //   import React, { useState } from 'react';

  //   function Chatbot() {
  //     const [input, setInput] = useState('');
  //     const [response, setResponse] = useState('');

  //     const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
  //       e.preventDefault();
  //       try {
  //         const res = await fetch('/api/GrokAI', {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify({ message: input }),
  //         });
  //         const data = await res.json();
  //         setResponse(data.response);
  //       } catch (error) {
  //         console.error('Error sending message:', error);
  //         setResponse('Error: Could not get a response.');
  //       }
  //     };

  //     return (
  //       <div>
  //         <form onSubmit={handleSubmit}>
  //           <input
  //             type="text"
  //             value={input}
  //             onChange={(e) => setInput(e.target.value)}
  //             placeholder="Type your message..."
  //           />
  //           <button type="submit">Send</button>
  //         </form>
  //         <p>Grok&apos;s Response: {response}</p>
  //       </div>
  //     );
  //   }

  //   export default Chatbot;