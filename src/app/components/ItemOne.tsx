import {
    FaReact,
    FaNodeJs,
    FaDocker,
} from "react-icons/fa";
import {
    SiPostgresql,
    SiMongodb,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function ItemOne() {
    return (
        <div className="flex flex-wrap mt-4 gap-3">
            <button className="flex items-center bg-[#FFFFFF] text-[#121212] hover:bg-[#000EEE] hover:text-white transition-all rounded-lg px-4 py-2 shadow-sm">
                <FaReact className="mr-2" /> ReactJs
            </button>
            <button className="flex items-center bg-[#FFFFFF] text-[#121212] hover:bg-[#000EEE] hover:text-white transition-all rounded-lg px-4 py-2 shadow-sm">
                <RiNextjsFill className="mr-2" /> NextJs
            </button>
            <button className="flex items-center bg-[#FFFFFF] text-[#121212] hover:bg-[#000EEE] hover:text-white transition-all rounded-lg px-4 py-2 shadow-sm">
                <SiMongodb className="mr-2" /> MongoDB
            </button>
            <button className="flex items-center bg-[#FFFFFF] text-[#121212] hover:bg-[#000EEE] hover:text-white transition-all rounded-lg px-4 py-2 shadow-sm">
                <SiPostgresql className="mr-2" /> PostgreSQL
            </button>
            <button className="flex items-center bg-[#FFFFFF] text-[#121212] hover:bg-[#000EEE] hover:text-white transition-all rounded-lg px-4 py-2 shadow-sm">
                <FaDocker className="mr-2" />  Docker
            </button>
            <button className="flex items-center bg-[#FFFFFF] text-[#121212] hover:bg-[#000EEE] hover:text-white transition-all rounded-lg px-4 py-2 shadow-sm">
                <FaNodeJs className="mr-2" />  NodeJS
            </button>
        </div>
    );
}
