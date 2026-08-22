export const projects = [
    {
        name:"ArmoSalud",
        slug:"armosalud",
        category: ["web", "mobile"],
        subtitle: "Management system for a pharmacy:",
        description:
        "ArmoSalud is a full-stack application built to digitize the daily operations of a drugstore: inventory management with multiple product presentations (unit, tablet, box), sales invoice generation, daily reports with visual statistics, and a role-based system that distinguishes between sellers and administrators.",
        
        technologies: [
            {
                name: "NodeJS",
                icon: "nodejs.png"
            },
            {
                name: "MongoDB",
                icon: "mongodb.png"
            },
            {
                name: "Ionic",
                icon: "ionic.png"
            },
            {
                name: "Angular",
                icon: "angular.png"
            },
        ],
        
        github: "https://github.com/JSernaQ/ArmoSalud-Backend",
        demo: null
    },
    {
        name:"SecretRoom",
        slug:"secretroom",
        category: ["web"],
        subtitle: "Encrypted real-time anonymous chat:",
        description:
        "SecretRoom is a full-stack application that enables private, end-to-end encrypted conversations in real time. It uses WebSockets (Socket.IO) for instant messaging, AES-256-GCM encryption via the Web Crypto API that runs entirely in the browser (so the server never sees plaintext messages) and a room-based model with only an alias, no login or registration. Messages are encrypted client-side before being sent, decrypted only by the recipient, and never persisted.",
        
        technologies: [
            {
                name: "NodeJS",
                icon: "nodejs.png"
            },
            {
                name: "NestJS",
                icon: "nestjs.png"
            },
            {
                name: "React",
                icon: "react.png"
            },
            {
                name: "Docker",
                icon: "docker.png"
            },
        ],
        
        github: "https://github.com/JSernaQ/DronBur-Backend",
        demo: "https://secret-room-app.netlify.app/"
    },
    {
        name:"Shepherd",
        slug:"sheperd",
        category: ["web", "mobile"],
        subtitle: "Group management system:",
        description:
        "Shepherd is a full-stack application built to digitize the management of church small groups: attendance registration through a WhatsApp conversational bot with an interactive state machine, a role-based system that distinguishes administrators, cell leaders and developers, cell and member administration with detailed tracking data, and a web dashboard with meeting statistics and attendance history.",
        
        technologies: [
            {
                name: "FastApi",
                icon: "fastapi.png"
            },
            {
                name: "PostgreSQL",
                icon: "postgresql.png"
            },
            {
                name: "React",
                icon: "react.png"
            },
            {
                name: "Angular",
                icon: "angular.png"
            },
        ],
        
        github: "https://github.com/JSernaQ/shepherd-backend",
        demo: null
    },  
    {
        name:"Automatizaciones",
        slug:"automatizaciones",
        category: ["web"],
        subtitle: "RPA automations for business processes:",
        description:
        "TODO: Agregar descripción del proyecto de Automatizaciones.",
        
        technologies: [
            {
                name: "NodeJS",
                icon: "nodejs.png"
            },
            {
                name: "Linux",
                icon: "linux.png"
            },
            {
                name: "Docker",
                icon: "docker.png"
            },
        ],
        
        github: null,
        demo: null
    },
    {
        name:"Portafolio",
        slug:"portafolio",
        category: ["web"],
        subtitle: "This site, built with Astro and Tailwind:",
        description:
            "Personal portfolio built with Astro and Tailwind CSS, with a terminal-inspired design. Fast, optimized and deployed on Fly.io with Docker. It showcases my experience, projects and how to reach me, all in one place.",
    
        technologies: [
            {
                name: "Astro",
                icon: "astro.png"
            },
            {
                name: "NodeJS",
                icon: "nodejs.png"
            },
            {
                name: "Docker",
                icon: "docker.png"
            },
        ],
    
        github: "https://github.com/JSernaQ/my-portfolio",
        demo: null
        // demo: "https://my-portfolio-juan-serna-q.fly.dev"
    },
    
    
]