
"use client";
import Image from "next/image";

import { motion } from "motion/react";
export default function BannerAnimation() {
    return (
        <div className=" relative wrapper pb-16">

            <div className="inner_wrapper text-white" style={{margin: "95px auto 0"}}>
                <h1>Social Media Sentiment Analysis Tool</h1>
            <h3>PostSocial is a Social Media Analytics SaaS platform that helps users create detailed reports, receive actionable suggestions, and accelerate growth across social media platforms.</h3>
            <div className="hero__actions flex">
            <a href="" className="btn btn--primary">Get Started</a>
            <a href="" className="btn btn--outline">
                <Image src="/github.svg" alt="GitHub logo" width="20" height="20"></Image>
                Github
            </a>
            </div>
            </div>          

            {/* All SVGs below have y/xy values subtracted by 350 as requested */}
            {/* All SVGs below have y/xy values increased by 40 as requested */}
        {/* All SVGs below have y/xy values increased by 40 as requested */}
        <svg className=" stroke-base_gradient" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 460">
            {/* 4 start */}
            <g>
                <path
                    fill="none"
                    opacity="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.1"
                    d="M482.000000,258.000000 
            C472.697357,259.286560 463.270477,259.286133 453.982635,260.900085 
            C450.229645,261.552246 446.333588,261.409424 442.483704,261.860962 
            C430.695221,263.243530 418.802002,263.726135 407.008667,265.075806 
            C394.846771,266.467651 382.682007,267.795593 370.507782,269.074219 
            C357.806213,270.408264 345.175018,272.400513 332.497162,273.977295 
            C323.511780,275.094788 314.442871,275.645203 305.513367,277.082947 
            C292.034515,279.253357 278.462891,280.732056 264.967194,282.784302 
            C254.850281,284.322693 244.690872,285.834839 234.507416,287.061523 
            C225.806793,288.109558 217.175659,289.776367 208.532837,291.199402 
            C199.353149,292.710754 190.154526,294.272400 181.005615,296.029236 
            C171.854050,297.786499 162.672836,299.399292 153.527802,301.145630 
            C138.923813,303.934387 124.534203,307.825317 109.991364,310.959900 
            C91.635414,314.916504 73.510170,319.796997 55.540096,325.134949 
            C38.567944,330.176514 21.756239,335.861084 5.504055,343.009216 
            C4.059762,343.644470 2.084115,343.467896 1.500000,345.500000 
        "
                />
                <motion.circle
                    r="3"
                    style={{ border:"none", fill: "var(--filterColor1)", fontWeight: "normal" }}
                    className="filterColorClass1"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: [1.5, 2.084115, 4.059762, 5.504055, 21.756239, 38.567944, 55.540096, 73.510170, 91.635414, 109.991364, 124.534203, 138.923813, 153.527802, 162.672836, 171.854050, 181.005615, 190.154526, 199.353149, 208.532837, 217.175659, 225.806793, 234.507416, 244.690872, 254.850281, 264.967194, 278.462891, 292.034515, 305.513367, 314.442871, 323.511780, 332.497162, 345.175018, 357.806213, 370.507782, 382.682007, 394.846771, 407.008667, 418.802002, 430.695221, 442.483704, 446.333588, 450.229645, 453.982635, 463.270477, 472.697357, 482.000000],
                        cy: [345.5, 343.467896, 343.64447, 343.009216, 335.861084, 330.176514, 325.134949, 319.796997, 314.916504, 310.9599, 307.825317, 303.934387, 301.14563, 299.399292, 297.786499, 296.029236, 294.2724, 292.710754, 291.199402, 289.776367, 288.109558, 287.061523, 285.834839, 284.322693, 282.784302, 280.732056, 279.253357, 277.082947, 275.645203, 275.094788, 273.977295, 272.400513, 270.408264, 269.074219, 267.795593, 266.467651, 265.075806, 263.726135, 263.24353, 261.860962, 261.409424, 261.552246, 260.900085, 259.286133, 259.28656, 258],
                        transition: { ease: "linear", duration: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: [ 0.5, 1, 0],
                    }}
                    exit={{ opacity: 0 }}
                />
                <motion.text
                    style={{ fill: "black",letterSpacing:"2px",fontWeight:"normal" }}
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [1.5, 2.084115, 4.059762, 5.504055, 21.756239, 38.567944, 55.540096, 73.510170, 91.635414, 109.991364, 124.534203, 138.923813, 153.527802, 162.672836, 171.854050, 181.005615, 190.154526, 199.353149, 208.532837, 217.175659, 225.806793, 234.507416, 244.690872, 254.850281, 264.967194, 278.462891, 292.034515, 305.513367, 314.442871, 323.511780, 332.497162, 345.175018, 357.806213, 370.507782, 382.682007, 394.846771, 407.008667, 418.802002, 430.695221, 442.483704, 446.333588, 450.229645, 453.982635, 463.270477, 472.697357, 482.000000],
                        y: [360.5, 358.467896, 358.64447, 358.009216, 350.861084, 345.176514, 340.134949, 334.796997, 329.916504, 325.9599, 322.825317, 318.934387, 316.14563, 314.399292, 312.786499, 311.029236, 309.2724, 307.710754, 306.199402, 304.776367, 303.109558, 302.061523, 300.834839, 299.322693, 297.784302, 295.732056, 294.253357, 292.082947, 290.645203, 290.094788, 288.977295, 287.400513, 285.408264, 284.074219, 282.795593, 281.467651, 280.075806, 278.726135, 278.24353, 276.860962, 276.409424, 276.552246, 275.900085, 274.286133, 274.28656, 273],
                        transition: { ease: "linear", duration: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: [ 0.5, 1, 0],
                    }}
                    exit={{ opacity: 0 }}
                    className="label"
                >
                    .json
                </motion.text>
            </g>
            {/* 4 end */}

            {/* 3 start */}
            <g>
                <path
                    fill="none"
                    opacity="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.1"
                    d="M482.000000,231.000000 
                   C321.833344,231.000000 161.666672,231.000000 1.500000,231.000000"
                />

                <motion.circle
                    r="3"
                    style={{ border:"none", fill: "var(--filterColor2)", fontWeight: "normal" }}
                    className="filterColorClass2"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: [
                            1.50,                                
                            161.66,
                            321.83,
                            482,
                        ],
                        cy: [
                            231,
                            231,
                            231,
                            231
                        ],
                        transition: { ease: "linear", duration: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: [ 0.5, 1, 0],
                    }}
                    exit={{ opacity: 0 }}
                />
                <motion.text
                    style={{ fill: "black",letterSpacing:"2px",fontWeight:"normal" }}
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [
                            1.50,                                
                            161.66,
                            321.83,
                            482,
                        ],
                        y: [
                            246,
                            246,
                            246,
                            246
                        ],
                        transition: { ease: "linear", duration: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: [ 0.5, 1, 0],
                    }}
                    exit={{ opacity: 0 }}
                    className="label"
                >
                    .js
                </motion.text>
            </g>
            {/* 3 end */}

            {/* 1 start */}
            <g>
                <path
                    fill="none"
                    opacity="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.1"
                    d="M2.000000,1.000000 
            C34.230396,20.564667 67.189957,38.821594 101.029297,55.440338 
            C120.701607,65.101562 140.499664,74.544037 160.539001,83.411865 
            C190.862137,96.830505 221.766205,108.858551 253.012100,119.965942 
            C276.607635,128.353790 300.465942,135.939880 324.481110,143.063660 
            C347.985321,150.035858 371.716553,156.133453 395.524017,161.900879 
            C415.406921,166.717529 435.420410,171.099396 455.536926,174.799255 
            C464.289124,176.408997 472.999786,178.772308 482.000000,179.000000 
        "
                />

                <motion.circle
                    r="3"
                    style={{ border:"none", fill: "var(--filterColor3)", fontWeight: "normal" }}
                    className="filterColorClass3"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: [
                            67.189957,
                            101.029297,
                            120.701607,
                            140.499664,
                            160.539001,
                            190.862137,
                            221.766205,
                            253.0121,
                            276.607635,
                            300.465942,
                            324.48111,
                            347.985321,
                            371.716553,
                            395.524017,
                            415.406921,
                            435.42041,
                            455.536926,
                            464.289124,
                            472.999786,
                            482,
                        ],
                        cy: [
                            38.821594 ,
                            55.440338 ,
                            65.101562 ,
                            74.544037 ,
                            83.411865 ,
                            96.830505 ,
                            108.858551 ,
                            119.965942 ,
                            128.35379 ,
                            135.93988 ,
                            143.06366 ,
                            150.035858 ,
                            156.133453 ,
                            161.900879 ,
                            166.717529 ,
                            171.099396 ,
                            174.799255 ,
                            176.408997 ,
                            178.772308 ,
                            179 ,
                        ],
                        transition: { ease: "linear", duration: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: [ 0.5, 1, 0],
                    }}
                    exit={{ opacity: 0 }}
                />
                <motion.text
                    style={{ fill: "black",letterSpacing:"2px",fontWeight:"normal" }}
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [
                            67.189957,
                            101.029297,
                            120.701607,
                            140.499664,
                            160.539001,
                            190.862137,
                            221.766205,
                            253.0121,
                            276.607635,
                            300.465942,
                            324.48111,
                            347.985321,
                            371.716553,
                            395.524017,
                            415.406921,
                            435.42041,
                            455.536926,
                            464.289124,
                            472.999786,
                            482,
                        ],
                        y: [
                            53.821594,
                            70.440338,
                            80.101562,
                            89.544037,
                            98.411865,
                            111.830505,
                            123.858551,
                            134.965942,
                            143.35379,
                            150.93988,
                            158.06366,
                            165.035858,
                            171.133453,
                            176.900879,
                            181.717529,
                            186.099396,
                            189.799255,
                            191.408997,
                            193.772308,
                            194
                        ],
                        transition: { ease: "linear", duration: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: [ 0.5, 1, 0],
                    }}
                    exit={{ opacity: 0 }}
                    className="label"
                >
                    <Image src="/icons/x.png" alt="React logo" width={16} height={16} style={{ display: "inline", marginRight: "4px", marginBottom: "2px" }}></Image>
                </motion.text>
                <motion.image
                    href="/icons/x.png"
                    width={16}
                    height={16}
                    style={{ display: "inline", marginRight: "4px", marginBottom: "2px" }}
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: [
                            67.189957,
                            101.029297,
                            120.701607,
                            140.499664,
                            160.539001,
                            190.862137,
                            221.766205,
                            253.0121,
                            276.607635,
                            300.465942,
                            324.48111,
                            347.985321,
                            371.716553,
                            395.524017,
                            415.406921,
                            435.42041,
                            455.536926,
                            464.289124,
                            472.999786,
                            482,
                        ],
                        cy: [
                            38.821594 ,
                            55.440338 ,
                            65.101562 ,
                            74.544037 ,
                            83.411865 ,
                            96.830505 ,
                            108.858551 ,
                            119.965942 ,
                            128.35379 ,
                            135.93988 ,
                            143.06366 ,
                            150.035858 ,
                            156.133453 ,
                            161.900879 ,
                            166.717529 ,
                            171.099396 ,
                            174.799255 ,
                            176.408997 ,
                            178.772308 ,
                            179 ,
                        ],
                        transition: { ease: "linear", duration: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: [ 0.5, 1, 0],
                    }}
                    exit={{ opacity: 0 }}
                />
            </g>
            {/* 1 end */}

            {/* 2 start */}
            <g>
                <path
                    fill="none"
                    opacity="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.1"
                    d="M2.000000,115.000000 
            C15.349727,121.337982 29.446733,125.672363 43.531300,129.895599 
            C57.889759,134.200989 72.440956,137.911194 87.016701,141.430847 
            C101.440323,144.913788 115.990837,147.876068 130.502670,150.987518 
            C143.990143,153.879333 157.479156,156.771179 171.006348,159.468201 
            C182.642441,161.788177 194.327789,163.863739 206.001495,165.991821 
            C218.995026,168.360596 231.980713,170.781555 245.005463,172.967407 
            C257.813751,175.116852 270.686066,176.884125 283.494934,179.030304 
            C298.469147,181.539276 313.460144,183.902710 328.484924,186.103027 
            C341.823517,188.056396 355.148285,190.124939 368.479706,192.134552 
            C381.976196,194.169037 395.466309,196.214539 408.994171,198.043213 
            C421.491486,199.732574 433.976501,201.502808 446.480560,203.147766 
            C458.322845,204.705688 470.101990,206.792603 482.000000,208.000000 
        "
                />

                <motion.circle
                    r="3"
                    style={{ border:"none", fill: "var(--filterColor4)", fontWeight: "normal" }}
                    className="filterColorClass4"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: [
                            2.0,
                            15.349727,
                            29.446733,
                            43.5313,
                            57.889759,
                            72.440956,
                            87.016701,
                            101.440323,
                            115.990837,
                            130.50267,
                            143.990143,
                            157.479156,
                            171.006348,
                            182.642441,
                            194.327789,
                            206.001495,
                            218.995026,
                            231.980713,
                            245.005463,
                            257.813751,
                            270.686066,
                            283.494934,
                            298.469147,
                            313.460144,
                            328.484924,
                            341.823517,
                            355.148285,
                            368.479706,
                            381.976196,
                            395.466309,
                            408.994171,
                            421.491486,
                            433.976501,
                            446.48056,
                            458.322845,
                            470.10199,
                            482,
                        ],
                        cy: [
                            115,
                            121.337982,
                            125.672363,
                            129.895599,
                            134.200989,
                            137.911194,
                            141.430847,
                            144.913788,
                            147.876068,
                            150.987518,
                            153.879333,
                            156.771179,
                            159.468201,
                            161.788177,
                            163.863739,
                            165.991821,
                            168.360596,
                            170.781555,
                            172.967407,
                            175.116852,
                            176.884125,
                            179.030304,
                            181.539276,
                            183.90271,
                            186.103027,
                            188.056396,
                            190.124939,
                            192.134552,
                            194.169037,
                            196.214539,
                            198.043213,
                            199.732574,
                            201.502808,
                            203.147766,
                            204.705688,
                            206.792603,
                            208,
                        ],
                        transition: { ease: "linear", duration: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: [ 0.5, 1, 0],
                    }}
                    exit={{ opacity: 0 }}
                />
                <motion.text
                    style={{ fill: "black",letterSpacing:"2px",fontWeight:"normal" }}
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [
                            2.0,
                            15.349727,
                            29.446733,
                            43.5313,
                            57.889759,
                            72.440956,
                            87.016701,
                            101.440323,
                            115.990837,
                            130.50267,
                            143.990143,
                            157.479156,
                            171.006348,
                            182.642441,
                            194.327789,
                            206.001495,
                            218.995026,
                            231.980713,
                            245.005463,
                            257.813751,
                            270.686066,
                            283.494934,
                            298.469147,
                            313.460144,
                            328.484924,
                            341.823517,
                            355.148285,
                            368.479706,
                            381.976196,
                            395.466309,
                            408.994171,
                            421.491486,
                            433.976501,
                            446.48056,
                            458.322845,
                            470.10199,
                            482
                        ],
                        y: [
                            130,
                            136.337982,
                            140.672363,
                            144.895599,
                            149.200989,
                            152.911194,
                            156.430847,
                            159.913788,
                            162.876068,
                            165.987518,
                            168.879333,
                            171.771179,
                            174.468201,
                            176.788177,
                            178.863739,
                            180.991821,
                            183.360596,
                            185.781555,
                            187.967407,
                            190.116852,
                            191.884125,
                            194.030304,
                            196.539276,
                            198.90271,
                            201.103027,
                            203.056396,
                            205.124939,
                            207.134552,
                            209.169037,
                            211.214539,
                            213.043213,
                            214.732574,
                            216.502808,
                            218.147766,
                            219.705688,
                            221.792603,
                            223
                        ],
                        transition: { ease: "linear", duration: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: [ 0.5, 1, 0],
                    }}
                    exit={{ opacity: 0 }}
                    className="label"
                >
                    .css
                </motion.text>
            </g>
            {/* 2 end */}
            {/* 5 start */}
            <g>
                <path
                    fill="none"
                    opacity="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.1"
                    d="M482.000000,285.000000 
            C474.291534,285.160645 466.995392,287.707214 459.530182,289.155518 
            C445.093536,291.956482 430.802032,295.538513 416.507324,299.030029 
            C395.145721,304.247559 373.739594,309.321350 352.522125,315.081604 
            C321.275513,323.564636 290.244904,332.820801 259.501160,343.003479 
            C223.889572,354.798401 188.644562,367.676025 154.080353,382.191345 
            C122.469856,395.466248 91.299194,409.829407 60.964970,425.934021 
            C41.049618,436.507141 21.143587,447.064819 2.000000,459.000000" />

                <motion.circle
                    r="3"
                    style={{ border:"none", fill: "var(--filterColor5)",fontWeight: "normal" }}
                    className="filterColorClass5"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: [2, 21.143587, 41.049618, 60.964970, 91.299194, 122.469856, 154.080353, 188.644562, 223.889572, 259.501160, 290.244904, 321.275513, 352.522125, 373.739594, 395.145721, 416.507324, 430.802032, 445.093536, 459.530182, 466.995392, 474.291534, 482],
                        cy: [459, 447.064819, 436.507141, 425.934021, 409.829407, 395.466248, 382.191345, 367.676025, 354.798401, 343.003479, 332.820801, 323.564636, 315.081604, 309.32135, 304.247559, 299.030029, 295.538513, 291.956482, 289.155518, 287.707214, 285.160645, 285],
                        transition: { ease: "linear", duration: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: [ 0.5, 1, 0],
                    }}
                    exit={{ opacity: 0 }}
                />

                <motion.text
                    style={{ fill: "black",letterSpacing:"2px",fontWeight:"normal" }}
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [2, 21.143587, 41.049618, 60.964970, 91.299194, 122.469856, 154.080353, 188.644562, 223.889572, 259.501160, 290.244904, 321.275513, 352.522125, 373.739594, 395.145721, 416.507324, 430.802032, 445.093536, 459.530182, 466.995392, 474.291534, 482],
                        y: [474, 462.064819, 451.507141, 440.934021, 424.829407, 410.466248, 397.191345, 382.676025, 369.798401, 358.003479, 347.820801, 338.564636, 330.081604, 324.32135, 319.247559, 314.030029, 310.538513, 306.956482, 304.155518, 302.707214, 300.160645, 300],
                        transition: { ease: "linear", duration: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: [ 0.5, 1, 0],
                    }}
                    exit={{ opacity: 0 }}
                    className="label"
                >
                    .ts
                </motion.text>
            </g>
            {/* 5 end */}
            {/* 6 start */}
            <g>
                <path
                    fill="none"
                    opacity="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.1"
                    d="M1080.500000,231.000000 
            C931.000000,231.000000 781.500000,231.000000 632.000000,231.000000 
        "
                />
                <motion.circle
                    r="3"
                    style={{ border:"none", fill: "var(--filterColor1)",fontWeight: "normal" }}
                    className="filterColorClass1"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: [707, 782, 857, 932, 1007, 1085],
                        cy: [231, 231, 231, 231, 231, 231],
                        transition: { ease: "linear", duration: 3, delay: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                />
                <motion.text
                    style={{ fill: "black",letterSpacing:"2px",fontWeight:"normal" }}
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [707, 782, 857, 932, 1007, 1085],
                        y: [246, 246, 246, 246, 246, 246],
                        transition: { ease: "linear", duration: 3, delay: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                    className="label"
                >
                    .html
                </motion.text>

                <motion.circle
                    r="3"
                    style={{ border:"none", fill: "var(--filterColor2)", fontWeight: "normal" }}
                    className="filterColorClass2"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: [782, 857, 932, 1007, 1085],
                        cy: [ 231, 231, 231, 231, 231],
                        transition: { ease: "linear", duration: 3, delay: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                />
                <motion.text
                    style={{ fill: "black",letterSpacing:"2px",fontWeight:"normal" }}
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [782, 857, 932, 1007, 1085],
                        y: [246, 246, 246, 246,246],
                        transition: { ease: "linear", duration: 3, delay: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                    className="label"
                >
                    .css
                </motion.text>

                <motion.circle
                    r="3"
                    style={{ border:"none", fill: "var(--filterColor3)", fontWeight: "normal" }}
                    className="filterColorClass3"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: [ 857, 932, 1007, 1085],
                        cy: [ 231, 231, 231,231],
                        transition: { ease: "linear", duration: 3, delay: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                />
                <motion.text
                    style={{ fill: "black",letterSpacing:"2px",fontWeight:"normal" }}
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [857, 932, 1007, 1085],
                        y: [246, 246, 246,246],
                        transition: { ease: "linear", duration: 3, delay: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                    className="label"
                >
                    .js
                </motion.text>

                <motion.circle
                    r="3"
                    style={{ border:"none", fill: "var(--filterColor4)",fontWeight: "normal" }}
                    className="filterColorClass4"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: [ 932, 1007, 1085],
                        cy: [ 231, 231, 231],
                        transition: { ease: "linear", duration: 3, delay: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                />
                <motion.text
                    style={{ fill: "black",letterSpacing:"2px",fontWeight:"normal" }}
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [932, 1007, 1085],
                        y: [246, 246,246],
                        transition: { ease: "linear", duration: 3, delay: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                    className="label"
                >
                    .json
                </motion.text>

                <motion.circle
                    r="3"
                    style={{ border:"none", fill: "var(--filterColor5)", fontWeight: "normal" }}
                    className="filterColorClass5"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: [1007, 1085],
                        cy: [231, 231],
                        transition: { ease: "linear", duration: 3, delay: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                />
                <motion.text
                    style={{ fill: "black",letterSpacing:"2px",fontWeight:"normal" }}
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [ 1007, 1085],
                        y: [246, 246],
                        transition: { ease: "linear", duration: 3, delay: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 },
                        opacity: 1,
                    }}
                    exit={{ opacity: 0 }}
                    className="label"
                >
                    .ts
                </motion.text>
            </g>
            {/* 6 end */}
        </svg>
   {/* Up line start */}
    <svg width="141" height="67" viewBox="0 0 141 67" fill="none" xmlns="http://www.w3.org/2000/svg" className="pink-indicator" data-v-fc0998ff="">
    <g opacity="" filter="url(#filter0_d_1_8)" data-v-fc0998ff="">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.48397 58.9922L5.48397 36.8651C5.48397 30.4908 10.6514 25.3234 17.0256 25.3234L101.28 25.3234L101.28 27.6318L17.0256 27.6318C11.9262 27.6318 7.7923 31.7657 7.7923 36.8651L7.7923 58.9922L5.48397 58.9922Z"
            fill="#0D0D0D"
            data-v-fc0998ff=""
        ></path>
        <path
            d="M5.19543 58.9922L5.19543 59.2807L5.48397 59.2807L7.79231 59.2807L8.08085 59.2807L8.08085 58.9922L8.08085 36.8651C8.08085 31.925 12.0856 27.9203 17.0256 27.9203L101.28 27.9203L101.568 27.9203L101.568 27.6318L101.568 25.3234L101.568 25.0349L101.28 25.0349L17.0256 25.0349C10.492 25.0349 5.19542 30.3315 5.19543 36.8651L5.19543 58.9922Z"
            stroke="#404040"
            strokeWidth="0.577083"
            data-v-fc0998ff=""
        ></path>
    </g>
    <g filter="url(#filter1_i_1_8)" data-v-fc0998ff=""><rect x="130.134" y="12.0518" width="30.0083" height="30.0083" rx="5.01812" transform="rotate(90 130.134 12.0518)" fill="#1F1F1F" data-v-fc0998ff=""></rect></g>
    <rect x="130.134" y="12.0518" width="30.0083" height="30.0083" rx="5.01812" transform="rotate(90 130.134 12.0518)" stroke="#2C2C2C" strokeOpacity="" strokeWidth="3.75141" data-v-fc0998ff=""></rect>
    <g filter="url(#filter2_f_1_8)" data-v-fc0998ff="">
        <path
            d="M123.152 23.9976C123.152 24.6556 122.619 25.1889 121.961 25.1889L117.196 25.1889C116.538 25.1889 116.004 24.6556 116.004 23.9976L116.004 19.2323C116.004 18.5743 116.538 18.041 117.196 18.041L121.961 18.041C122.619 18.041 123.152 18.5743 123.152 19.2323L123.152 23.9976Z"
            fill="#BD34FE"
            data-v-fc0998ff=""
        ></path>
        <path
            d="M113.622 23.9976C113.622 24.6556 113.088 25.1889 112.43 25.1889L107.665 25.1889C107.007 25.1889 106.474 24.6556 106.474 23.9976L106.474 19.2323C106.474 18.5743 107.007 18.041 107.665 18.041L112.43 18.041C113.088 18.041 113.622 18.5743 113.622 19.2323L113.622 23.9976Z"
            fill="#BD34FE"
            data-v-fc0998ff=""
        ></path>
        <path
            d="M113.622 34.3228C113.622 34.9808 113.088 35.5142 112.43 35.5142L107.665 35.5142C107.007 35.5142 106.474 34.9808 106.474 34.3228L106.474 29.5575C106.474 28.8996 107.007 28.3662 107.665 28.3662L112.43 28.3662C113.088 28.3662 113.622 28.8996 113.622 29.5575L113.622 34.3228Z"
            fill="#BD34FE"
            data-v-fc0998ff=""
        ></path>
    </g>
    <rect x="110.513" y="22.439" width="9.23333" height="9.23333" rx="1.15417" fill="#BD34FE" style={{display: "none"}} data-v-fc0998ff=""></rect>
    <rect x="110.513" y="22.439" width="9.23333" height="9.23333" rx="1.15417" fill="#BD34FE"  data-v-fc0998ff=""></rect>
    <g filter="url(#filter3_f_1_8)" data-v-fc0998ff=""><rect x="108.205" y="20.1309" width="13.85" height="13.85" rx="1.73125" fill="#BD34FE"  style={{display: "none"}} data-v-fc0998ff=""></rect></g>
    <defs data-v-fc0998ff="">
        <filter id="filter0_d_1_8" x="0.290218" y="22.438" width="106.183" height="44.0563" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" data-v-fc0998ff="">
            <feFlood floodOpacity="0" result="BackgroundImageFix" data-v-fc0998ff=""></feFlood>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-fc0998ff=""></feColorMatrix>
            <feOffset dy="2.30833" data-v-fc0998ff=""></feOffset>
            <feGaussianBlur stdDeviation="2.30833" data-v-fc0998ff=""></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out" data-v-fc0998ff=""></feComposite>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0" data-v-fc0998ff=""></feColorMatrix>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_8" data-v-fc0998ff=""></feBlend>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_8" result="shape" data-v-fc0998ff=""></feBlend>
        </filter>
        <filter id="filter1_i_1_8" x="98.2503" y="10.1761" width="33.7597" height="33.7597" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" data-v-fc0998ff="">
            <feFlood floodOpacity="0" result="BackgroundImageFix" data-v-fc0998ff=""></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-fc0998ff=""></feBlend>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-fc0998ff=""></feColorMatrix>
            <feOffset data-v-fc0998ff=""></feOffset>
            <feGaussianBlur stdDeviation="2.30833" data-v-fc0998ff=""></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" data-v-fc0998ff=""></feComposite>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.85 0" data-v-fc0998ff=""></feColorMatrix>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_8" data-v-fc0998ff=""></feBlend>
        </filter>
        <filter id="filter2_f_1_8" x="88.8714" y="0.438646" width="51.8833" height="52.6778" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" data-v-fc0998ff="">
            <feFlood floodOpacity="0" result="BackgroundImageFix" data-v-fc0998ff=""></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-fc0998ff=""></feBlend>
            <feGaussianBlur stdDeviation="8.80116" result="effect1_foregroundBlur_1_8" data-v-fc0998ff=""></feGaussianBlur>
        </filter>
        <filter id="filter3_f_1_8" x="96.6634" y="8.58919" width="36.9333" height="36.9333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" data-v-fc0998ff="">
            <feFlood floodOpacity="0" result="BackgroundImageFix" data-v-fc0998ff=""></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-fc0998ff=""></feBlend>
            <feGaussianBlur stdDeviation="5.77083" result="effect1_foregroundBlur_1_8" data-v-fc0998ff=""></feGaussianBlur>
        </filter>
    </defs>
</svg>

            {/*up line end  */}

            {/* down line start */}
            <svg width="142" height="82" viewBox="0 0 142 82" fill="none" xmlns="http://www.w3.org/2000/svg" className="blue-indicator" data-v-71979084="">
    <g opacity="" filter="url(#filter0_d_1_2)" data-v-71979084="">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M136.073 3V45.1271C136.073 51.5014 130.905 56.6688 124.531 56.6688H40.2769V54.3604H124.531C129.63 54.3604 133.764 50.2265 133.764 45.1271V3H136.073Z"
            fill="#0D0D0D"
            data-v-71979084=""
        ></path>
        <path
            d="M136.361 3V2.71146H136.073H133.764H133.476V3V45.1271C133.476 50.0672 129.471 54.0719 124.531 54.0719H40.2769H39.9883V54.3604V56.6688V56.9573H40.2769H124.531C131.065 56.9573 136.361 51.6607 136.361 45.1271V3Z"
            stroke="#404040"
            strokeWidth="0.577083"
            data-v-71979084=""
        ></path>
    </g>
    <g filter="url(#filter1_i_1_2)" data-v-71979084=""><rect x="12" y="69.9419" width="30.0083" height="30.0083" rx="5.01812" transform="rotate(-90 12 69.9419)" fill="#1F1F1F" data-v-71979084=""></rect></g>
    <rect x="12" y="69.9419" width="30.0083" height="30.0083" rx="5.01812" transform="rotate(-90 12 69.9419)" stroke="#2C2C2C" strokeOpacity="0.4" strokeWidth="3.75141" data-v-71979084=""></rect>
    <path
        d="M18.4048 57.9946C18.4048 57.3366 18.9382 56.8032 19.5961 56.8032H24.3614C25.0194 56.8032 25.5528 57.3366 25.5528 57.9946V62.7599C25.5528 63.4179 25.0194 63.9512 24.3614 63.9512H19.5961C18.9382 63.9512 18.4048 63.4179 18.4048 62.7599V57.9946Z"
        fill="#41D1FF"
        style={{display: "none"}}
        data-v-71979084=""
    ></path>
    <path
        d="M18.4048 57.9946C18.4048 57.3366 18.9382 56.8032 19.5961 56.8032H24.3614C25.0194 56.8032 25.5528 57.3366 25.5528 57.9946V62.7599C25.5528 63.4179 25.0194 63.9512 24.3614 63.9512H19.5961C18.9382 63.9512 18.4048 63.4179 18.4048 62.7599V57.9946Z"
        fill="#41D1FF"
        data-v-71979084=""
    ></path>
    <path
        d="M27.9354 57.9946C27.9354 57.3366 28.4688 56.8032 29.1268 56.8032H33.8921C34.5501 56.8032 35.0834 57.3366 35.0834 57.9946V62.7599C35.0834 63.4179 34.5501 63.9512 33.8921 63.9512H29.1268C28.4688 63.9512 27.9354 63.4179 27.9354 62.7599V57.9946Z"
        fill="#41D1FF"
        style={{display: "none"}}
        data-v-71979084=""
    ></path>
    <path
        d="M27.9354 57.9946C27.9354 57.3366 28.4688 56.8032 29.1268 56.8032H33.8921C34.5501 56.8032 35.0834 57.3366 35.0834 57.9946V62.7599C35.0834 63.4179 34.5501 63.9512 33.8921 63.9512H29.1268C28.4688 63.9512 27.9354 63.4179 27.9354 62.7599V57.9946Z"
        fill="#41D1FF"
        data-v-71979084=""
    ></path>
    <path
        d="M27.9354 47.6694C27.9354 47.0114 28.4688 46.478 29.1268 46.478H33.8921C34.5501 46.478 35.0834 47.0114 35.0834 47.6694V52.4347C35.0834 53.0926 34.5501 53.626 33.8921 53.626H29.1268C28.4688 53.626 27.9354 53.0926 27.9354 52.4347V47.6694Z"
        fill="#41D1FF"
        style={{display: "none"}}
        data-v-71979084=""
    ></path>
    <path
        d="M27.9354 47.6694C27.9354 47.0114 28.4688 46.478 29.1268 46.478H33.8921C34.5501 46.478 35.0834 47.0114 35.0834 47.6694V52.4347C35.0834 53.0926 34.5501 53.626 33.8921 53.626H29.1268C28.4688 53.626 27.9354 53.0926 27.9354 52.4347V47.6694Z"
        fill="#41D1FF"
        data-v-71979084=""
    ></path>
    <path
        d="M18.4048 47.6694C18.4048 47.0114 18.9382 46.478 19.5961 46.478H24.3614C25.0194 46.478 25.5528 47.0114 25.5528 47.6694V52.4347C25.5528 53.0926 25.0194 53.626 24.3614 53.626H19.5961C18.9382 53.626 18.4048 53.0926 18.4048 52.4347V47.6694Z"
        fill="#41D1FF"
        style={{display: "none"}}
        data-v-71979084=""
    ></path>
    <path
        d="M18.4048 47.6694C18.4048 47.0114 18.9382 46.478 19.5961 46.478H24.3614C25.0194 46.478 25.5528 47.0114 25.5528 47.6694V52.4347C25.5528 53.0926 25.0194 53.626 24.3614 53.626H19.5961C18.9382 53.626 18.4048 53.0926 18.4048 52.4347V47.6694Z"
        fill="#41D1FF"
        data-v-71979084=""
    ></path>
    <g filter="url(#filter2_f_1_2)" style={{display: "none"}} data-v-71979084="">
        <path
            d="M18.4048 57.9946C18.4048 57.3366 18.9382 56.8032 19.5961 56.8032H24.3614C25.0194 56.8032 25.5528 57.3366 25.5528 57.9946V62.7599C25.5528 63.4179 25.0194 63.9512 24.3614 63.9512H19.5961C18.9382 63.9512 18.4048 63.4179 18.4048 62.7599V57.9946Z"
            fill="#41D1FF"
            data-v-71979084=""
        ></path>
        <path
            d="M27.9354 57.9946C27.9354 57.3366 28.4688 56.8032 29.1268 56.8032H33.8921C34.5501 56.8032 35.0834 57.3366 35.0834 57.9946V62.7599C35.0834 63.4179 34.5501 63.9512 33.8921 63.9512H29.1268C28.4688 63.9512 27.9354 63.4179 27.9354 62.7599V57.9946Z"
            fill="#41D1FF"
            data-v-71979084=""
        ></path>
        <path
            d="M27.9354 47.6694C27.9354 47.0114 28.4688 46.478 29.1268 46.478H33.8921C34.5501 46.478 35.0834 47.0114 35.0834 47.6694V52.4347C35.0834 53.0926 34.5501 53.626 33.8921 53.626H29.1268C28.4688 53.626 27.9354 53.0926 27.9354 52.4347V47.6694Z"
            fill="#41D1FF"
            data-v-71979084=""
        ></path>
    </g>
    <defs data-v-71979084="">
        <filter id="filter0_d_1_2" x="35.0831" y="0.114583" width="106.183" height="64.0563" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" data-v-71979084="">
            <feFlood floodOpacity="0" result="BackgroundImageFix" data-v-71979084=""></feFlood>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-71979084=""></feColorMatrix>
            <feOffset dy="2.30833" data-v-71979084=""></feOffset>
            <feGaussianBlur stdDeviation="2.30833" data-v-71979084=""></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out" data-v-71979084=""></feComposite>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0" data-v-71979084=""></feColorMatrix>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" data-v-71979084=""></feBlend>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape" data-v-71979084=""></feBlend>
        </filter>
        <filter id="filter1_i_1_2" x="10.1243" y="38.0579" width="33.7597" height="33.7597" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" data-v-71979084="">
            <feFlood floodOpacity="0" result="BackgroundImageFix" data-v-71979084=""></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-71979084=""></feBlend>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-71979084=""></feColorMatrix>
            <feOffset data-v-71979084=""></feOffset>
            <feGaussianBlur stdDeviation="2.30833" data-v-71979084=""></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" data-v-71979084=""></feComposite>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.85 0" data-v-71979084=""></feColorMatrix>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_2" data-v-71979084=""></feBlend>
        </filter>
        <filter id="filter2_f_1_2" x="0.802473" y="28.8757" width="51.8833" height="52.6778" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" data-v-71979084="">
            <feFlood floodOpacity="0" result="BackgroundImageFix" data-v-71979084=""></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-71979084=""></feBlend>
            <feGaussianBlur stdDeviation="8.80116" result="effect1_foregroundBlur_1_2" data-v-71979084=""></feGaussianBlur>
        </filter>
    </defs>
</svg>
            {/* down line end */}
            <div className="vite-chip active">
                <div className="vite-chip__background">
                    <div className="vite-chip__border"></div>
                    <div className="vite-chip__edge edge--animated"></div>
                </div>
                        <div className="vite-chip__filter"></div>
                        <Image src="/logo.png" width={100} height={100} alt="logo" className="vite-chip__logo" />
                </div>

                <div className="hero__background"></div>
        </div>
    );
}