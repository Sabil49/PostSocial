'use client';
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";


type Testimonial = {
  quote: string;
  name: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

 // Use the testimonials prop passed to the component
    const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };
 
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
 
  const isActive = (index: number) => {
    return index === active;
  };
 
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);
 
  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

    return (
        <div id="Reviews" className="pt-12 min-h-screen bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:44px_44px] relative">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,82,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(148,82,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
            <div className="container mx-auto px-4  !max-w-[42rem] lg:!max-w-[80rem]">
                <div className="py-5 md:py-10 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-6xl font-bold">What our buyers are saying</h2>
                </div>
                <div className="relative max-w-4xl mx-auto mt-12">
                    <button
                        className="absolute left-[5px] md:left-0 top-1/2  border border-gray-200 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-50 p-2 rounded-full bg-black/30 backdrop-blur-sm transition-all opacity-70 hover:opacity-100 hover:scale-110"
                        aria-label="Previous testimonial"
                        onClick={handlePrev}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-left w-3 h-3 md:w-6 md:h-6 text-white"
                        >
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </button>
                    <button
                        className=" z-50 absolute right-[5px] md:right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-black/30 backdrop-blur-sm border border-gray-200 transition-all opacity-70 hover:opacity-100 hover:scale-110"
                        aria-label="Next testimonial"
                        onClick={handleNext}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right w-3 h-3 md:w-6 md:h-6 text-white"
                        >
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </button>
                    <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh]">
                        
                          <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                    <div className="absolute top-0 left-0 right-0 transition-all duration-500 ease-in-out px-4 md:px-0">
                        <div className="p-6 sm:p-8 md:p-12 rounded-[2rem] transition-all duration-500
                     bg-gradient-to-r from-[#9C5FE4] to-[#FF8B8B] !border-gray-200 border-[0.25px]"
                            >
                                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-medium text-white leading-relaxed mb-6 md:mb-8">{testimonial.quote}</p>
                                <div className="space-y-1 md:space-y-2">
                                    <div className="text-white text-lg sm:text-xl md:text-2xl">{testimonial.name}</div>
                                </div>
                            </div>
                        </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/*<div className="absolute top-0 left-0 right-0 transition-all duration-500 ease-in-out px-4 md:px-0" style={{ transform: "translateY(-60px) scale(0.9)", opacity: "-5.55112e-17", zIndex: 2, pointerEvents: "none" }}>
                            <div
                                className="p-6 sm:p-8 md:p-12 rounded-[2rem] border transition-all duration-500
                    bg-black/80 border-white/5"
                            >
                                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-medium text-white leading-relaxed mb-6 md:mb-8">"Morning coffee + edible + this journey = 😎🔮💁🏽‍♀️🌺✨🎧"</p>
                                <div className="space-y-1 md:space-y-2">
                                    <div className="text-white text-lg sm:text-xl md:text-2xl">Tawny L.</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 right-0 transition-all duration-500 ease-in-out px-4 md:px-0" style={{ transform: "translateY(-40px) scale(0.9)", opacity: 0.1, zIndex: 3, pointerEvents: "none" }}>
                            <div
                                className="p-6 sm:p-8 md:p-12 rounded-[2rem] border transition-all duration-500
                    bg-black/80 border-white/5"
                            >
                                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-medium text-white leading-relaxed mb-6 md:mb-8">"This music feels like liquid gold flowing from my chest."</p>
                                <div className="space-y-1 md:space-y-2">
                                    <div className="text-white text-lg sm:text-xl md:text-2xl">Antonia R.</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 right-0 transition-all duration-500 ease-in-out px-4 md:px-0" style={{ transform: "translateY(-20px) scale(0.95)", opacity: 0.2, zIndex: 4, pointerEvents: "none" }}>
                            <div className="p-6 sm:p-8 md:p-12 rounded-[2rem] border transition-all duration-500 bg-black/80 border-white/5">
                                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-medium text-white leading-relaxed mb-6 md:mb-8">
                                    &quot;I can&apos;t even put into words how profoundly atoon has affected me…I never want the music to end&quot;
                                </p>
                                <div className="space-y-1 md:space-y-2">
                                    <div className="text-white text-lg sm:text-xl md:text-2xl">Dennis E.</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 right-0 transition-all duration-500 ease-in-out px-4 md:px-0" style={{ transform: "translateY(0px) scale(1)", opacity: 1, zIndex: 5, pointerEvents: "auto" }}>
                            <div
                                className="p-6 sm:p-8 md:p-12 rounded-[2rem] border transition-all duration-500
                    bg-black/40 backdrop-blur-sm border-white/10"
                            >
                                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-medium text-white leading-relaxed mb-6 md:mb-8">
                                    I&apos;ve always struggled with meditation in stillness. Meditating with atoon's music feels so much more natural to me and it is a great way to connect to my body, release stagnant energy and clear my
                                    head.
                                </p>
                                <div className="space-y-1 md:space-y-2">
                                    <div className="text-white text-lg sm:text-xl md:text-2xl">Becca M.</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 right-0 transition-all duration-500 ease-in-out px-4 md:px-0" style={{ transform: "translateY(20px) scale(0.95)", opacity: 0, zIndex: 4, pointerEvents: "none" }}>
                            <div
                                className="p-6 sm:p-8 md:p-12 rounded-[2rem] border transition-all duration-500
                    bg-black/80 border-white/5"
                            >
                                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-medium text-white leading-relaxed mb-6 md:mb-8">
                                    &quot;I can feel the energy of meditation spreading through my whole body bringing a deep sense of presence.&quot;
                                </p>
                                <div className="space-y-1 md:space-y-2">
                                    <div className="text-white text-lg sm:text-xl md:text-2xl">Alistair M.</div>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>
{/*<div className="flex justify-center gap-2 md:gap-3">
                    <button
                        className="transition-all duration-300 rounded-full
                w-2 h-2 bg-white hover:bg-gray-100"
                        aria-label="Go to testimonial 1"
                    ></button>
                    <button
                        className="transition-all duration-300 rounded-full
                w-2 h-2 bg-white hover:bg-gray-100"
                        aria-label="Go to testimonial 2"
                    ></button>
                    <button
                        className="transition-all duration-300 rounded-full
                w-2 h-2 bg-white hover:bg-gray-100"
                        aria-label="Go to testimonial 3"
                    ></button>
                    <button
                        className="transition-all duration-300 rounded-full
                w-6 md:w-8 h-2 bg-gradient-to-r from-[#FF8B8B] to-[#9C5FE4]"
                        aria-label="Go to testimonial 4"
                    ></button>
                    <button
                        className="transition-all duration-300 rounded-full
                w-2 h-2 bg-white hover:bg-gray-100"
                        aria-label="Go to testimonial 5"
                    ></button>
                </div>
                <div className="text-center mt-4 pb-4 text-white text-xs sm:text-sm">Scroll above cards or use arrows to navigate</div>*/}
            </div>
        </div>
    );
}