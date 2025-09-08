import { cookies } from 'next/headers'; 

export async function GET() {
      try {
        const cookieStore = await cookies();
            const accessToken = cookieStore.get('accessToken')?.value; 

            if (!accessToken) {
              return new Response(JSON.stringify({ error: 'Access token not found' }), { status: 401 });
            }

            const response = await fetch('https://api.twitter.com/2/users/me', {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
              },
            });
            const data = await response.json();
            return new Response(JSON.stringify(data), { status: 200 });
      } catch (error) {
             return new Response(JSON.stringify({ error: `Error in token exchange: ${error}` }), { status: 500 });
         }
    }