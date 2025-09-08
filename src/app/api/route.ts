import { NextRequest,NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');  
    // Example for handling an OAuth 2.0 Authorization Code callback
const CLIENT_ID = 'dlg5alhxWHM2V3pMcFpaSUJ3Rm46MTpjaQ';
const CLIENT_SECRET = 'dTQOHz3RXStinHZuVn0Z2orgh5M5VUVDEu8YBnVah0M35N5G2X';
const REDIRECT_URI = 'https://post-social-opal.vercel.app/api/auth/callback';
const TOKEN_URL = 'https://api.x.com/2/oauth2/token';
    if (!code) {     
        //return new Response('Authorization failed', { status: 400 });
        return NextResponse.json({ error: 'Authorization failed.' }, { status: 400 });
      }
  
   try {
      const tokenResponse = await axios.post(TOKEN_URL, new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET
        }).toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    

    //  const tokenResponse = await fetch('https://api.x.com/2/oauth2/token', {
    //   method: 'POST',
    //   headers: {
    //      'Content-Type': 'application/x-www-form-urlencoded',
    //    },
    //    body: new URLSearchParams({
    //      grant_type: 'authorization_code',
    //      client_id: 'dlg5alhxWHM2V3pMcFpaSUJ3Rm46MTpjaQ',
    //      client_secret: 'sj715FPU4w3YAASKfegihOyYXAvitAjEq2IGyIkRsQv2yKH9DL',
    //      code: code,
    //      redirect_uri: 'https://post-social-opal.vercel.app/api/',
    //      // Add code_verifier if using PKCE
    //    }).toString(),
    //  });

     

     if (tokenResponse.data.error) {
         return NextResponse.json({ error: 'Get token failed.' }, { status: 400 });
     }

     const resRedirect = NextResponse.redirect(new URL('/', req.url));
       resRedirect.cookies.set('accessToken', `${tokenResponse.data.access_token}`, { httpOnly: true, secure: true });
       return resRedirect;

   } catch (error) {
       return NextResponse.json({ error: `Error in token exchange: ${error}` }, { status: 500 });
   }
}











