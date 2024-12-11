
import Link from "next/link";


export default function Skills() {
  return (
    <div id="skills" className="min-h-screen bg-fixed bg-sprinkler bg-cover bg-no-repeat  flex flex-col items-center pb-12">
      <div className="py-12 text-[#4831D4]">
        <h1 className="text-center text-4xl font-semibold mt-8">Skill Set</h1>
        <p className="text-center text-xl font-medium mt-4">Tools I use to provide solutions.</p>
      </div>

      <div className="py-6 flex flex-row justify-center items-center">
        <h2 className="text-center text-2xl text-[#121212] py-2">
          Skillset
        </h2>
      </div>



      {/* Bottom Item */}
      <div className="pb-12 pt-4 sm:block md:hidden lg:hidden">
        <Link
          href="#skills"
          className="py-2 px-4 text-[#CCF381] font-medium bg-[#4831D4] duration-150 active:bg-[#121212] active:text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#121212] rounded-lg shadow-md hover:shadow-lg border border-transparent hover:border-[#CCF381]"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
