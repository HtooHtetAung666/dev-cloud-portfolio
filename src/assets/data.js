import React from "react";
import { FaCode } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

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
            "I'm Htoo Htet Aung, a programmer 🧑‍💻 graduated from the University of Information Technology (UIT) in the year 2022. Currently I'm attending Master of Science Programme in Digital Transformation Technology at Mae Fah Luang University (MFU) in Thailand 🇹🇭. I'm interested in programming since Baechlor academic days and after graduating, I worked as a web developer in IT solution companies. Not only in programming field, I have further deep dive into emerging technologies like machine learning and cloud computing subjects and I'm enjoying it. I use my lesiure time by watching youtube, listening music in soundcloud and sometimes playing computer games 🎮." 
    },
    skills: [
        {
            skillName: <p className='text-xl text-[#B372BD] font-semibold mt-4'>Programming</p>,
            skillIcon: <FaCode className='text-4xl text-[#B372BD] mx-auto inline-block' />
        },
        {
            skillName: <p className='text-xl text-laraDev font-semibold mt-4'>Cloud</p>,
            skillIcon: <TbCloudComputing className='text-4xl text-laraDev mx-auto inline-block' />
        },
        {
            skillName: <p className='text-xl text-laraLan font-semibold mt-4'>AI</p>,
            skillIcon: <GiArtificialIntelligence  className='text-4xl text-laraLan mx-auto inline-block' />
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