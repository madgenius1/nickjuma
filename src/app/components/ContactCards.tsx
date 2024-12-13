
import { HiOutlineDeviceMobile, HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";

export default function ContactCards() {
    return (
        <div className="py-4 px-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 pb-10">
            <Link
                href="tel:+254728763645"
                className="rounded-md h-32 bg-white shadow-md text-[#4831D4] hover:bg-[#CCF381] p-4 flex flex-col gap-4 justify-center items-center"
            >
                <HiOutlineDeviceMobile size={40}  />
                <h2 className="text-lg font-medium">Call Me</h2>
            </Link>
            <Link
                href="https://wa.me/254728763645"
                className="rounded-md h-32 bg-white shadow-md text-[#4831D4] hover:bg-[#CCF381] p-4 flex flex-col gap-4 justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp size={40} />
                <h2 className="text-lg font-medium">Text Me</h2>
            </Link>
            <Link
                href="mailto:nickjuma@outlook.com"
                className="rounded-md h-32 bg-white shadow-md text-[#4831D4] hover:bg-[#CCF381] p-4 flex flex-col gap-4 justify-center items-center"
            >
                <HiOutlineMail size={40} />
                <h2 className="text-lg font-medium ">Email Me</h2>
            </Link>
            <div className="rounded-md h-32 bg-white shadow-md text-[#4831D4] hover:bg-[#CCF381] p-4 flex flex-col gap-4 justify-center items-center">
                <HiOutlineLocationMarker size={40} />
                <h2 className="text-lg font-medium ">Nairobi, Kenya</h2>
            </div>
        </div>
    )
}