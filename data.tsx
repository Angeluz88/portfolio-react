import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, LucideGithub, Mail, Youtube, Crop, Pencil, Computer, Book, Rocket, ProportionsIcon, Figma, Palette, TabletSmartphone, Proportions } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:saccone.sebastian@gmail.com",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://linkedin.com/in/devsaccone",
    },
    
    {
        id: 4,
        logo: <LucideGithub size={30} strokeWidth={1} />,
        src: "https://github.com/Angeluz88",
    },
   
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/aboutMe",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Diseño UX/UI",
        subtitle: "Udemy, Devsafio Latam",
        description: "Diseño de aplicasiones centradas en la experiencia del usuario, con interfaces modernas y atractivas a partir de los paradigmas de diseño actuales utilizando herramientas de ultima generacion. ",
        date: "jul 2024",
    },
    {
        id: 2,
        title: "Full-Stack Developer",
        subtitle: "Numen Academy, Udemy",
        description: "Diplomatura en desarrollo web Full-Stack MERN, desarrollando conocimiento en las ultimas tecnologias y practicas en el desarrollo, motivando tambien trabajo colaborativo y habilidades blandas." ,
        date: "Nov 2023 ",
    },
    {
        id: 3,
        title: "Marketing Digital y Analitica Web",
        subtitle: "Fundacion Telefonica",
        description: "curso de estrategias de Marketing Digital, posicionamiento en la web, optimizacion para motores de busqueda, analicis de kpis, resultados de campañas, seguimiento de estrategias.",
        date: "Mar 2020",
    },
    
    {
        id: 4,
        title: "Marketing Digital",
        subtitle: "Google",
        description: "Estrategias de posicionamiento SEO/SEM, copywhiting y creacion de contenido persuasivo, estrategias de marketing en redes sociales, email marketing, etc. ",
        date: "nov 2019",
    },
    {
        id: 5,
        title: "User Experience",
        subtitle: "Teleperformance",
        description: "Asesoramiento integral, resolucion de problemas y reclamos, actualizacion de base de datos, generacion de informes, trabajo bajo presion y por objetivos. ",
        date: "nov 2019",
    },
    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 16,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 22,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    
];

export const serviceData = [
    {
    icon: <Computer />,
    title: "Desarrollo web",
    description: "Diseño y desarrollo de sitios web a medida, responsivos, adaptados a tus necesidades",
    },
  
    {
        icon: <TabletSmartphone />,
        title: "Diseño UX/UI",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia llamando a la accion.",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, mejorando el posicionamiento en los buscadores. ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Pallax effect",
        image: "/image-1.png",
        urlGithub: "https://github.com/Angeluz88/parallax-effect",
        urlDemo: "https://devsaccone-parallax-effect.netlify.app",
    },
    {
        id: 2,
        title: "onMouseOver component",
        image: "/image-2.png",
        urlGithub: "https://github.com/Angeluz88/onMouseOver",
        urlDemo: "https://onmouseover-devsaccone.netlify.app",
    },
    {
        id: 3,
        title: "e-commerce colaborativo",
        image: "/image-3.png",
        urlGithub: "https://github.com/Angeluz88/fullStack",
        urlDemo: "https://code-burgers.netlify.app",
    },
    {
        id: 4,
        title: "landingPage video slide",
        image: "/image-4.png",
        urlGithub: "https://github.com/Angeluz88/video-slider",
        urlDemo: "https://places-video.netlify.app",
    },
    {
        id: 5,
        title: "Next.js e-commerce",
        image: "/image-5.jpg",
        urlGithub: "https://github.com/Angeluz88/olivia-showroom",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "dynamic menu",
        image: "/image-6.png",
        urlGithub: "https://github.com/Angeluz88/aside-menu",
        urlDemo: "https://devsaccone-menu.netlify.app",
    },
    {
        id: 7,
        title: "dynamic scroll ",
        image: "/image-7.png",
        urlGithub: "https://github.com/Angeluz88/landing-page-scroll",
        urlDemo: "https://genkidama.netlify.app",
    },
    {
        id: 8,
        title: "simply Pokedex",
        image: "/image-8.png",
        urlGithub: "https://github.com/Angeluz88/next_documentation_app",
        urlDemo: "https://simpli-pokedex.netlify.app",
    }
];

