'use client'
import React, { useState } from "react";

import Image from "next/image";

import PropTypes from "prop-types";
import { FaTwitter,FaFacebookF } from 'react-icons/fa';

const OwnersList = [
	[
		{
			photo:
				"/images/Image5.png",
			name: "Mia Reynolds",
            details: 'Cheif Executive Officer at SA Tech',
			rating: 3.5,
			content:
				"Mia Reynolds is a digital artist and illustrator renowned for her captivating visual storytelling. With a unique blend of digital techniques and traditional artistry, Mia brings imagination to life in her creations. Mia's work has been featured in art exhibitions globally, and she is a sought-after speaker at creative events. Her talks explore the fusion of technology and art, inspiring fellow creatives to push the boundaries of their craft.",
		},
		{
			photo:
				"/images/Image11.png",
			name: "Taylor Mitchell",
            details: 'Chief Marketing Officer at SA Tech',
			rating: 5,
			content:"Taylor Mitchell is a visionary in the world of design, serving as the Creative Director at ColorCanvas Design Studio. With a keen eye for aesthetics and a strategic approach to branding, Taylor has led numerous successful design campaigns for global brands. A passionate advocate for the power of design in storytelling, Taylor frequently speaks at design conferences, sharing insights on the intersection of creativity and brand strategy.",
		},
		{
			photo:
				"/images/Image1.png",
			name: "Olivia Harper",
            details: 'Chief Technology Officer at SA Tech',
			rating: 4.5,
			content:
				"Olivia Harper is a highly innovative graphic designer and the principal designer at CreativEdge Studio. Known for her ability to merge aesthetics with functionality, Olivia has played a pivotal role in transforming design trends. Her work has received acclaim in the design community, and Olivia is a frequent speaker at graphic design symposiums. Through her presentations, Olivia inspires designers to think outside the box, embrace experimentation, and redefine the visual language of design.",
		},
	],
	// [
	// 	{
	// 		photo:
	// 			"/images/Image8.png",
	// 		name: "Jordan Carter",
    //         details: 'Founder and Lead Designer at PixelCraft UX',
	// 		rating: 4.5,
	// 		content:
	// 			"Jordan Carter is a trailblazer in the field of user experience (UX) and user interface (UI) design. As the founder of PixelCraft UX, Jordan has been at the forefront of creating seamless and visually appealing digital experiences. With a passion for human-centric design, Jordan shares expertise at design conferences, emphasizing the importance of user empathy and elegant design solutions in today's digital landscape.",
	// 	},
	// 	{
	// 		photo:
	// 			"/images/Image2.png",
	// 		name: "Amanda Lee",
    //         details: 'UX Researcher & Human-Computer Interaction Expert',
	// 		rating: 5,
	// 		content:
	// 			"Introducing Amanda Lee, our UX Researcher and Human-Computer Interaction Expert. Amanda's work is fueled by a research-driven approach to UX design, ensuring that user needs are not just considered but are at the forefront of the design process. Join Amanda as she shares the methodologies behind her insightful research, guiding the creation of truly user-centric experiences. Explore the intersection of research and design with Amanda and gain valuable perspectives on creating products.",
	// 	},
	// 	{
	// 		photo:
	// 			"/images/Image4.png",
	// 		name: "Daniel Rodriguez",
    //         details: 'UI/Visual Design Specialist',
	// 		rating: 3.5,
	// 		content:
	// 			"Meet Daniel Rodriguez, our UI/Visual Design Specialist, whose work transcends the ordinary. With a keen eye for visual aesthetics, Daniel transforms abstract concepts into visually stunning and user-friendly interfaces. His approach combines creativity with functionality, resulting in designs that not only catch the eye but also provide an optimal user experience. Join Daniel on a visual journey through the principles and practices that make UI design an art form.",
	// 	},
	// ],
];


interface OwnerItem {
	photo: string;
	name: string;
	details: string;
	rating: number;
	content: string;
}

const Owners = ({ item }: { item: OwnerItem }) => {
	const {  content, photo, name,details } = item;
	return (
		<>
		<div className=" dark:bg-slate-800 rounded-xl md:h-full duration-300">
			<div className="mt-4">				
				<div>
                    <div className="relative h-[325px] lg:h-[300px] md:h-[237.5px] xl:h-[350px]">
					<div className="mr-2 absolute z-10 h-[300px]">
						<Image
							src={photo}
							alt={name}
							className="max-w-full h-auto border rounded-tl-[50px] rounded-br-[50px]"
							width="300"
                            height="400"
						/>
					</div>
                    <div className="h-[300px] w-[300px] hidden xl:block absolute left-[20px] top-[20px]  bg-gradient-to-r from-[#FF8B8B] to-[#9C5FE4]  rounded-tl-[50px] rounded-br-[50px]"></div>
					</div>
                    <div className="" id="Contact">
						<h5 className=" text-xl sm:text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-[#FF8B8B] to-[#9C5FE4] font-bold">{name}</h5>
					</div>
                    <div className="">
						<h6 className=" text-sm sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF8B8B] to-[#9C5FE4]">{details}</h6>
						<h6 className=" text-sm sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF8B8B] to-[#9C5FE4] font-semibold">+91-9876543210</h6>
						<a className=" text-sm sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF8B8B] to-[#9C5FE4] font-semibold" href="mailto:abc@gmail.com">abc@gmail.com</a>
					</div>
                    <p className="mt-4 !text-[14px] sm:!text-[16px]">{content}</p>
                    
				</div>
			</div>
			
		</div>
		<div className="flex md:px-6 mt-2 *:flex *:rounded-full *:w-[30px] h-[30px] *:items-center *:justify-center *:bg-black *:text-white">
                        <div><FaTwitter /></div>
                        <div className=" ml-3"><FaFacebookF /></div>
                    </div>
					</>
	);
};
Owners.propTypes = {
	item: PropTypes.object.isRequired,
};

export default function AboutUs(){
	const [index] = useState(0);

	// const handleControl = (type) => {
	// 	if (type === "prev") {
	// 		setIndex(index <= 0 ? OwnersList.length - 1 : index - 1);
	// 	} else if (type === "next") {
	// 		setIndex(index >= OwnersList.length - 1 ? 0 : index + 1);
	// 	}
	// };
	return (
        <div id="About" className="pt-18 w-full px-6 sm:px-9 md:px-12 lg:px-27 bg-[#faf6f6] text-white py-12">
            {/* <h1 className="text-5xl mb-3">Meet the Speakers</h1>
            <p>Meet visionary leaders shaping the future. Our speakers share experiences and innovative ideas. Connect</p>
<p>with bright minds redefining industry boundaries.</p> */}
            
		<div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-6 bg-gradient-to-r from-[#FF8B8B] to-[#9C5FE4] text-transparent bg-clip-text">Meet the Founders</h2>
    </div>

		<section className="ezy__testimonial20 light dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container relative">
								<div className="relative grid grid-cols-6 gap-y-6 md:gap-x-6">
					{OwnersList[index].map((item, i) => (
						<div className=" col-span-6 md:col-span-2" key={i}>
							<Owners item={item} />
						</div>
					))}
                     {/* <button className=" absolute bottom-[40%] text-lg -left-[2.5%] cursor-pointer dark:bg-slate-800 opacity-75 hover:opacity-100 w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-r from-[#FF8B8B] to-[#9C5FE4]" onClick={() => handleControl("prev")}>
								<FontAwesomeIcon icon={faAngleLeft} />
							</button>
							<button className=" absolute bottom-[40%] -right-[2.5%] cursor-pointer text-lg dark:bg-slate-800 opacity-75 hover:opacity-100 w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-r from-[#FF8B8B] to-[#9C5FE4]" onClick={() => handleControl("next")}>
								<FontAwesomeIcon icon={faAngleRight} />
							</button>  */}
				</div>
			</div>
		</section>
        </div>
	);
};

