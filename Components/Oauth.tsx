import { signIn } from "next-auth/react";

export default function OAuth(){
    return(
        <div className="flex flex-col gap-4 justify-between">
            <button onClick={() => signIn('google')}>
              Sign in with Google
            </button>
            <button onClick={() => signIn("github")}>Sign in with GitHub</button>
        </div>
    )
}
