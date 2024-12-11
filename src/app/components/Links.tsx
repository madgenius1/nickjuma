import { FaLinkedin, FaGithub, } from "react-icons/fa";
import Link from "next/link";


export default function Links() {
    return (
        <main>
            <div className="py-2 flex flex-row justify-evenly items-center gap-4">
                <Link href="https://www.linkedin.com/in/nick-juma-734b4b93/" rel="noopener noreferrer" target="_blank">
                    <FaLinkedin size={40} className="bg-gray-800 text-white rounded-md hover:bg-[#CCF381] hover:text-[#4831D4]" />
                </Link>
                <Link href="https://github.com/madgenius1" rel="noopener noreferrer" target="_blank">
                    <FaGithub size={40} className="bg-gray-800 text-white rounded-md hover:bg-[#CCF381] hover:text-[#4831D4]" />
                </Link>
            </div>
        </main>
    )
}