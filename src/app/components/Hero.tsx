'use client';

import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';
import Links from './Links';

export default function Hero() {
    return (
        <div className="min-h-screen bg-fixed bg-parallax bg-cover bg-no-repeat flex flex-col items-center pb-12">
            <div className="flex flex-wrap lg:flex-nowrap mx-auto max-w-screen-xl px-6 py-8">
                {/* Left Section */}
                <div className="lg:w-[60%] w-full py-8">
                    <div className="py-4 -ml-6">
                        <h2 className="text-[#4831D4] text-3xl lg:text-6xl md:text-5xl text-center lg:text-left">
                            Hi, I'm
                            <span className="font-bold text-[#121212]"> Nick Juma</span>.
                        </h2>
                        <p className="text-3xl py-6 text-[#4831D4] text-center lg:text-left">
                            I am a
                            <span className="font-semibold text-3xl ml-2">
                                Full Stack Developer.
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row text-[#4831D4] -ml-6 justify-center lg:justify-start items-center sm:items-start">
                        <div className='text-2xl sm:order-1 font-medium '>
                            I am skilled in
                        </div>
                        <div className="text-2xl ml-2 font-semibold text-[#121212] sm:order-2">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Designing UI|UX.",
                                        "Developing Websites.",
                                        "Developing PWAs.",
                                        "Developing Mobile Apps.",
                                        "Developing Desktop Apps."
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex py-12 -ml-6 lg:justify-start justify-center">
                        <Links />
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-[40%] w-full flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center px-4">
                        <Image
                            src="/avatar.png"
                            alt="avatar"
                            width={500}
                            height={500}
                            className="object-contain py-2 shadow-lg px-2 rounded-full border border-[#4831D4] transition duration-300 ease-in-out hover:scale-110"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <div className="pb-12 pt-4 sm:block md:hidden lg:hidden">
                <Link
                    href="#about"
                    className="py-2 px-4 text-[#FFFFFF] font-medium bg-[#4831D4] duration-150 active:bg-[#121212] hover:bg-[#FFFFFF] hover:text-[#121212] rounded-lg shadow-md hover:shadow-lg border border-transparent hover:border-[#4831D4]"
                >
                    About Me
                </Link>
            </div>
        </div>
    );
}

