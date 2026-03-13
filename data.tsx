import {CodeSquare, HomeIcon, UserRound, Linkedin, LucideGithub, Mail,  BookOpenCheck, Computer, Book, Rocket, TabletSmartphone } from "lucide-react";

import { TbBrandAdobe, TbBrandBootstrap, TbBrandCss3, TbBrandFigma, TbBrandFirebase, TbBrandGit, TbBrandGithub, TbBrandHtml5, TbBrandJavascript, TbBrandMongodb, TbBrandMysql, TbBrandNextjs, TbBrandNodejs, TbBrandReact, TbBrandSass, TbBrandTailwind, TbBrandTypescript, TbCpu2, TbDatabase, TbDeviceDesktop, TbGitMerge, TbLayoutFilled, TbLollipop, TbPencil, TbSql, TbBusinessplan } from "react-icons/tb";

 export const socialNetworks = [
    {
        id: 1,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "https://mailto:saccone.sebastian@gmail.com" ,
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://linkedin.com/in/angelsaccone",
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
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Target",
        icon: <BookOpenCheck size={25} color="#fff" strokeWidth={1} />,
        link: "/skills",
    },
    
];

export const dataAboutPage = [
    {
        id: 0,
        title: "Growth Hacking",
        subtitle: "Udemy",
        description: "Boost the growth of your digital products through growth marketing and growth hacking. ",
        date: "mar 2026",
    },
    {
        id: 1,
        title: "Digital Marketing ",
        subtitle: "Hubspot Academy",
        description: "Digital marketing with an inbound focus, best practices, and creation of engaging content for both search engines and website optimization. ",
        date: "jun 2025",
    },
    {
        id: 2,
        title: "ChatGPT applied to Professional Marketing.",
        subtitle: "Udemy",
        description: "Do digital marketing like a pro with ChatGPT. Campaigns and practical examples with everything you need to know. ",
        date: "jun 2025",
    },
    {
        id: 3,
        title: "copywhriting & storytelling",
        subtitle: "Udemy",
        description: "Learn to Conquer, Persuade, Captivate and Excite your audience through the words of your Copy, online. ",
        date: "jun 2025",
    },
    {
        id: 4,
        title: "UX/UI Desing",
        subtitle: "Udemy, Devsafio Latam",
        description: "Design of applications focused on user experience, with modern and attractive interfaces based on current design paradigms using state-of-the-art tools. ",
        date: "jul 2024",
    },
    {
        id: 5,
        title: "Full-Stack Developer",
        subtitle: "Numen Academy, Udemy",
        description: "Diploma in Full-Stack Web Development MERN, developing knowledge in the latest technologies and development practices, also motivating collaborative work and soft skills." ,
        date: "Nov 2023 ",
    },
    {
        id: 6,
        title: "Digital Marketing & Web Analitics",
        subtitle: "Fundacion Telefonica",
        description: "curso de estrategias de Marketing Digital, posicionamiento en la web, optimizacion para motores de busqueda, analicis de kpis, resultados de campañas, seguimiento de estrategias.",
        date: "Mar 2020",
    },
    
    {
        id: 7,
        title: "Digital Marketing",
        subtitle: "Google",
        description: "SEO/SEM positioning strategies, copywriting and persuasive content creation, social media marketing strategies, email marketing, etc. ",
        date: "nov 2019",
    },
    {
        id: 8,
        title: "User Experience",
        subtitle: "Teleperformance",
        description: "Comprehensive advice, problem and complaint resolution, database updates, report generation, working under pressure and towards objectives. ",
        date: "nov 2019",
    },
    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 4,
        text: "Years of experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 14,
        text: "Years of experience in commercial activity",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 22,
        text: "Completed projects",
        lineRight: true,
        lineRightMobile: true,
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
        title: "e-commerce collaborative",
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
export const skillsData = [
    {
    icon: <TbDeviceDesktop/>,
    title: "Front-End",
    description: "Development of vibrant and modern interfaces applying the latest technologies and design trends, without neglecting functionality and performance.",
    img:[<TbBrandJavascript key= "1"/>,
         <TbBrandTypescript key= "2"/>,  
         <TbBrandHtml5 key= "3"/>, 
         <TbBrandReact key= "4"/>, 
         <TbBrandNextjs key= "5"/>, ]
    },
  
    {
        icon: <TbLayoutFilled />,
        title: "UX/UI Desing",
        description: "Creative, persuasive, and multi-platform design, based on market research and focused on user experience and professional branding. ",
        img:[
        <TbBrandFigma key="1"/>,
         <TbBrandAdobe key= "2" /> 
        ],
    },
    {
        
        icon: <TbCpu2 />,
        title: "Back-End",
        description: "Implementation of the latest technologies for the creation of REST APIs and management of communication with external servers and APIs in a fast, secure and efficient manner.  ",
        img:[
        <TbBrandTypescript key="1"/>,
        <TbBrandNodejs key= "2"/>,
        <TbBrandJavascript key="3"/>
        ],
    },
    {
        icon: <TbPencil />,
        title: "Styles",
        description: "handling of styles in native CSS and the main libraries and frameworks such as Bulma, Material UI and Sass among others. ",
        img:[
        <TbBrandCss3 key= "1" />,
        <TbBrandSass key= "2" />,
        <TbBrandTailwind key= "3" />,
        <TbBrandBootstrap key= "4" />, 
    ],
    },
    {
        icon: <TbDatabase />,
        title: "Data Bases",
        description: "Relational and non-relational databases.",
        img:[
        <TbBrandMysql key= "1"/>,
        <TbSql key= "2"/>,
        <TbBrandMongodb key="3"/>,
        <TbBrandFirebase key= "4"/> 
    ]
    },
    {
        icon: <TbGitMerge />,
        title: "Version control",
        description: "Change management, collaborative work, and version control with the leading tools on the market.  ",
        img:[ 
        <TbBrandGit key= "1"/>,
        <TbBrandGithub key= "2"/>
    ]
    },
    {icon: <TbBusinessplan />,
        title: "Digital Marketing",
        description:[
            "Copywhriting & Storytelling (Udemy).",
             <br key= "1"/>,
            "ChatGPT applied to Professional Marketing (Udemy).",
             <br key= "2" />, 
             "Growt Hacking (Udemy).",
             <br key= "3" />,
            "Digital Marketing (Hubspot)."
            ]},
    {
        icon: <TbLollipop />,
        title: "Soft Skills",
        description:[
            "Skrum, kanban (Udemy).",
             <br key= "1"/>,
            "Ingles B1 (Platzi Language test).",
             <br key= "2" />, 
             "Custumer Experience (Teleperformance).",
             <br key= "3" />,
            "Web Analitics (Google Learning, Fundacion Telefonica)."
            ],
        
       
    },
];

