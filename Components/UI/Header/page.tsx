import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full z-50 bg-[#101010] fixed top-0 h-16 flex items-center justify-between border-b-[1px] border-b-[#262626]  text-white px-4">
      <div className=" flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <span className="font-bold text-lg">PostSocial</span>
      </div>
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-8">
          <li>Home</li>
          <li>How it works</li>
          <li>Reviews</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );

}