"use client"

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { skillsData } from '@/data';

const SliderSkills = () => {
    return (  
       <Swiper
       breakpoints={{
        320:{
            slidesPerView:1,
            spaceBetween: 15,
        },
        768:{
            slidesPerView:2,
            spaceBetween: 15,
        },
        1024:{
            slidesPerView:3,
            spaceBetween: 15,
        }
       }}
       freeMode={true}
       pagination={{
        clickable: true
       }}
       modules={[Pagination]}
       className="h-[380px] md:h-[540px] w-[350px] md:w-[1050px]">
        {skillsData.map((item, index) =>(
            <SwiperSlide key={index}>
                <div className="flex flex-col px-6 py-8 md:h-[300px] rounded-lg 
                cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 
                sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300
                 hover:border-secondary border-2">
                    <div className="mb-4 text-5xl text-secondary">{item.icon}</div>
                    <div className="mb-4 text-xl text-secondary">{item.title}</div>
                    <div className="text-sm">{item.description}</div>
                    <h2 className="flex text-secondary md:text-3xl m-2">{item.img}</h2>
                 </div>
            </SwiperSlide>
        ))}
       </Swiper>
    );
}
 
export default SliderSkills;