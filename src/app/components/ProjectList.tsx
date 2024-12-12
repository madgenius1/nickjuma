import Image from "next/image";
import Link from "next/link";
import { IoMdExit } from "react-icons/io";
import { motion } from "framer-motion";

const projects = [
    {
        imgSrc: "/blackicon.svg",
        imgAlt: "Batian Technolgies",
        title: "Batian Technologies",
        description: "Corporate Website",
        linkHref: "https://www.batiantechnologies.com",
        stack: "ReactJS - TailwindCSS - MongoDB",
        paragraph: "Corporate website for Batian Technologies. The site highlights the organization's software solutions developed to meet client demands.",
    },
    {
        imgSrc: "/grace.svg",
        imgAlt: "Grace Kimani",
        title: "Grace Kimani",
        description: "Advocate Firm Website",
        linkHref: "https://gracekimaniadvocates.co.ke/",
        stack: "NextJS - TailwindCSS - MongoDB",
        paragraph: "Lawfirm website for client. The website provides insight into the advocacy services and practice areas offered by Adv. Grace Kimani.",
    },
    {
        imgSrc: "/kolwezi.png",
        imgAlt: "Kolwezi Hardware",
        title: "Kolwezi Hardware",
        description: "Hardware Website and ERP",
        linkHref: "https://kolwezi.vercel.app/",
        stack: "NextJS - TailwindCSS - MongoDB",
        paragraph: "Hardware store website and ERP. The website showcases the products and services that Kolwezi Hardware offers to customers. ",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0 }, 
};

export default function ProjectList() {
    return (
        <main>
            <div className="px-6 grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="h-auto w-auto border bg-gray-50 rounded-2xl shadow-lg shadow-gray-400 p-6"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }} 
                        transition={{ duration: 0.6, delay: index * 0.3 }} 
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <div className="flex items-center gap-4 pb-4 border-b">
                            <Image
                                src={project.imgSrc}
                                alt={project.imgAlt}
                                width={100}
                                height={100}
                                className="rounded-full shadow-md"
                            />
                            <h1 className="text-xl font-bold text-gray-800">
                                {project.title}
                            </h1>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-lg text-[#4831D4] font-semibold mb-2">
                                {project.stack}
                            </h2>
                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                {project.paragraph}
                            </p>
                            <Link
                                href={project.linkHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-white bg-[#4831D4] hover:bg-gray-800 hover:text-[#CCF381] active:bg-[#121212] px-4 py-2 w-[45%] rounded-md shadow-md transition duration-200"
                            >
                                Learn More
                                <IoMdExit size={20} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
