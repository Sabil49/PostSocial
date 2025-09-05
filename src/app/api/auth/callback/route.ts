import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Example for handling an OAuth 2.0 Authorization Code callback
const CLIENT_ID = 'dlg5alhxWHM2V3pMcFpaSUJ3Rm46MTpjaQ';
const CLIENT_SECRET = '1zeLNovJNm0ptgjpemllyI_e3w5SQLrGGv48NG7FRzyf0ajFWA';
const REDIRECT_URI = 'https://post-social-opal.vercel.app/api/auth/callback';
const TOKEN_URL = 'https://api.x.com/2/oauth2/token';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const codeRaw = searchParams.get('code');
    const code: string | undefined = codeRaw ?? undefined;

    if (!code) {
        console.error('Authorization code missing from callback.');
        return NextResponse.json({ error: 'Authorization failed.' }, { status: 400 });
    }

    try {
        console.log('Authorization code received:', code);
        const response = await axios.post(TOKEN_URL, new URLSearchParams({
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

        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;

        // You may want to set cookies or return tokens in response
        // Example: set cookie and redirect
        const res = NextResponse.redirect(new URL('/', req.url));
        res.cookies.set('accessToken', accessToken, { httpOnly: true, secure: true });
        if (refreshToken) {
            res.cookies.set('refreshToken', refreshToken, { httpOnly: true, secure: true });
        }
        return NextResponse.json({ message: 'Authorization successful.' }, { status: 200 });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error exchanging code for token:', error.response ? error.response.data : error.message);
        } else {
            console.error('Error exchanging code for token:', error);
        }
        return NextResponse.json({ error: 'Error exchanging code for token.' }, { status: 500 });
    }
}
