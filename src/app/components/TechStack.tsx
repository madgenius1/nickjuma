import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaAws,
    FaDocker,
    FaPython,
} from "react-icons/fa";
import {
    SiTypescript,
    SiTailwindcss,
    SiRedux,
    SiPostgresql,
    SiMongodb,
    SiGithub,
    SiDotnet,
    // SiHeroku,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const tags = [
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwindcss", icon: <SiTailwindcss /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "Nextjs", icon: <RiNextjsFill /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "Express", icon: <FaNodeJs /> },
    { name: "Postgres", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Python", icon: <FaPython /> },
    { name: "GitHub", icon: <SiGithub /> },
    // { name: "Heroku", icon: <SiHeroku /> },
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
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2, 
    });

    if (inView) {
        controls.start("visible");
    }

    return (
        <motion.div
            ref={ref}
            className="flex flex-wrap gap-2 py-4 px-2"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            {tags.map((tag) => (
                <motion.div
                    key={tag.name}
                    className="flex items-center bg-[#CCF381] text-[#4831D4] hover:bg-gray-800 hover:text-white rounded-md px-4 py-2"
                    variants={itemVariants}
                >
                    <span className="mr-2">{tag.icon}</span>
                    {tag.name}
                </motion.div>
            ))}
        </motion.div>
    );
}
