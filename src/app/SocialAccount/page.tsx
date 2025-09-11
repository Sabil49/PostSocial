    "use client";
    import React from 'react';
    import { useSearchParams } from 'next/navigation';

    function ConnectXButton() {
      const searchParams = useSearchParams();
      const errorParam = searchParams.get('error'); // Get a specific parameter
      const errorString = errorParam?.toString(); // Get the full query string
      console.log('searchParams:', searchParams);
      const handleConnectX = () => {
        window.location.href = process.env.NEXT_PUBLIC_X_AUTH_URL ?? '';
      };

      return (
        <button onClick={handleConnectX}>
          <b>Connect with Twitter</b>
          {
            errorString ? <p style={{ color: 'red' }}>{errorString}</p> : null
          }
        </button>
      );
    }

    export default ConnectXButton;
