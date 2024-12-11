import { motion } from "framer-motion";
import {
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaAws,
    FaDocker,
    FaPython ,
} from "react-icons/fa";
import {
    SiTypescript,
    SiTailwindcss,
    SiRedux,
    SiPostgresql,
    SiMongodb,
    SiGithub,
    SiDotnet ,
    SiJirasoftware,
    SiHeroku,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const tags = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwindcss", icon: <SiTailwindcss /> },
    { name: "React", icon: <FaReact /> },
    { name: "Nextjs", icon: <RiNextjsFill /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "Express", icon: <FaNodeJs /> },
    { name: "Postgres", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Python", icon: <FaPython /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Jira", icon: <SiJirasoftware /> },
    { name: "Heroku", icon: <SiHeroku /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS", icon: <FaAws /> },
];

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export default function TechStack() {
    return (
        <motion.div
            className="flex flex-wrap gap-2 p-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {" "}
            {tags.map((tag) => (
                <motion.div
                    key={tag.name}
                    className="flex items-center bg-[#CCF381] text-[#4831D4] hover:bg-gray-800 hover:text-white  rounded-md px-4 py-2"
                    variants={itemVariants}
                >
                    {" "}
                    <span className="mr-2">{tag.icon}</span> {tag.name}{" "}
                </motion.div>
            ))}{" "}
        </motion.div>
    );
}
