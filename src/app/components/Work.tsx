
import Link from "next/link";
import ProjectList from './ProjectList';


export default function Work() {
  return (
    <div id="work" className="min-h-screen bg-[#CCF381] flex flex-col items-center pb-12">
      <div className="py-12 px-4 text-[#4831D4]">
        <h1 className="text-center text-4xl font-semibold mt-8">Work</h1>
        <p className="text-center text-xl font-medium mt-4">Selected projects I have worked on.</p>
      </div>
      <div className="p-8 flex flex-col">
        <ProjectList />
      </div>



      {/* Bottom Item */}
      <div className="pb-12 pt-4 sm:block md:hidden lg:hidden">
        <Link
          href="#skills"
          className="py-2 px-4 text-[#CCF381] font-medium bg-[#4831D4] duration-150 active:bg-[#121212] active:text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#121212] rounded-lg shadow-md hover:shadow-lg border border-transparent hover:border-[#CCF381]"
        >
          My Skill Set
        </Link>
      </div>
    </div>
  );
}
