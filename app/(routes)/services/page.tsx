import CircleImage from "@/app/components/circle-image";
import TransitionPage from "@/app/components/transitionPage";
import AvatarServices from "@/app/components/avatar-services";
import SliderServices from "@/app/components/slider-services";
import { CoverParticles } from "@/app/components/cover-particles";

const ServicePage = () => {
  return (
    <>
      <TransitionPage />
      <CoverParticles />
      <AvatarServices />
      <div
        className=" m-10 grid items-center justify-center h-screen max-w-5xl gap-6 
       mx-auto md:grid-cols-2 "
      >
        <div className="max-w-[450px]">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            mis <span className="font-bold text-secondary">Servicios.</span>
            </h1>
            <p className="mb-3 text-xl text-gray-300 ">
              Ofrezco servicios de desarrollo web frontend especializados en la
              creación de sitios web y aplicaciones atractivas y funcionales.
              Utilizando las últimas tecnologías, como HTML, CSS y JavaScript,
              diseño interfaces de usuario intuitivas y responsivas que reflejan
              la identidad de marca de mis clientes y mejoran su presencia en
              línea.
            </p>
          <button className="px-3 py-2 rounded-lg bg-secondary/65"> <a href="mailto:saccone.sebastian@gmail.com">Contacta Conmigo</a></button>
        </div>

        {/* SLIDER*/}
        <div>
            <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicePage;
