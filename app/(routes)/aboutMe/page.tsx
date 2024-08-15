"use client"

import Avatar from "@/app/components/avatar";
import ContainerPage from "@/app/components/container";
import CounterServices from "@/app/components/counterServices";
import TimeLine from "@/app/components/time-line";
import TransitionPage from "@/app/components/transitionPage";

const AboutMe = () => {
    return (
<>
<TransitionPage />

<ContainerPage>
    <Avatar/>
        <h1 className="text-2xl leading-tight text-center 
        md:text-left md:text-5xl md:mt-10">
            Quien es {''}
            <span className="font-bold text-secondary">DevSaccone</span>
        </h1>
<CounterServices />
<TimeLine />
</ContainerPage>
</>
    );
};
export default AboutMe;