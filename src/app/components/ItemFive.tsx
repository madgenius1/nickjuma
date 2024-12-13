
import { IoMdRocket } from "react-icons/io";
import { HiMiniSignal } from "react-icons/hi2";
import { SiOpentelemetry } from "react-icons/si";



export default function ItemThree() {
    return (
        <div className="flex flex-wrap mt-4 gap-3">
            <button className="flex items-center bg-[#FFFFFF] text-[#121212] hover:bg-[#000EEE] hover:text-white transition-all rounded-lg px-4 py-2 shadow-sm">
                <IoMdRocket className="mr-2" /> Rockets LEOP
            </button>
            <button className="flex items-center bg-[#FFFFFF] text-[#121212] hover:bg-[#000EEE] hover:text-white transition-all rounded-lg px-4 py-2 shadow-sm">
                <HiMiniSignal className="mr-2" /> Signal Integrity Test
            </button>
            <button className="flex items-center bg-[#FFFFFF] text-[#121212] hover:bg-[#000EEE] hover:text-white transition-all rounded-lg px-4 py-2 shadow-sm">
                <SiOpentelemetry className="mr-2" /> Telemetry and Tracking
            </button>
        </div>
    );
}
