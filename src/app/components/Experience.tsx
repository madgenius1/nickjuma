
import Link from "next/link";
import ExperienceList from "./ExperienceList";


export default function Experience() {
    return (
        <div
            id="experience"
            className="min-h-screen bg-[#111111] flex flex-col items-center pb-12 px-4 lg:px-8 max-w-screen-xl mx-auto"
        >
            <div className="py-12 px-4 text-[#FFFFFF]">
                <h1 className="text-center text-4xl font-semibold mt-8">Experience</h1>
                <p className="text-center text-xl font-medium mt-4">What I have done over time</p>
            </div>
            <div>
                <ExperienceList />
            </div>
            <div className="py-6 sm:block md:hidden lg:hidden">
                <Link
                    href="#skills"
                    className="py-2 px-4 text-[#FFFFFF] font-medium bg-[#4831D4] duration-150 active:bg-[#121212] active:text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#121212] rounded-lg shadow-md hover:shadow-lg border border-transparent hover:border-[#CCF381]"
                >
                    My Skill Set
                </Link>
            </div>
        </div>


    )
}