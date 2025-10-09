import * as motion from "motion/react-client";
import Image from "next/image";
import React from 'react'
import { GoArrowRight } from 'react-icons/go';


export default function Banner() {
    const PhoneData = [
        { name: "Iphone14", image: "/Phone/iphone14.png" },
        { name: "Iphone15", image: "/Phone/iphone15.png" },
        { name: "Iphone16", image: "/Phone/iphone16.png" },
        { name: "Mi11", image: "/Phone/mi11.png" },
        { name: "MII12", image: "/Phone/mi12.png" },
        { name: "MII13", image: "/Phone/mi13.png" },
        { name: "SS21", image: "/Phone/s21.png" },
        { name: "SS22", image: "/Phone/s22.png" },
        { name: "SS23", image: "/Phone/s23.png" }
    ];

  return (
    <div id="Home" className="flex h-[550px] py-4 justify-between px-6 sm:px-9 md:px-12 lg:px-27 items-center relative">
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:33px_33px] lg:bg-[size:44px_44px]'></div>
      <div className="w-1/3 flex flex-col items-start !leading-none z-50">
        <h1>Refurnished</h1>
        <h1>Repolished</h1>
        <h1>Revamp</h1>
        <p className="mb-4">
            Get full brand value by less market price
            Get Reupdated version of your favorite phone
            with full warranty and support
        </p>
        <button className=" flex items-center text-white bg-black rounded-3xl px-4 py-3"><a href='#HowItWorks'>Explore</a><GoArrowRight className=" ml-1" /></button>
      </div>
      <div className="w-1/2 shadow-3xl rounded-2xl relative">
      <div className='absolute z-50 inset-0 bg-[linear-gradient(rgba(177, 141, 250,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(177, 141, 250,0.1)_1px,transparent_1px)] bg-[size:44px_44px]'></div>
        <div className="flex relative overflow-hidden rounded-2xl before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 after:absolute after:right-0 after:top-0 after:h-full after:w-10">
                  <motion.div
                    transition={{
                      duration: 20,
                      ease: 'easeIn',
                      repeat: Infinity,
                    }}
                    initial={{ translateX: 0 }}
                    animate={{ translateX: '-50%' }}
                    className="flex flex-none gap-0"
                  >
                    {[...new Array(2)].fill(0).map((_, index) => (
                      <React.Fragment key={index}>
                      {PhoneData.map((obj,index2) => (<div className="flex-none text-center w-[300px] py-[2px] text-sm rounded-md " key={index2}><div className="flex flex-wrap place-content-center"><Image src={obj.image} alt="" width="351" height="417" /></div></div>))}
                      </React.Fragment>
                    ))}
                  </motion.div>
                </div>
                  <div className="absolute top-0 right-0 w-[30px] h-full bg-gradient-to-r rounded-r-2xl from-transparent to-[var(--shadowColor)] z-20 pointer-events-none"></div>
                   <div className="absolute top-0 left-0 w-[30px] h-full bg-gradient-to-l rounded-l-2xl from-transparent to-[var(--shadowColor)] z-20 pointer-events-none"></div>

      </div>
    </div>
  );
}