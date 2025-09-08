// Or app/api/twitter-data/route.js (App Router)

export async function GET(){
  return new Response(JSON.stringify({ message: 'This is user data' }), { status: 200 });
}
// import { cookies } from 'next/headers'; 

// export async function GET() { 
//   try {
//     const cookieStore = await cookies();
//     const accessToken = cookieStore.get('accessToken')?.value; 

//     if (!accessToken) {
//       return new Response(JSON.stringify({ error: 'Access token not found' }), { status: 401 });
//     }

//     const twitterResponse = await fetch('https://api.twitter.com/2/users/YOUR_USER_ID/tweets', { // Replace YOUR_USER_ID
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     if (!twitterResponse.ok) {
//       const errorData = await twitterResponse.json();
//       throw new Error(`Twitter API error: ${errorData.title || twitterResponse.statusText}`);
//     }

//     const data = await twitterResponse.json();
//     return new Response(JSON.stringify(data), { status: 200 });
//   } catch (error) {
//     console.error('Error fetching Twitter data:', error);
//     return new Response(JSON.stringify({ error: 'Failed to fetch Twitter data' }), { status: 500 });
//   }
// }