import TransitionPage from "@/app/components/transitionPage";
import SliderSkills from "@/app/components/slider-skills";
import { CoverParticles } from "@/app/components/cover-particles";


const SkilsPage = () => {
  return (
    <>
      <TransitionPage />
      <CoverParticles />
      <div
        className=" m-10 grid items-center justify-center h-screen max-w-5xl gap-6 
       mx-auto md:grid-cols-2 "
      >
        <div className="max-w-[450px]">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            mis <span className="font-bold text-secondary">Habilidades</span>
            </h1>  
            <div>
            
            <SliderSkills />
        </div>        
        </div>
        
      </div>
      
    </>
  );
};

export default SkilsPage;
