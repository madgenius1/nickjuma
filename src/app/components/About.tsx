
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import TechStack from "./TechStack";


export default function About() {
  return (
    <div id="about" className="min-h-screen py-12 bg-[#4831D4] flex flex-col items-center px-6 pb-12">
      <div className="py-4 flex lg:flex-row flex-col mx-auto max-w-screen-xl px-2 text-[#CCF381]">
        <div className="flex lg:flex-row flex-col w-full justify-start px-2 py-6 gap-4">
          <div className="flex flex-col lg:w-[60%] md:[60%] w-full">
            <h1 className="font-semibold text-3xl lg:text-4xl md:text-4xl mt-10 pb-6">About Me</h1>
            <p className=" leading-loose w-full flex justify-start sm:text-sm lg:text-lg font-light pt-4 py-2 text-[#FFFFFF]">
              My background is in Aeronautical Engineering. My dev journey began by building Arduino Projects and Cross platform mobile apps in C# using the Xamarin Platform.
            </p>
            <p className="leading-loose w-full flex justify-start sm:text-sm lg:text-lg font-light py-2 text-[#FFFFFF]">
              I am now experienced in XD, Figma, MERN, ReactNative, and NextJS. I use different tools to design and build scalable applications, intuitive user interfaces, and provide seamless digital experiences. <br />
              I am passionate about turning ideas into innovations through clean code and creative problem-solving processes.
            </p>
            <p className="leading-loose w-full flex justify-start sm:text-sm lg:text-lg font-light py-2 text-[#FFFFFF]">
              I also enjoy DIY wood work, reading, playing chess, rocket science, poetry, and visual art.
            </p>
          </div>
          <div className="flex flex-col lg:w-[40%] md:w-full w-full">
            <div className="mt-10 pb-4 flex flex-row items-center">
              <FaCode size={60} className="text-[#CCF381] px-2" />
              <h2 className=" text-3xl lg:text-4xl md:text-4xl font-semibold">Tech Stack</h2>
            </div>
            <TechStack />
          </div>
        </div>
      </div>


      <div className="pb-12 pt-4 sm:block md:hidden lg:hidden">
        <Link
          href="#work"
          className="py-2 px-4 text-[#4831D4] font-medium bg-[#CCF381] duration-150 active:bg-[#121212] active:text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#121212] rounded-lg shadow-md hover:shadow-lg border border-transparent hover:border-[#CCF381]"
        >
          My Recent Projects
        </Link>
      </div>
    </div>
  );
}
