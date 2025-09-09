    // pages/api/grok.js
    import OpenAI from 'openai'; // Grok's API often uses OpenAI-compatible libraries
    import { NextRequest,NextResponse } from 'next/server';

    export async function POST(req: NextRequest) {

        const { message }: { message: string | null } = await req.json();
        if (!message) {
          return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }
        try {
          const openai = new OpenAI({
            apiKey: process.env.X_API_Key, // Use your Grok API key
            baseURL: process.env.X_API_URL, // Verify Grok's specific API base URL
          });

          const completion = await openai.chat.completions.create({
            model: 'grok-4', // Specify the Grok model you want to use
            messages: [{ role: 'user', content: message }],
          });
          return NextResponse.json({response: completion.choices[0].message.content}, { status: 200 });
        } catch (error) {
          console.error('Error calling Grok API:', error);
          return NextResponse.json({ error: 'Failed to get response from Grok.' }, { status: 500 });
        }
      } else {
        return NextResponse.json({ error: `Method ${req.method} Not Allowed` }, { status: 405 });
      }
    }