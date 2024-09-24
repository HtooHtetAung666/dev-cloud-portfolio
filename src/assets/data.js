import React from "react";
import { FaAws, FaLinux, FaCode } from "react-icons/fa";

const data = {
    name: "Htoo Htet Aung",
    title: "Developer / Cloud Enthusiast",
    social: {
        github: "https://github.com/HtooHtetAung666",
        email: "hhawork039@gmail.com",
        linkedin: "https://www.linkedin.com/in/htoo-htet-aung-0197bb254/"
    },
    about: {
        title: "Background",
        description: 
            "Passed matriculation exam with 500 marks (4D) out of 600 marks and attended University of Information Technology (UIT). Have strong work experiences in data analysis, cloud computing and developing web applications. Skilled in writing clean codes and have knowledge of designing, developing and deploying web applications and cloud solutions. Proficient in a wide range of programming languages, automation tools and cloud technologies.",
    },
    skills: [
        {
            skillName: <p className='text-xl text-[#B372BD] font-semibold mt-4'>Programming</p>,
            skillIcon: <FaCode className='text-4xl text-[#B372BD] mx-auto inline-block' />
        },
        {
            skillName: <p className='text-xl text-laraDev font-semibold mt-4'>Linux</p>,
            skillIcon: <FaLinux className='text-4xl text-laraDev mx-auto inline-block' />
        },
        {
            skillName: <p className='text-xl text-laraLan font-semibold mt-4'>Programming</p>,
            skillIcon: <FaAws className='text-4xl text-laraLan mx-auto inline-block' />
        },
    ],
    projects: [
        {
            title: "React Tailwind Portfolio",
            description: "Portfolio Template built with React and Tailwind.",
            tags: [
                "portfolio",
                "nextjs",
                "tailwindcss",
            ],
            link: "https://github.com/HtooHtetAung666/colorful-portfolio"
        },
        {
            title: "Blog Site",
            description: "Blog website built with Laravel and Bootstrap",
            tags: [
                "blog",
                "laravel",
                "bootstrap",
            ],
            link: "https://github.com/HtooHtetAung666/technical-blog"
        },
        {
            title: "Chat App",
            description: "Chat website built with react and firebase",
            tags: [
                "chat",
                "reactjs",
                "firebase",
            ],
            link: "https://github.com/HtooHtetAung666/simple-chat-application"
        }
    ]
}

export default data