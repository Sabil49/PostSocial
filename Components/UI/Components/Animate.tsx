
'use client';

import { delay } from "motion";
import { motion,useAnimate } from "motion/react";
import { tr } from "motion/react-client";
import { useEffect } from "react";

export default function MyComponent() {

  const [scope, animate] = useAnimate()
  
   useEffect(() => {
  const animationStart = async () => {

         await animate(scope.current, { cx: [91.635414, 109.991364, 124.534203, 138.923813, 153.527802,162.672836, 171.854050, 181.005615,190.154526, 199.353149, 208.532837, 217.175659,225.806793, 234.507416, 244.690872] ,
                                        cy: [624.916504, 620.9599, 617.825317, 613.934387,611.14563, 609.399292, 607.786499,606.029236, 604.2724, 602.710754, 601.199402,599.776367, 598.109558, 597.061523],transition: { type: "tween", ease: 'ease-out', duration: 5 }});
         await animate(scope.current, { cx: [254.850281, 264.967194, 278.462891, 292.034515, 305.513367, 314.442871, 323.511780, 332.497162, 345.175018, 357.806213, 370.507782, 382.682007, 394.846771, 407.008667, 418.802002, 430.695221, 442.483704, 446.333588, 450.229645, 453.982635, 463.270477, 472.697357, 482.000000] ,
                                        cy: [595.834839, 594.322693, 592.784302, 590.732056, 589.253357, 587.082947, 585.645203, 585.094788, 583.977295, 582.400513, 580.408264, 579.074219, 577.795593, 576.467651, 575.075806, 573.726135, 573.24353, 571.860962, 571.409424, 571.552246, 570.900085, 569.286133, 569.28656, 568.900085] ,type: "tween", ease: 'ease-out', duration: 0.5},{delay: 1});

       }
       animationStart()
    });
  return (
     <svg className="stroke-(--base_gradient)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" enableBackground="new 0 0 1080 1080">
    <motion.circle ref={scope}
                        r="3"
                        cx="91.635414"
                        cy="624.916504"
                        initial={{ cx: 91.635414, cy: 624.916504 }}  
                        style={{ fill: "black" }}
                      
                    />
                </svg>
  )
}