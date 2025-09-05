    "use client";
    import React from 'react';

    function ConnectXButton() {
      const handleConnectX = () => {
        const clientId = 'dlg5alhxWHM2V3pMcFpaSUJ3Rm46MTpjaQ'; // Replace with your X Client ID
        const redirectUri = 'https://post-social-opal.vercel.app/api/auth/callback'; // Replace with your configured redirect URI
        const scopes = 'users.read tweet.read'; // Example scopes, adjust as needed

        const authUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&state=STATE_VALUE&code_challenge=CHALLENGE_VALUE&code_challenge_method=s256`;

        window.location.href = authUrl;
      };

      return (
        <button onClick={handleConnectX}>
          <b>&gt;Connect with X</b>
        </button>
      );
    }

    export default ConnectXButton;