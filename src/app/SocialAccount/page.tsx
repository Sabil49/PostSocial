    "use client";
    import React from 'react';
    
    function ConnectXButton() {
      const handleConnectX = () => {
        window.location.href = process.env.NEXT_PUBLIC_X_AUTH_URL ?? '';
      };

      return (
        <button onClick={handleConnectX}>
          <b>Connect with Twitter</b>
        </button>
      );
    }

    export default ConnectXButton;
