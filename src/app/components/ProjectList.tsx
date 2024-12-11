
import Image from "next/image";
import Link from "next/link";


const projects = [
    {
        imgSrc: "/blackicon.svg",
        imgAlt: "Batian Technolgies",
        title: "Batian Technologies",
        description: "Corporate Website",
        linkHref: "https://www.batiantechnologies.com"
    },
    {
        imgSrc: "/grace.svg",
        imgAlt: "Grace Kimani",
        title: "Grace Kimani",
        description: "Advocate Firm Website",
        linkHref: "https://gracekimaniadvocates.co.ke/"
    },
    {
        imgSrc: "/kolwezi.png",
        imgAlt: "Kolwezi Hardware",
        title: "Kolwezi Hardware",
        description: "Hardware Website and ERP",
        linkHref: "https://kolwezi.vercel.app/"
    },
];

export default function ProjectList() {
    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="p-8 flex flex-col items-center">
                        <Image className="shadow rounded-lg overflow-hidden p-2 border" src={project.imgSrc} alt={project.imgAlt} width={300} height={300} />
                        <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                            <div className="block py-2">
                                <h4 className="font-bold text-black text-xl">{project.title}</h4>
                                <p className="mt-2 text-gray-600"> {project.description} </p>
                            </div>
                            <div className="mt-5">
                                <Link href={project.linkHref} target="_blank" type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"> More </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>

    )
};