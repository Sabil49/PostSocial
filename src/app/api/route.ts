import { NextRequest,NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');  
    if (!code) {     
        //return new Response('Authorization failed', { status: 400 });
        return NextResponse.json({ error: 'Authorization failed.' }, { status: 400 });
      }
  
   try {
     const tokenResponse = await fetch(`${process.env.X_TOKEN_URL}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
       },
       body: new URLSearchParams({
         grant_type: 'authorization_code',
         client_id: `${process.env.CLIENT_ID}`,
         client_secret: `${process.env.CLIENT_SECRET}`,
         code: code,
         redirect_uri: `${process.env.REDIRECT_URI}`,
         // Add code_verifier if using PKCE
       }).toString(),
     });

     const data = await tokenResponse.json();

     if (data.error) {
         return NextResponse.json({ error: data }, { status: 400 });
     }

     const resRedirect = NextResponse.redirect(new URL('/', req.url));
       resRedirect.cookies.set('accessToken', `${data.access_token}`, { httpOnly: true, secure: true });
       return resRedirect;

   } catch (error) {
       return NextResponse.json({ error: `Error in token exchange: ${error}` }, { status: 500 });
   }
}











