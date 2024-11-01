import AvatarPortfolio from "@/app/components/avatar-portfolio";
import CircleImage from "@/app/components/circle-image";
import ContainerPage from "@/app/components/container";
import { CoverParticles } from "@/app/components/cover-particles";
import PortfolioBox from "@/app/components/portfolio-box";
import TransitionPage from "@/app/components/transitionPage";
import { dataPortfolio } from "@/data";

const PortfolioPage = () =>{
    return(
        <ContainerPage>
            <CoverParticles/>
            <TransitionPage />
            <CircleImage />
            <div className="flex flex-col justify-center h-full">
            
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                Mis ultimos 
                <span className="text-secondary font-bold"> proyectos realizados.</span>
                </h1>

                <div className="relative m-auto z-10 grid justify-items-center max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
                    {dataPortfolio.map((data) =>(
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
            
        </ContainerPage>

    );
}
export default PortfolioPage;