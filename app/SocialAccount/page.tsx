    "use client";
    import React from 'react';
    import { Suspense } from 'react';
    import { useSearchParams } from 'next/navigation';
    import {signOutUser,} from '@/app/api/auth/actions';
    import { useSession } from "next-auth/react";
   import TweetWordCloud from '../Charts/Word cloud/page';
    
    function MyErrorComponent() {
     const searchParams = useSearchParams();
     const errorParam = searchParams.get('error');
     const errorString = errorParam?.toString(); // Get the full query string
     console.log('searchParams:', searchParams);
     // ... your component logic using 'query'
     return <div>{errorString ? <div style={{ color: 'red' }}>{errorString}</div> : null}</div>;
    }

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

    function ConnectXButton() {
        
      const handleConnectX = () => {
        window.location.href = '/api/tweetdata'; // Redirect to the API route
      };

      return (
        <div>
          <TweetWordCloud />
          <button onClick={handleConnectX}>
            <b>Connect with Twitter</b>
          </button>
          <Suspense fallback={<div>Loading error...</div>}>
            <MyErrorComponent />
          </Suspense>
           <div className="flex h-full flex-col px-3 py-4 md:px-2">
      
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
       <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
         
       
      </div>
    </div>
    <SessionComponent />   
        </div>
        
      );
    }

    export default ConnectXButton;
