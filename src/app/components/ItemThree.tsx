
import { FaTools } from "react-icons/fa";
import { MdLocalAirport } from "react-icons/md";


export default function ItemThree() {
    return (
        <div className="flex flex-wrap mt-4 gap-3">
            <button className="flex items-center bg-[#FFFFFF] text-[#121212] hover:bg-[#000EEE] hover:text-white transition-all rounded-lg px-4 py-2 shadow-sm">
                <MdLocalAirport className="mr-2" /> Aircrafts
            </button>
            <button className="flex items-center bg-[#FFFFFF] text-[#121212] hover:bg-[#000EEE] hover:text-white transition-all rounded-lg px-4 py-2 shadow-sm">
                <FaTools className="mr-2" /> Maintenance
            </button>
        </div>
    );
}
