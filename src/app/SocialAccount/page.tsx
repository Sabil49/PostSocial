    "use client";
    import React from 'react';
    import { Suspense } from 'react';
    import { useSearchParams } from 'next/navigation';

    function MyErrorComponent() {
     const searchParams = useSearchParams();
     const errorParam = searchParams.get('error');
     const errorString = errorParam?.toString(); // Get the full query string
     console.log('searchParams:', searchParams);
     // ... your component logic using 'query'
     return <div>{errorString ? <div style={{ color: 'red' }}>{errorString}</div> : null}</div>;
    }

    function ConnectXButton() {
      const handleConnectX = () => {
        window.location.href = process.env.NEXT_PUBLIC_X_AUTH_URL ?? '';
      };

      return (
        <div>
          <button onClick={handleConnectX}>
            <b>Connect with Twitter</b>
          </button>
          <Suspense fallback={<div>Loading error...</div>}>
            <MyErrorComponent />
          </Suspense>
        </div>
        
      );
    }

    export default ConnectXButton;
