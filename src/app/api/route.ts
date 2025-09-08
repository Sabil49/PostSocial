import { NextRequest,NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');  
    if (!code) {     
        //return new Response('Authorization failed', { status: 400 });
        return NextResponse.json({ error: 'Authorization failed.' }, { status: 400 });
      }
  
   try {    
     const tokenResponse = await fetch('https://api.x.com/2/oauth2/token', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
       },
       body: new URLSearchParams({
         grant_type: 'authorization_code',
         client_id: 'dlg5alhxWHM2V3pMcFpaSUJ3Rm46MTpjaQ',
         client_secret: 'sj715FPU4w3YAASKfegihOyYXAvitAjEq2IGyIkRsQv2yKH9DL',
         code: code,
         redirect_uri: 'https://post-social-opal.vercel.app/api/',
         // Add code_verifier if using PKCE
       }).toString(),
     });

     const data = await tokenResponse.json();

     if (data.error) {
         return NextResponse.json({ error: 'Get token failed.' }, { status: 400 });
     }

     const resRedirect = NextResponse.redirect(new URL('/', req.url));
       resRedirect.cookies.set('accessToken', `${data.access_token}`, { httpOnly: true, secure: true });
       return resRedirect;

   } catch (error) {
       return NextResponse.json({ error: `Error in token exchange: ${error}` }, { status: 500 });
   }
}











