'use client';

import Typewriter from 'typewriter-effect';
import Image from 'next/image';


export default function Hero() {
    return (
        <div className="h-screen ">
            <div className="flex flex-col h-screen lg:flex-row mx-auto max-w-screen-xl">
                {/* Left Section */}
                <div className="lg:w-[60%] w-full py-8 px-6 bg-[#4831D4]">
                    <div className="py-12">
                        <h2 className="text-[#FFFFFF] text-2xl lg:text-5xl md:text-4xl text-center px-4">
                            Hi, I am
                            <span className='font-bold text-[#CCF381]'> Nick Juma</span>
                            .
                        </h2>
                    </div>
                    <div className="flex justify-center text-center">
                        <p className="text-xl text-[#FFFFFF]">
                            I am a
                            <span className="font-medium text-xl ml-2">Full Stack Developer Crafting Innovative Solutions.</span>
                        </p>
                    </div>
                    <div className="py-12 flex flex-col sm:flex-row text-[#FFFFFF] justify-center text-center">
                        <div className='py-4 text-2xl sm:order-1'>
                            I am skilled in
                        </div>
                        <div className="text-2xl ml-2 py-4 font-semibold text-[#CCF381] sm:order-2">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Designing UI|UX",
                                        "Developing Websites.",
                                        "Developing Progressive Web Applications.",
                                        "Cross platform mobile app development.",
                                        "Desktop app development."
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-[40%] w-full h-screen bg-[#CCF381]">
                    <div className="flex items-center justify-center ">
                        <Image src="/dev.svg" alt="shapes" width={400} height={400} className='object-container'/>
                    </div>
                </div>
            </div>


        </div>
    );
}
