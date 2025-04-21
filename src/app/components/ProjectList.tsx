import Image from "next/image";
import Link from "next/link";
import { IoMdExit } from "react-icons/io";
import { motion } from "framer-motion";

const projects = [
    {
        imgSrc: "/blackicon.svg",
        imgAlt: "Batian Technolgies",
        title: "Batian Technologies",
        linkHref: "https://batiantechnologies.vercel.app/",
        stack: "ReactJS - TailwindCSS - MongoDB- NodeJs",
        paragraph: "Corporate website for Batian Technologies. The site highlights the organization's software solutions developed to meet client demands.",
    },
    {
        imgSrc: "/grace.svg",
        imgAlt: "Grace Kimani",
        title: "Grace Kimani",
        linkHref: "https://gracekimaniadvocates.co.ke/",
        stack: "NextJS - TailwindCSS - PostgreSQL",
        paragraph: "Lawfirm website for client. The website provides insight into the practice areas and legal services offered by Grace Kimani.",
    },
    {
        imgSrc: "/kolwezi.png",
        imgAlt: "Kolwezi Hardware",
        title: "Kolwezi Hardware",
        linkHref: "https://kolwezi.vercel.app/",
        stack: "NextJS - TailwindCSS - PostgreSQL",
        paragraph: "Hardware store website and ERP. The website showcases the products and services that Kolwezi Hardware offers to customers. ",
    },
    {
        imgSrc: "/d2d.png",
        imgAlt: "d2d app",
        title: "d2d App",
        linkHref: "https://www.d2dapp.com/",
        stack: "NextJS - ReactNative - NodeJS - MongoDB",
        paragraph: "Founded D2D App startup for door to door deliveries. The platform addresses the last mile delivery challenge in Kenyan urban centers. ",
    },
    {
        imgSrc: "/kiota.svg",
        imgAlt: "Kiota",
        title: "Kiota App",
        linkHref: "https://www.kiota.batiantechnologies.com",
        stack: "NextJS - ReactNative - NodeJS - MongoDB",
        paragraph: "Founded Kiota App startup for savings and investment. It enables MOP and BOP access savings and investment opportunities.",
    },
    {
        imgSrc: "/afex.png",
        imgAlt: "Afex Hub",
        title: "Afex Hub",
        linkHref: "http://afexhub.co.ke/",
        stack: "NextJS - TailwindCSS -NodeJs - MongoDB",
        paragraph: "EdTech website and web app for AfexHub. The platform provides test prep and training for SAT tests. ",
    },
    {
        imgSrc: "/avyra.png",
        imgAlt: "Avyra Styles",
        title: "Avyra Styles",
        linkHref: "https://avyrastyles.vercel.app/",
        stack: "NextJS - TailwindCSS -NodeJs - GraphQL- Shopify",
        paragraph: "Ecommerce website with Nextjs frontend and powered by Shopify. ",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0 }, 
};

export default function ProjectList() {
    return (
        <main>
            <div className="px-4 grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8 max-w-screen-xl">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="h-auto w-auto border bg-gray-50 rounded-2xl shadow-md shadow-gray-400 p-6"
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
                                className="flex items-center gap-2 text-sm text-white bg-[#4831D4] hover:bg-gray-800 hover:text-[#CCF381] active:bg-[#121212] px-4 py-2 w-[50%] rounded-md shadow-md transition duration-200"
                            >
                                Live site
                                <IoMdExit size={20} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
