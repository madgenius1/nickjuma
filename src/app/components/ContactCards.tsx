

import { motion } from "framer-motion";
import { HiOutlineDeviceMobile, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function ContactCards() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, 
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <motion.div
            className="py-4 px-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 pb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} 
        >
            <motion.div variants={itemVariants}>
                <Link
                    href="tel:+254728763645"
                    className="rounded-md h-32 bg-white shadow-md text-[#4831D4] hover:bg-[#CCF381] p-4 flex flex-col gap-4 justify-center items-center"
                >
                    <HiOutlineDeviceMobile size={40} />
                    <h2 className="text-lg font-medium">Call Me</h2>
                </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Link
                    href="https://wa.me/254728763645"
                    className="rounded-md h-32 bg-white shadow-md text-[#4831D4] hover:bg-[#CCF381] p-4 flex flex-col gap-4 justify-center items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp size={40} />
                    <h2 className="text-lg font-medium">Text Me</h2>
                </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Link
                    href="mailto:nickjuma@outlook.com"
                    className="rounded-md h-32 bg-white shadow-md text-[#4831D4] hover:bg-[#CCF381] p-4 flex flex-col gap-4 justify-center items-center"
                >
                    <HiOutlineMail size={40} />
                    <h2 className="text-lg font-medium">Email Me</h2>
                </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
                <div className="rounded-md h-32 bg-white shadow-md text-[#4831D4] hover:bg-[#CCF381] p-4 flex flex-col gap-4 justify-center items-center">
                    <HiOutlineLocationMarker size={40} />
                    <h2 className="text-lg font-medium">Nairobi, Kenya</h2>
                </div>
            </motion.div>
        </motion.div>
    );
}
