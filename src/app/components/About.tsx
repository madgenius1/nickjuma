
import Link from "next/link";
import { AiOutlineProfile } from "react-icons/ai";



export default function About() {
  return (
    <div id="about" className="min-h-screen py-12 bg-[#4831D4] flex flex-col items-center  pb-12">
      <div className="py-8 flex lg:flex-row flex-col mx-auto max-w-screen-xl px-6 text-[#CCF381]">
        <div className="flex flex-col justify-start p-8">
        <AiOutlineProfile size={100} className="py-2 text-[#CCF381]" />
          <h1 className="font-semibold text-3xl lg:text-4xl md:text-4xl mt-10 pb-4">About Me</h1>
          <p className=" mt-4 leading-relaxed lg:w-[70%] w-full sm:text-sm lg:text-lg font-medium PY-2 text-[#FFFFFF]">
            With expertise in XD, Figma, MERN and ReactNative, I design and build scalable web applications, intuitive user interfaces, and seamless digital experiences. <br />
            I am passionate about turning ideas into innovations through clean code and creative problem-solving processes.</p>
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
