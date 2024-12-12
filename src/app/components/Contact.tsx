
import Link from "next/link";


export default function Contact() {
  return (
    <div id="skills" className="min-h-screen bg-[#4831D4]  flex flex-col items-center pb-12">
      <div className="py-12 text-[#CCF381]">
        <h1 className="text-center text-4xl font-semibold mt-8">Let&apos;s Talk</h1>
        <p className="text-center text-xl font-medium mt-4">Hit me up,send me a message.</p>
      </div>

      <div className="py-6 flex flex-row justify-center items-center">
        <h2 className="text-center text-2xl text-[#F9F9F9] py-2">
          Contact Cards
        </h2>
      </div>



      {/* Bottom Item */}
      <div className="pb-12 pt-4 sm:block md:hidden lg:hidden">
        <Link
          href="#contact"
          className="py-2 px-4 text-[#CCF381] font-medium bg-[#4831D4] duration-150 active:bg-[#121212] active:text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#121212] rounded-lg shadow-md hover:shadow-lg border border-transparent hover:border-[#CCF381]"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
