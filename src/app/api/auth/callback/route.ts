import { NextRequest,NextResponse } from 'next/server';

export async function GET(req: NextRequest) {

    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUri = process.env.REDIRECT_URI;
    const xTokenUrl = process.env.X_TOKEN_URL;

    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');  
    if (!code) {     
        //return new Response('Authorization failed', { status: 400 });
        return NextResponse.json({ error: 'Authorization failed.' }, { status: 400 });
      }
  
   try {
     if (!xTokenUrl) {
       return NextResponse.json({ error: 'Token URL is not defined.' }, { status: 500 });
     }
     const tokenResponse = await fetch(xTokenUrl, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
        'Content-Type': 'application/x-www-form-urlencoded',
       },
       body: new URLSearchParams({
         grant_type: 'authorization_code',
         client_id: clientId ?? '',
         client_secret: clientSecret ?? '',
         code: code ?? '',
         redirect_uri: redirectUri ?? '',
         code_verifier: 'challenge', // Must match the code_challenge sent in the initial request
       }).toString(),
     });

     const data = await tokenResponse.json();

     if (data.error) {
         return NextResponse.json({ error: data }, { status: 400 });
     }
     const response = await fetch('https://api.twitter.com/2/users/me', {
              headers: {
                'Authorization': `Bearer ${data.access_token}`,
              },
            });
       const userData = await response.json();
       const resRedirect = NextResponse.redirect(new URL('/api/Userdata', req.url));
       resRedirect.cookies.set('accessToken', `${data.access_token}`, { httpOnly: true, secure: true });
       return new Response(JSON.stringify(userData), { status: 200 });

   } catch (error) {
       return NextResponse.json({ error: `Error in token exchange: ${error}` }, { status: 500 });
   }
}











