
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
            <div className="">
                <ExperienceList />
            </div>
        </div>


    )
}