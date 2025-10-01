    "use client";
    import React from 'react';
    import { Suspense,useState } from 'react';
    import { useSearchParams } from 'next/navigation';
    import { signOutUser } from '@/app/api/auth/actions';
    import { useSession } from "next-auth/react";
    
    // function MyErrorComponent() {
    //  const searchParams = useSearchParams();
    //  const errorParam = searchParams.get('error');
    //  const errorString = errorParam?.toString(); // Get the full query string
    //  console.log('searchParams:', searchParams);
    //  // ... your component logic using 'query'
    //  return <div>{errorString ? <div style={{ color: 'red' }}>{errorString}</div> : null}</div>;
    // }

    function SessionComponent() {
      const { data: session } = useSession();
      if (session) {
        return (
          <><pre>{JSON.stringify(session, null, 2)}</pre>
          <form action={signOutUser}>
            <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
          </>
        );
      }
        
    }

 export default function ConnectXButton() {

      const [error, setError] = useState('');
      const [loading, setLoading] = useState(false);
      const [data, setData] = useState();

      const handleConnectX = async () => {
        setLoading(true);
        try {
          const response = await fetch('/api/tweetdata');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError('Something went wrong. Please try again.');
          }
        } finally {
          setLoading(false);
        }
      };

      return (
        <div className='w-full'>
          <button onClick={handleConnectX}>
            <b>Connect with Twitter</b>
          </button>
          {data && (
            <div>
              <h3>Fetched Tweet Data:</h3>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
    <SessionComponent />   
        </div>
        
      );
    }
