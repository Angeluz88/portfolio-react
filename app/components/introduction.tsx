"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return ( 
        <div className="z-20 w-full bg-darkBg/60 flex-grow">
            <div className="z-20 md:flex justify-evenly  h-full p-6 py-20 md:py-10  md:grid-cols-2 ">
                <Image className=" z-40 mt-10 justify-self-center" src="/home-4.png" priority width="180" height="180" alt="Profile pic"/>

                <div className=" flex flex-col justify-center max-w-md">
                    <h1 className="nb-5 text-2xl leading-tight text-center md:text-left
                    md:text-4xl md:mb-10 ">If you can imagine it,<br/>

                    <TypeAnimation
                    
                    sequence={[
                        "You can design it...",
                        1000,
                        "you can codding it...",
                        1000,
                        "You can make it happen...",
                        1000,
                        
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-secondary"

                    />
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                     As a full-service web developer,my mission is to create impactful and accessible digital experiences for all users, focusing on performance and attractive design. Combining theoretical knowledge with cutting-edge functionalities.
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start  md:gap-10">
                        <a href="./portfolio" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl 
                        hover:shadow-lg hover:shadow-secondary hover:text-secondary hover:border-secondary">
                            view proyects
                       </a>
                    </div>

                </div>
            </div>

        </div>
     );
}
 
export default Introduction;