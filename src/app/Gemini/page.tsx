
  "use client";
  import React, { useState,useEffect } from 'react';

    export default function Responsedata() {
      const [response, setResponse] = useState('');

      useEffect(() => {
        fetchResponse();
      }, []);

      const fetchResponse = async () => {
        const res = await fetch('/api/Gemini', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        setResponse(data.response);
      };

      return (
        <div>
          {
            response ? <p>Gemini&apos;s Response: {response}</p> : 'Loading...'
          }
        </div>
      );
    }