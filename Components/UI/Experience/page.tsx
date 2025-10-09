
"use client";
import { motion } from "motion/react";

import Image from "next/image";

export default function ExperiencePage() {

  const logo_arr = [
    {},
    {
     src: "/logo/edge.svg",
    },{},{},{},{},
    {},
    {
     src: "/logo/angular.svg",
    },
    {
     src: "/logo/js.svg",
    },
    {
     src: "/logo/ts.svg",
    },
    {
     src: "/logo/wa.svg",
    },
    {},
    {},{},{},{},
    {
     src: "/logo/home.svg",
    },
    {}
  ];

  return (
    <div className="feature-section pb-16 w-full flex flex-col justify-center items-center">
        <div className="w-18">
   <svg xmlns="http://www.w3.org/2000/svg" width="70" height="61" viewBox="0 0 70 61" fill="none" style={{overflow: 'visible'}}>
    <path d="M38.5 0.772461V60.5215M22.6301 60.7725V38.7905C22.6301 25.3784 17.3675 12.5156 8 3.03184M54.3699 60.7725V38.7905C54.3699 25.3784 59.6325 12.5156 69 3.03184" stroke="url(#linear-gradient-bg-lines)" strokeWidth="2"></path>
    <g data-v-697d297c>
        <path d="M22.6301 80.7725V38.7905C22.6301 25.3784 17.3675 12.5156 8 3.03184L-20 -20" stroke="url(#glow_gradient_0.vv302f12oea)" strokeWidth="1.2" mask="url(#glow_mask_0.vv302f12oea)" className="svg-path" data-v-697d297c></path>
        <circle cx="20.3784" cy="23.3675" r="3" fill="#9fe6fd" className="circle-dot" style={{"--dot-color": "#9fe6fd"} as React.CSSProperties} data-v-697d297c></circle>

        <defs data-v-697d297c>
            <mask id="glow_mask_0.vv302f12oea" data-v-697d297c>
                <path d="M22.6301 80.7725V38.7905C22.6301 25.3784 17.3675 12.5156 8 3.03184L-20 -20" fill="black" data-v-697d297c></path>
                <circle cx="0" cy="0" r="0" fill="white" data-v-697d297c></circle>
            </mask>
            <radialGradient id="glow_gradient_0.vv302f12oea" cx="22.6301" cy="88.7725" r="3" gradientUnits="userSpaceOnUse" data-v-697d297c>
                <stop offset="0%" stopColor="#41D1FF" stopOpacity="1" data-v-697d297c></stop>
                <stop offset="100%" stopColor="#41D1FF" stopOpacity="0" data-v-697d297c></stop>
            </radialGradient>
        </defs>
    </g>
    <defs>
        <linearGradient id="linear-gradient-bg-lines" x1="38.5" y1="0.772461" x2="38.5" y2="60.7725" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#404040" stopOpacity="0"></stop>
            <stop offset="0.5" stopColor="#737373"></stop>
            <stop offset="1" stopColor="#404040" stopOpacity="0"></stop>
        </linearGradient>
    </defs>
</svg>

         {/* <svg className=" stroke-base_gradient" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 50" enableBackground="new 0 0 75 75">
             
      <g>
            <path
                    fill="none"
                    opacity="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.1"
                    d="M 0 0 q 16 16 16 50"
                />
                <circle 
                        r="3"
                        style={{ border:"none", fill: "var(--filterColor1)", fontWeight: "normal" }}
                        className="filterColorClass1"
                        cx="11"
                        cy="16"
                    />
                </g>

                <g>
                    <path
                    fill="none"
                    opacity="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.1"
                    d="M 33 0 33 50"
                />
                </g>

                 <g>
                    <path
                    fill="none"
                    opacity="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.1"
                    d="M 65 0 q -16 16 -16 50"
                />
                </g>
                </svg> */}
                </div>

                <div>
                <h2 className=" text-text_color">Redefining developer experience</h2>
                <h3 className="text-lg">Rake makes web development simple again</h3>                
          </div>

          <div className="w-[80%]">
    <div className="grid grid-cols-3 gap-6">
        <div className=" w-full rounded-md p-4 feature-card relative ">
            <div className=" border-[#13b351] border-2 w-full inset-0 rounded-xl -mr-8 p-4 mb-16 absolute my-6 ml-6 min-h-[150px] max-h-[150px]">
                <div className="w-1/2 h-2 bg-gray-400 rounded-lg mb-6 mt-4"></div>
                <div className="w-2/3 h-2 bg-gray-400 rounded-lg mb-6"></div>
                <div className="text-[#13b351] mt-6 text-lg">
                    Ready in 96ms
                </div>
                <div className="terminal_glow"></div>
            </div>

            <div>
              <div className="meta_title">Instant server start</div>
              <div className="meta_description">On demand file serving over native ESM, no bundling required!</div>
            </div>

        </div>
        <div className="col-span-2 ... feature-card relative">
          <div className="terminal_active border-2 p-4 mb-6 w-1/3">
            <table className="w-full text-left">
              <tbody>
                <tr>
                  <td className="w-[10%]"><div className="number">1</div></td>
                  <td><div className="bg-text_color h-3 rounded-sm w-1/2"></div></td>
                </tr>

              <tr>
                 <td className="w-[10%]"><div className="number">2</div></td>
                <td><div className="bg-text_color h-3 rounded-sm w-2/3"></div></td>
              </tr>

              <tr>
                 <td className="w-[10%]"><div className="number">3</div></td>
                <td><div className="bg-text_color h-3 rounded-sm w-1/4"></div></td>
              </tr>

              <tr>
                 <td className="w-[10%]"><div className="number">4</div></td>
                <td><div className="bg-text_color h-3 rounded-sm w-4/5"></div></td>
              </tr>

              <tr>
                <td className="w-[10%]"><div className="number">5</div></td>
                <td><div className="bg-text_color2 h-3 rounded-sm w-2/5"></div></td>
              </tr>

              <tr>
                <td className="w-[10%]"><div className="number">6</div></td>
                <td></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="absolute w-[350px] p-4  -right-6 -top-6 left-[unset] inset-0 rounded-md bg-[#1e1e1e] min-h-[200px] max-h-[225px] border-3 border-[#2b2b2b]">
            <div className=" bg-text_color h-16 shadow-[5px_5px_18px_1px_rgba(65,209,255,1)]"></div>
            <div className=" flex justify-center flex-col items-center">
            <div className="bg-text_color h-3 shadow-[5px_5px_18px_1px_rgba(65,209,255,1)] rounded-sm w-4/5 mt-4"></div>
            <div className="bg-text_color2 h-3 shadow-[5px_5px_18px_1px_rgba(192,99,237,1)] rounded-sm w-1/5 mt-2"></div>
            </div>
            <div className="grid grid-cols-3 gap-6 *:rounded-sm mt-8 *:h-[62px] *:bg-[#313131]">
              <div></div>
              <div></div>
              <div></div>
            </div>
<div className="terminal_glow2"></div>
          </div>
          <div className=" w-full text-center">
              <div className="meta_title">Lightning fast HMR</div>
              <div className="meta_description"> Hot Module Replacement (HMR) that stays fast regardless of app size.</div>
            </div>
        </div>
        <div className="col-span-2 ... feature-card flex-col !items-center ">
          <div className="grid grid-cols-6 gap-4 m-auto -mt-12 radialClass">
          {
            logo_arr.map((logo, index) => {       
              if(index === 1 || index === 7 || index === 8 || index === 9 || index === 10 || index === 16){       
                return (                  
                  <div key={index} className="experienceLogo">
                      <Image src={logo.src ?? ""} width={40} height={40} alt={`Logo ${index + 1}`} />
                    </div>
                  );
                }
                else{
                  return (                  
                  <div key={index} className="blankLogo"></div>
                  );
                }
              })}
            </div>
            <div className=" text-center w-[50%]">
              <div className="meta_title">Rich features</div>
              <div className="meta_description">Out-of-the-box support for TypeScript, JSX, CSS and more.</div>
            </div>
        </div>
        <div className="feature-card">

          <div className="feature__visualization" data-v-06b1a6b3="">
    <svg className="left-lines" width="195" height="138" viewBox="0 0 195 138" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-06b1a6b3="">
       
        <path d="M195 31.5L89.8055 30.377C76.1575 30.377 62.535 29.076 49.0906 26.4886L-21 13" stroke="url(#ob-linear-gradient-left)" data-v-06b1a6b3=""></path>
       
        <g data-v-06b1a6b3="" data-v-697d297c="">
            <path
                d="M195 31.5L89.8055 30.377C76.1575 30.377 62.535 29.076 49.0906 26.4886L-21 13"
                stroke="url(#glow_gradient_0.p6xb3o0chig)"
                strokeWidth="1.2"
                mask="url(#glow_mask_0.p6xb3o0chig)"
                className="svg-path"
                data-v-697d297c=""
            ></path>
            <motion.circle cx="49.0906" cy="26.4886" r="1.5"
            initial={{ opacity: 0 }}
            animate={{
                cx: [49.0906,62.535,76.1575,89.8055,195],
                cy: [26.4886,29.076,30.377,30.377,31.5],
                transition: { ease: "easeIn",duration: 1 },
               opacity: [1, 0.5,0],
            }}
            exit={{ opacity: 0 }}
            fill="#e6e73a" className="circle-dot" style={{ "--dot-color": "#9fe6fd" } as React.CSSProperties} data-v-697d297c=""></motion.circle>

             <defs data-v-697d297c="">
                <mask id="glow_mask_0.p6xb3o0chig" data-v-697d297c="">
                    <path d="M195 31.5L89.8055 30.377C76.1575 30.377 62.535 29.076 49.0906 26.4886L-21 13" fill="black" data-v-697d297c=""></path>
                    <circle cx="195" cy="31.5" r="0" fill="white" data-v-697d297c=""></circle>
                </mask>
                <radialGradient id="glow_gradient_0.p6xb3o0chig" cx="195" cy="31.5" r="0" gradientUnits="userSpaceOnUse" data-v-697d297c="">
                    <stop offset="0%" stopColor="#FFE358" stopOpacity="1" data-v-697d297c=""></stop>
                    <stop offset="100%" stopColor="#FFE358" stopOpacity="0" data-v-697d297c=""></stop>
                </radialGradient>
            </defs> 
        </g>



        <path d="M195 50L69.295 47.754L-21 41.016" stroke="url(#ob-linear-gradient-left)" data-v-06b1a6b3=""></path>
        <g data-v-06b1a6b3="" data-v-697d297c="">
            <path d="M195 50L69.295 47.754L-21 41.016" stroke="url(#glow_gradient_0.38bp3a3qhns)" strokeWidth="1.2" mask="url(#glow_mask_0.38bp3a3qhns)" className="svg-path" data-v-697d297c=""></path>
            <motion.circle cx="-21" cy="41.016" r="1.5"
            initial={{ opacity: 0 }}
            animate={{
                cx: [-21,69.295,195],
                cy: [41.016,47.754,50],
                transition: { ease: "easeIn",duration: 1 },
               opacity: [1, 0.5,0],
            }}
            exit={{ opacity: 0 }}
            fill="#e6e73a" className="circle-dot" style={{ "--dot-color": "#9fe6fd" } as React.CSSProperties} data-v-697d297c=""></motion.circle>
            <defs data-v-697d297c="">
                <mask id="glow_mask_0.38bp3a3qhns" data-v-697d297c="">
                    <path d="M195 50L69.295 47.754L-21 41.016" fill="black" data-v-697d297c=""></path>
                    <circle cx="195" cy="50" r="0" fill="white" data-v-697d297c=""></circle>
                </mask>
                <radialGradient id="glow_gradient_0.38bp3a3qhns" cx="195" cy="50" r="0" gradientUnits="userSpaceOnUse" data-v-697d297c="">
                    <stop offset="0%" stopColor="#FFE358" stopOpacity="1" data-v-697d297c=""></stop>
                    <stop offset="100%" stopColor="#FFE358" stopOpacity="0" data-v-697d297c=""></stop>
                </radialGradient>
            </defs>
        </g>
        <path d="M195 68.5L-21 69.5642" stroke="url(#ob-linear-gradient-left)" data-v-06b1a6b3=""></path>
        <g data-v-06b1a6b3="" data-v-697d297c="">
            <path d="M195 68.5L-21 69.5642" stroke="url(#glow_gradient_0.jz7x4zjq03)" strokeWidth="1.2" mask="url(#glow_mask_0.jz7x4zjq03)" className="svg-path" data-v-697d297c=""></path>
            <motion.circle cx="-21" cy="69.5642" r="1.5"
            initial={{ opacity: 0 }}
            animate={{
                cx: [-21,195],
                cy: [69.5642,68.5],
                transition: { ease: "easeIn",duration: 1 },
               opacity: [1, 0.5,0],
            }}
            exit={{ opacity: 0 }}
            fill="#e6e73a" className="circle-dot" style={{ "--dot-color": "#9fe6fd" } as React.CSSProperties} data-v-697d297c=""></motion.circle>

            <defs data-v-697d297c="">
                <mask id="glow_mask_0.jz7x4zjq03" data-v-697d297c="">
                    <path d="M195 68.5L-21 69.5642" fill="black" data-v-697d297c=""></path>
                    <circle cx="195" cy="68.5" r="0" fill="white" data-v-697d297c=""></circle>
                </mask>
                <radialGradient id="glow_gradient_0.jz7x4zjq03" cx="195" cy="68.5" r="0" gradientUnits="userSpaceOnUse" data-v-697d297c="">
                    <stop offset="0%" stopColor="#FFE358" stopOpacity="1" data-v-697d297c=""></stop>
                    <stop offset="100%" stopColor="#FFE358" stopOpacity="0" data-v-697d297c=""></stop>
                </radialGradient>
            </defs>
        </g>
        <path d="M195 87L69.2951 89.2463L-21 96.1614" stroke="url(#ob-linear-gradient-left)" data-v-06b1a6b3=""></path>
        <g data-v-06b1a6b3="" data-v-697d297c="">
            <path d="M195 87L69.2951 89.2463L-21 96.1614" stroke="url(#glow_gradient_0.k3qr4smou9q)" strokeWidth="1.2" mask="url(#glow_mask_0.k3qr4smou9q)" className="svg-path" data-v-697d297c=""></path>
            <motion.circle cx="-21" cy="96.1614" r="1.5" 
            initial={{ opacity: 0 }}
            animate={{
                cx: [-21,69.2951,195],
                cy: [96.1614,89.2463,87],
                transition: { ease: "easeIn",duration: 1 },
               opacity: [1, 0.5,0],
            }}
            exit={{ opacity: 0 }}
            fill="#e6e73a" className="circle-dot" style={{ "--dot-color": "#9fe6fd" } as React.CSSProperties} data-v-697d297c=""></motion.circle>

            <defs data-v-697d297c="">
                <mask id="glow_mask_0.k3qr4smou9q" data-v-697d297c="">
                    <path d="M195 87L69.2951 89.2463L-21 96.1614" fill="black" data-v-697d297c=""></path>
                    <circle cx="195" cy="87" r="0" fill="white" data-v-697d297c=""></circle>
                </mask>
                <radialGradient id="glow_gradient_0.k3qr4smou9q" cx="195" cy="87" r="0" gradientUnits="userSpaceOnUse" data-v-697d297c="">
                    <stop offset="0%" stopColor="#FFE358" stopOpacity="1" data-v-697d297c=""></stop>
                    <stop offset="100%" stopColor="#FFE358" stopOpacity="0" data-v-697d297c=""></stop>
                </radialGradient>
            </defs>
        </g>
        <path d="M195 105.5L89.8055 106.623C76.1575 106.623 62.535 107.924 49.0906 110.511L-21 124" stroke="url(#ob-linear-gradient-left)" data-v-06b1a6b3=""></path>
        <g data-v-06b1a6b3="" data-v-697d297c="">
            <path
                d="M195 105.5L89.8055 106.623C76.1575 106.623 62.535 107.924 49.0906 110.511L-21 124"
                stroke="url(#glow_gradient_0.yshx069yogb)"
                strokeWidth="1.2"
                mask="url(#glow_mask_0.yshx069yogb)"
                className="svg-path"
                data-v-697d297c=""
            ></path>
            <motion.circle cx="-21" cy="124" r="1.5" 
            initial={{ opacity: 0 }}
            animate={{
                cx: [-21,49.0906,62.535,76.1575,89.8055,195],
                cy: [124,110.511,107.924,106.623,106.623,105.5],
                transition: { ease: "easeIn",duration: 1 },
               opacity: [1, 0.5,0],
            }}
            exit={{ opacity: 0 }}
            fill="#e6e73a" className="circle-dot" style={{ "--dot-color": "#9fe6fd" } as React.CSSProperties} data-v-697d297c=""></motion.circle>
            
            <defs data-v-697d297c="">
                <mask id="glow_mask_0.yshx069yogb" data-v-697d297c="">
                    <path d="M195 105.5L89.8055 106.623C76.1575 106.623 62.535 107.924 49.0906 110.511L-21 124" fill="black" data-v-697d297c=""></path>
                    <circle cx="195" cy="105.5" r="0" fill="white" data-v-697d297c=""></circle>
                </mask>
                <radialGradient id="glow_gradient_0.yshx069yogb" cx="195" cy="105.5" r="0" gradientUnits="userSpaceOnUse" data-v-697d297c="">
                    <stop offset="0%" stopColor="#FFE358" stopOpacity="1" data-v-697d297c=""></stop>
                    <stop offset="100%" stopColor="#FFE358" stopOpacity="0" data-v-697d297c=""></stop>
                </radialGradient>
            </defs>
        </g>
        <defs data-v-06b1a6b3="">
            <linearGradient id="ob-linear-gradient-left" x1="-453.247" y1="167.386" x2="196.189" y2="125.855" gradientUnits="userSpaceOnUse" data-v-06b1a6b3="">
                <stop offset="0" stopColor="white" stopOpacity="0" data-v-06b1a6b3=""></stop>
                <stop offset="0.7" stopColor="white" stopOpacity="0.2" data-v-06b1a6b3=""></stop>
                <stop offset="1" stopColor="white" stopOpacity="0" data-v-06b1a6b3=""></stop>
            </linearGradient>
        </defs>
    </svg>
    <svg className="right-lines" width="203" height="113" viewBox="0 0 203 113" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-06b1a6b3="">
        <path d="M0 93.5L105.194 94.623C118.843 94.623 132.465 95.924 145.909 98.5114L216 112" stroke="url(#ob-linear-gradient-right)" data-v-06b1a6b3=""></path>
        <g data-v-06b1a6b3="" data-v-697d297c="">
            <path
                d="M0 93.5 L105.194 94.623 C118.843 94.623 132.465 95.924 145.909 98.5114 L216 112"
                stroke="url(#glow_gradient_0.oso8eiqb18n)"
                strokeWidth="1.2"
                mask="url(#glow_mask_0.oso8eiqb18n)"
                className="svg-path"
                data-v-697d297c=""
            ></path>
            <motion.circle cx="216" cy="112" r="1.5"
            initial={{ opacity: 0 }}
            animate={{
                cx: [216,145.909,132.465,118.843,105.194,0],
                cy: [112,98.5114,95.924,94.623,94.623,93.5],
                transition: { ease: "easeIn",duration: 1 },
               opacity: [1, 0.5,0],
            }}
            exit={{ opacity: 0 }}
            fill="#e6e73a" className="circle-dot" style={{ "--dot-color": "#9fe6fd" } as React.CSSProperties} data-v-697d297c=""></motion.circle>

            <defs data-v-697d297c="">
                <mask id="glow_mask_0.oso8eiqb18n" data-v-697d297c="">
                    <path d="M0 93.5L105.194 94.623C118.843 94.623 132.465 95.924 145.909 98.5114L216 112" fill="black" data-v-697d297c=""></path>
                    <circle cx="0" cy="93.5" r="1" fill="white" data-v-697d297c=""></circle>
                </mask>
                <radialGradient id="glow_gradient_0.oso8eiqb18n" cx="0" cy="93.5" r="0" gradientUnits="userSpaceOnUse" data-v-697d297c="">
                    <stop offset="0%" stopColor="#FFE358" stopOpacity="1" data-v-697d297c=""></stop>
                    <stop offset="100%" stopColor="#FFE358" stopOpacity="0" data-v-697d297c=""></stop>
                </radialGradient>
            </defs>
        </g>
        <path d="M0 75L125.705 77.246L216 83.984" stroke="url(#ob-linear-gradient-right)" data-v-06b1a6b3=""></path>
        <g data-v-06b1a6b3="" data-v-697d297c="">
            <path d="M0 75 L125.705 77.246 L216 83.984" stroke="url(#glow_gradient_0.ftsgx85djmr)" strokeWidth="1.2" mask="url(#glow_mask_0.ftsgx85djmr)" className="svg-path" data-v-697d297c=""></path>
            <motion.circle cx="216" cy="83.984" r="1.5"
            initial={{ opacity: 0 }}
            animate={{
                cx: [216,125.705,0],
                cy: [83.984,77.246,75],
                transition: { ease: "easeIn",duration: 1 },
               opacity: [1, 0.5,0],
            }}
            exit={{ opacity: 0 }}
            fill="#e6e73a" className="circle-dot" style={{ "--dot-color": "#9fe6fd" } as React.CSSProperties} data-v-697d297c=""></motion.circle>

            <defs data-v-697d297c="">
                <mask id="glow_mask_0.ftsgx85djmr" data-v-697d297c="">
                    <path d="M0 75L125.705 77.246L216 83.984" fill="black" data-v-697d297c=""></path>
                    <circle cx="0" cy="75" r="0" fill="white" data-v-697d297c=""></circle>
                </mask>
                <radialGradient id="glow_gradient_0.ftsgx85djmr" cx="0" cy="75" r="0" gradientUnits="userSpaceOnUse" data-v-697d297c="">
                    <stop offset="0%" stopColor="#FFE358" stopOpacity="1" data-v-697d297c=""></stop>
                    <stop offset="100%" stopColor="#FFE358" stopOpacity="0" data-v-697d297c=""></stop>
                </radialGradient>
            </defs>
        </g>
        <path d="M4.65162e-08 56.5L216 55.4358" stroke="url(#ob-linear-gradient-right)" data-v-06b1a6b3=""></path>
        <g data-v-06b1a6b3="" data-v-697d297c="">
            <path d="M4.65162e-08 56.5 L216 55.4358" stroke="url(#glow_gradient_0.0ybqxi04mg4a)" strokeWidth="1.2" mask="url(#glow_mask_0.0ybqxi04mg4a)" className="svg-path" data-v-697d297c=""></path>
            <motion.circle cx="216" cy="55.4358" r="1.5"
            initial={{ opacity: 0 }}
            animate={{
                cx: [216,4.65162e-08],
                cy: [55.4358,56.5],
                transition: { ease: "easeIn",duration: 1 },
               opacity: [1, 0.5,0],
            }}
            exit={{ opacity: 0 }}
            fill="#e6e73a" className="circle-dot" style={{ "--dot-color": "#9fe6fd" } as React.CSSProperties} data-v-697d297c=""></motion.circle>

            <defs data-v-697d297c="">
                <mask id="glow_mask_0.0ybqxi04mg4a" data-v-697d297c="">
                    <path d="M4.65162e-08 56.5L216 55.4358" fill="black" data-v-697d297c=""></path>
                    <circle cx="4.6516198892732064e-8" cy="56.5" r="0" fill="white" data-v-697d297c=""></circle>
                </mask>
                <radialGradient id="glow_gradient_0.0ybqxi04mg4a" cx="4.6516198892732064e-8" cy="56.5" r="0" gradientUnits="userSpaceOnUse" data-v-697d297c="">
                    <stop offset="0%" stopColor="#FFE358" stopOpacity="1" data-v-697d297c=""></stop>
                    <stop offset="100%" stopColor="#FFE358" stopOpacity="0" data-v-697d297c=""></stop>
                </radialGradient>
            </defs>
        </g>
        <path d="M4.00455e-07 38L125.705 35.7537L216 28.8386" stroke="url(#ob-linear-gradient-right)" data-v-06b1a6b3=""></path>
        <g data-v-06b1a6b3="" data-v-697d297c="">
            <path d="M4.00455e-07 38L125.705 35.7537L216 28.8386" stroke="url(#glow_gradient_0.stzneme1z5)" strokeWidth="1.2" mask="url(#glow_mask_0.stzneme1z5)" className="svg-path" data-v-697d297c=""></path>
            <motion.circle cx="216" cy="28.8386" r="1.5"
            initial={{ opacity: 0 }}
            animate={{
                cx: [216,125.705,4.004550078207103e-7],
                cy: [28.8386,35.7537,38],
                transition: { ease: "easeIn",duration: 1 },
               opacity: [1, 0.5,0],
            }}
            exit={{ opacity: 0 }}
            fill="#e6e73a" className="circle-dot" style={{ "--dot-color": "#9fe6fd" } as React.CSSProperties} data-v-697d297c=""></motion.circle>

            <defs data-v-697d297c="">
                <mask id="glow_mask_0.stzneme1z5" data-v-697d297c="">
                    <path d="M4.00455e-07 38L125.705 35.7537L216 28.8386" fill="black" data-v-697d297c=""></path>
                    <circle cx="4.004550078207103e-7" cy="38" r="0" fill="white" data-v-697d297c=""></circle>
                </mask>
                <radialGradient id="glow_gradient_0.stzneme1z5" cx="4.004550078207103e-7" cy="38" r="0" gradientUnits="userSpaceOnUse" data-v-697d297c="">
                    <stop offset="0%" stopColor="#FFE358" stopOpacity="1" data-v-697d297c=""></stop>
                    <stop offset="100%" stopColor="#FFE358" stopOpacity="0" data-v-697d297c=""></stop>
                </radialGradient>
            </defs>
        </g>
        <path d="M8.0866e-07 19.5L105.194 18.377C118.843 18.377 132.465 17.076 145.909 14.4887L216 1" stroke="url(#ob-linear-gradient-right)" data-v-06b1a6b3=""></path>
        <g data-v-06b1a6b3="" data-v-697d297c="">
            <path
                d="M8.0866e-07 19.5L105.194 18.377C118.843 18.377 132.465 17.076 145.909 14.4887L216 1"
                stroke="url(#glow_gradient_0.ljnxoccgg6h)"
                strokeWidth="1.2"
                mask="url(#glow_mask_0.ljnxoccgg6h)"
                className="svg-path"
                data-v-697d297c=""
            ></path>
            <motion.circle cx="14.4887L216" cy="1" r="1.5"
            initial={{ opacity: 0 }}
            animate={{
                cx: [216,145.909,132.465,118.843,105.194,8.086600473689032e-7],
                cy: [1,14.4887,17.076,18.377,18.377,19.5],
                transition: { ease: "easeIn",duration: 1 },
               opacity: [1, 0.5,0],
            }}
            exit={{ opacity: 0 }}
            fill="#e6e73a" className="circle-dot" style={{ "--dot-color": "#9fe6fd" } as React.CSSProperties} data-v-697d297c=""></motion.circle>

            <defs data-v-697d297c="">
                <mask id="glow_mask_0.ljnxoccgg6h" data-v-697d297c="">
                    <path d="M8.0866e-07 19.5L105.194 18.377C118.843 18.377 132.465 17.076 145.909 14.4887L216 1" fill="black" data-v-697d297c=""></path>
                    <circle cx="8.086600473689032e-7" cy="19.5" r="0" fill="white" data-v-697d297c=""></circle>
                </mask>
                <radialGradient id="glow_gradient_0.ljnxoccgg6h" cx="8.086600473689032e-7" cy="19.5" r="0" gradientUnits="userSpaceOnUse" data-v-697d297c="">
                    <stop offset="0%" stopColor="#FFE358" stopOpacity="1" data-v-697d297c=""></stop>
                    <stop offset="100%" stopColor="#FFE358" stopOpacity="0" data-v-697d297c=""></stop>
                </radialGradient>
            </defs>
        </g>
        <defs data-v-06b1a6b3="">
            <linearGradient id="ob-linear-gradient-right" x1="648.247" y1="-42.3859" x2="-1.18927" y2="-0.855247" gradientUnits="userSpaceOnUse" data-v-06b1a6b3="">
                <stop offset="0" stopColor="white" stopOpacity="0" data-v-06b1a6b3=""></stop>
                <stop offset="0.7" stopColor="white" stopOpacity="0.2" data-v-06b1a6b3=""></stop>
                <stop offset="1" stopColor="white" stopOpacity="0" data-v-06b1a6b3=""></stop>
            </linearGradient>
        </defs>
    </svg>
   
    <svg className="bolt" width="180" height="263" viewBox="0 0 180 263" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-06b1a6b3="">
        <g filter="url(#filter-bolt-glow)" className="bolt__glow" data-v-06b1a6b3="">
            <path
                d="M111.597 57.0439L61.562 69.1637C60.7396 69.3629 60.1308 70.2245 60.0812 71.2584L57.0033 135.519C56.9309 137.032 58.0553 138.207 59.2503 137.866L73.1807 133.892C74.4841 133.521 75.6618 134.94 75.3939 136.56L71.2552 161.613C70.9767 163.3 72.2573 164.741 73.5893 164.241L82.1934 161.01C83.5273 160.509 84.8089 161.955 84.5267 163.643L77.9496 202.996C77.538 205.458 80.1867 206.8 81.2913 204.689L82.0291 203.28L122.8 102.695C123.483 101.011 122.306 99.0908 120.809 99.4478L106.47 102.869C105.123 103.19 103.976 101.639 104.357 100.009L113.715 59.9023C114.096 58.2698 112.946 56.7172 111.597 57.0439Z"
                fill="url(#paint0_radial_693_18989)"
                data-v-06b1a6b3=""
            ></path>
        </g>
        <g filter="url(#filter-bolt-edge-glow)" className="bolt__glow" data-v-06b1a6b3="">
            <path
                d="M111.597 57.0361L61.562 67.0126C60.7396 67.1765 60.1308 67.8857 60.0812 68.7368L57.0033 121.633C56.9309 122.879 58.0553 123.846 59.2503 123.565L73.1807 120.294C74.4841 119.988 75.6618 121.156 75.3939 122.49L71.2552 143.113C70.9767 144.501 72.2573 145.688 73.5893 145.276L82.1934 142.616C83.5273 142.204 84.8089 143.394 84.5267 144.783L77.9496 177.177C77.538 179.203 80.1867 180.308 81.2913 178.571L82.0291 177.41L122.8 94.6142C123.483 93.2278 122.306 91.6471 120.809 91.9409L106.47 94.757C105.123 95.0214 103.976 93.7444 104.357 92.4029L113.715 59.389C114.096 58.0452 112.946 56.7672 111.597 57.0361Z"
                stroke="url(#paint1_radial_693_18989)"
                strokeWidth="3.34777"
                data-v-06b1a6b3=""
            ></path>
        </g>
        <mask id="bolt-mask" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="56" y="56" width="68" height="124" data-v-06b1a6b3="">
            <path
                d="M111.597 57.0361L61.562 67.0126C60.7396 67.1765 60.1308 67.8857 60.0812 68.7368L57.0033 121.633C56.9309 122.879 58.0553 123.846 59.2503 123.565L73.1807 120.294C74.4841 119.988 75.6618 121.156 75.3939 122.49L71.2552 143.113C70.9767 144.501 72.2573 145.688 73.5893 145.276L82.1934 142.616C83.5273 142.204 84.8089 143.394 84.5267 144.783L77.9496 177.177C77.538 179.203 80.1867 180.308 81.2913 178.571L82.0291 177.41L122.8 94.6142C123.483 93.2278 122.306 91.6471 120.809 91.9409L106.47 94.757C105.123 95.0214 103.976 93.7444 104.357 92.4029L113.715 59.389C114.096 58.0452 112.946 56.7672 111.597 57.0361Z"
                fill="url(#linear-mask)"
                data-v-06b1a6b3=""
            ></path>
            <path
                d="M59.8424 68.7229L59.8424 68.7229L56.7646 121.619L57.0033 121.633L56.7646 121.619C56.6833 123.019 57.9486 124.116 59.305 123.798L73.2353 120.527C74.3622 120.262 75.3945 121.273 75.1595 122.443L75.3939 122.49L75.1595 122.443L71.0208 143.066C70.7081 144.624 72.147 145.972 73.6599 145.504L73.5893 145.276L73.6599 145.504L82.264 142.844C83.4168 142.488 84.54 143.516 84.2924 144.735L84.5267 144.783L84.2924 144.735L77.7152 177.129C77.255 179.395 80.235 180.678 81.4931 178.699L82.2309 177.539L82.2379 177.528L82.2436 177.516L123.015 94.7198C123.781 93.1646 122.463 91.3725 120.763 91.7063L106.424 94.5223C106.424 94.5223 106.424 94.5224 106.424 94.5224C105.259 94.7509 104.253 93.6453 104.587 92.4681L113.946 59.4542L113.946 59.4542C114.373 57.9459 113.082 56.4962 111.55 56.8016L111.597 57.0361L111.55 56.8016L61.5153 66.7781C60.5836 66.9638 59.8982 67.7658 59.8424 68.7229Z"
                stroke="white"
                strokeOpacity="0.3"
                strokeWidth="0.478253"
                data-v-06b1a6b3=""
            ></path>
        </mask>
        <g mask="url(#bolt-mask)" data-v-06b1a6b3="">
            <rect className="bolt__dark" x="41.2188" y="57" width="92.7811" height="136.78" fill="#1E1E1E" data-v-06b1a6b3=""></rect>
            <rect className="bolt__color" x="41.2188" y="57" width="92.7811" height="136.78" fill="url(#radial-bolt-color)" data-v-06b1a6b3=""></rect>
            <rect className="bolt__highlight" x="41.2188" y="57" width="92.7811" height="136.78" fill="white" data-v-06b1a6b3=""></rect>
            <path
                className="bolt__edge"
                d="M111.597 57.0361L61.562 67.0126C60.7396 67.1765 60.1308 67.8857 60.0812 68.7368L57.0033 121.633C56.9309 122.879 58.0553 123.846 59.2503 123.565L73.1807 120.294C74.4841 119.988 75.6618 121.156 75.3939 122.49L71.2552 143.113C70.9767 144.501 72.2573 145.688 73.5893 145.276L82.1934 142.616C83.5273 142.204 84.8089 143.394 84.5267 144.783L77.9496 177.177C77.538 179.203 80.1867 180.308 81.2913 178.571L82.0291 177.41L122.8 94.6142C123.483 93.2278 122.306 91.6471 120.809 91.9409L106.47 94.757C105.123 95.0214 103.976 93.7444 104.357 92.4029L113.715 59.389C114.096 58.0452 112.946 56.7672 111.597 57.0361Z"
                stroke="url(#radial-bolt-edge)"
                strokeWidth="3"
                data-v-06b1a6b3=""
            ></path>
        </g>
        <defs data-v-06b1a6b3="">
            <filter id="filter-bolt-glow" x="0.0878601" y="0.0878601" width="179.823" height="262.561" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" data-v-06b1a6b3="">
                <feFlood floodOpacity="0" result="BackgroundImageFix" data-v-06b1a6b3=""></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-06b1a6b3=""></feBlend>
                <feGaussianBlur stdDeviation="28.4561" result="effect1_foregroundBlur_693_18989" data-v-06b1a6b3=""></feGaussianBlur>
            </filter>
            <filter id="filter-bolt-edge-glow" x="48.6306" y="48.6283" width="82.7363" height="139.202" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" data-v-06b1a6b3="">
                <feFlood floodOpacity="0" result="BackgroundImageFix" data-v-06b1a6b3=""></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-06b1a6b3=""></feBlend>
                <feGaussianBlur stdDeviation="3.34777" result="effect1_foregroundBlur_693_18989" data-v-06b1a6b3=""></feGaussianBlur>
            </filter>
            <radialGradient id="paint0_radial_693_18989" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.4533 63.5007) rotate(81.9567) scale(108.196 88.8357)" data-v-06b1a6b3="">
                <stop offset="0" stopColor="#FFEA83" data-v-06b1a6b3=""></stop>
                <stop offset="0.0833333" stopColor="#FFDD35" data-v-06b1a6b3=""></stop>
                <stop offset="1" stopColor="#FFA800" data-v-06b1a6b3=""></stop>
            </radialGradient>
            <radialGradient id="paint1_radial_693_18989" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.4533 62.3511) rotate(80.2589) scale(89.4759 88.4248)" data-v-06b1a6b3="">
                <stop offset="0" stopColor="#FFEA83" data-v-06b1a6b3=""></stop>
                <stop offset="0.0833333" stopColor="#FFDD35" data-v-06b1a6b3=""></stop>
                <stop offset="1" stopColor="#FFA800" data-v-06b1a6b3=""></stop>
            </radialGradient>
            <linearGradient id="linear-mask" x1="75.4703" y1="59.7447" x2="91.2207" y2="165.923" gradientUnits="userSpaceOnUse" data-v-06b1a6b3="">
                <stop offset="0" stopColor="#FFEA83" data-v-06b1a6b3=""></stop>
                <stop offset="0.0833333" stopColor="#FFDD35" data-v-06b1a6b3=""></stop>
                <stop offset="1" stopColor="#FFA800" data-v-06b1a6b3=""></stop>
            </linearGradient>
            <radialGradient id="radial-bolt-color" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(72.7835 62.9782) rotate(77.8103) scale(100.793 123.282)" data-v-06b1a6b3="">
                <stop offset="0" stopColor="#FFEA83" data-v-06b1a6b3=""></stop>
                <stop offset="0.0833333" stopColor="#FFDD35" data-v-06b1a6b3=""></stop>
                <stop offset="1" stopColor="#FFA800" data-v-06b1a6b3=""></stop>
            </radialGradient>
            <radialGradient id="radial-bolt-edge" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.4533 62.3511) rotate(80.2589) scale(89.4759 88.4248)" data-v-06b1a6b3="">
                <stop offset="0" stopColor="#FFDD35" data-v-06b1a6b3=""></stop>
                <stop offset="1" stopColor="#FFA800" data-v-06b1a6b3=""></stop>
            </radialGradient>
        </defs>
    </svg>


</div>


<div className=" text-center w-full">
              <div className="meta_title">Optimized build</div>
              <div className="meta_description"> Pre-configured Rollup build with multi-page and library mode support.</div>
            </div>

        </div>
    </div>
</div>

    </div>
  );
}
