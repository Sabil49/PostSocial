  "use client";
  import React from 'react';

  function ConnectXButton() {
      const handleConnectX = () => {

        const authUrl = `${process.env.NEXT_PUBLIC_X_AUTH_URL}`;
        window.location.href = authUrl;
      };

      return (
        <button onClick={handleConnectX}>
          <b>Connect with Twitter</b>
        </button>
      );
    }

    export default ConnectXButton;
