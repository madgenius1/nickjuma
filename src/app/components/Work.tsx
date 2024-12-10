
import Link from "next/link";



export default function Work() {
  return (
    <div id="work" className="min-h-screen bg-[#CCF381] flex flex-col items-center pb-12">
      <div className="py-12 text-[#4831D4]">
        <h1 className="text-center text-4xl mt-10">Work</h1>
        <p className="text-center mt-4">This is the Work section.</p>
      </div>
      <div className="pb-12 pt-4 sm:block md:hidden lg:hidden">
        <Link
          href="#skills"
          className="py-2 px-4 text-[#CCF381] font-medium bg-[#4831D4] duration-150 active:bg-[#121212] active:text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#121212] rounded-lg shadow-md hover:shadow-lg border border-transparent hover:border-[#CCF381]"
        >
          My Tech Stack
        </Link>
      </div>
    </div>
  );
}
