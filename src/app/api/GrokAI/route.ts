// Define interfaces for the request and response structure
interface Message {
  role: 'system' | 'user';
  content: string;
}

interface ChatCompletionRequest {
  messages: Message[];
  model: string;
  stream?: boolean;
  temperature?: number;
}

interface ChatCompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
    index: number;
  }[];
}

// Function to make the chat completion API call
export async function GET(): Promise<void | Response> {
  const url = 'process.env.X_API_URL';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.X_API_Key}`,
  };

  const data: ChatCompletionRequest = {
    messages: [
      {
        role: 'system',
        content: 'You are Grok, a highly intelligent, helpful AI assistant.',
      },
      {
        role: 'user',
        content: 'What is the meaning of life, the universe, and everything?',
      },
    ],
    model: 'grok-4', // Note: Verify model name; 'grok-3' may be correct
    stream: false,
    temperature: 0, // Default temperature, as Python SDK doesn't specify
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(3600 * 1000), // 3600s timeout, matching Python
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result: ChatCompletionResponse = await response.json();
    return result.choices[0].message.content; // Return the response content
  } catch (error) {
    console.error('Error making API call:', error);
    throw error;
  }
}