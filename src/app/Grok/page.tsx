   "use client";
    import React, { useState } from 'react';

    function Chatbot() {
      const [input, setInput] = useState('');
      const [response, setResponse] = useState('');

      const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const res = await fetch('/api/GrokAI', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: input }),
          });
          const data = await res.json();
          setResponse(data.response);
        } catch (error) {
          console.error('Error sending message:', error);
          setResponse('Error: Could not get a response.');
        }
      };

      return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
          <p>Grok&apos;s Response: {response}</p>
        </div>
      );
    }

    export default Chatbot;