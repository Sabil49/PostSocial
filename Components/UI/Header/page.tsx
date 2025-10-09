import Image from "next/image";

export default function Header() {
  return (
    <div id="Header" className=" flex sticky top-0 z-[100] justify-between items-center px-3 sm:px-6 md:px-12 py-1 lg:py-2 text-black  bg-[#fffbfb]">
      <div>
        <a href="#Home"><Image src="/logo.png" alt="SA Tech logo" width={30} height={30} /></a>
      </div>
      <div>
        <nav>
          <ul className="flex space-x-4 sm:space-x-8 md:space-x-16 text-sm sm:text-md *:hover:text-gray-300">
            <li><a href="#Home">Home</a></li>
            <li><a href="#HowItWorks">How it Works</a></li>
            <li><a href="#Reviews">Reviews</a></li>
            <li><a href="#About">About</a></li>            
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}