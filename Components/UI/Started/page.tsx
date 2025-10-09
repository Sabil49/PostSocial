
import Image from "next/image";

export default function StartedPage() {
    return (
        <div className="relative min-h-[500px] pt-16 pb-32">
            <div className="vite-chip bg-[#1b1e2a] border border-[#39637d] rounded-lg p-4">
                <Image src="/logo.png" width={50} height={50} alt="Vite Logo" className="vite-chip__logo2" />
            </div>
            <div className="below_wrapper text-white" style={{margin: "50px auto 0"}}>
                            <h1>Start building with Vite</h1>
                        <h3>Prepare for a development environment that can<br /> finally keep pace with the speed of your mind.</h3>
                        <div className="hero__actions flex">
                        <a href="" className="btn btn--primary">Get Started</a>
                       
                        </div>
                        </div>    
                        <div className="hero__background3"></div>
                        </div>
    );
}
