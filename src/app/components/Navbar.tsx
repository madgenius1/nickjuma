'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";



export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const links = [
        { text: "Home", href: "/" },
        { text: "About", href: "#about" },
        { text: "Work", href: "#work" },
        { text: "Skills", href: "#skills" },
        { text: "Contact", href: "#contact" },
    ];

    return (
        <nav className="bg-white sticky top-0 z-50 px-6 py-2 font-medium text-[#121212]">
            <div className="container mx-auto py-2 flex justify-between items-center">
                <div className="justify-start px-4 py-1 ml-1 flex items-center">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={120}
                            height={80}
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                <div className="flex justify-end items-center py-2">
                    <button onClick={handleMenuToggle} aria-label="Toggle Menu">
                        {menuOpen ? <CgClose size={30} className="text-[#4831D4]"/> : <HiOutlineMenuAlt3 size={30} className="text-[#4831D4]" />}
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-0 right-0 h-full lg:w-60 md:w-60 w-full  shadow-md bg-white  transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }  z-50 py-8 px-6`}
            >
                <button
                    className="absolute top-6 right-6"
                    onClick={handleMenuToggle}
                    aria-label="Close Menu"
                >
                    <CgClose size={30} className="text-[#4831D4]"/>
                </button>

                <div className="flex flex-col space-y-6 mt-16">
                    {links.map((link, index) => (
                        <Link
                            key={link.text}
                            href={link.href}
                            className={`hover:text-[#121212] hover:underline transition-opacity duration-500 text-[#4831D4] ${menuOpen
                                    ? `opacity-100 delay-${index * 200}`
                                    : "opacity-0 delay-0"
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                            onClick={() => setMenuOpen(false)} // Close menu on link click
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}