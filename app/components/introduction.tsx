"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return ( 
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image className="ml-15" src="/home-4.png" priority width="450" height="450" alt="Profile pic"/>

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="nb-5 text-2xl leading-tight text-center md:text-left
                    md:text-4xl md:mb-10 ">Si puedes imaginarlo,<br/>

                    <TypeAnimation
                    
                    sequence={[
                        "Puedes diseñarlo...",
                        1000,
                        "Puedes programarlo...",
                        1000,
                        "Puedes hacerlo realidad...",
                        1000,
                        
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-secondary"

                    />
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                      Como Desarrollador web fullSack, 
                      mi mision es la de crear experiencias digitales impactantes y accesibles
                       a todos los usuarios, apostando por la performance y diseño atractivo. Convinando conocimientos teoricos y funcionalidades de vanguardia.  
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start  md:gap-10">
                        <a href="./portfolio" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl 
                        hover:shadow-lg hover:shadow-secondary hover:text-secondary hover:border-secondary">
                            Ver Proyectos
                       </a>
                    </div>

                </div>
            </div>

        </div>
     );
}
 
export default Introduction;