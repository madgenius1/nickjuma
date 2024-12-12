
import Link from "next/link"


export default function Experience() {
    return (
        <div className="min-h-screen bg-parallax bg-fixed bg-cover bg-no-repeat  flex flex-col items-center pb-12 max-w-screen-xl">
            <div className="flex lg:flex-row flex-col w-full justify-start px-4 py-6 gap-4">
                <div className="flex flex-col lg:w-[60%] md:[60%] w-full lg:px-8 ">
                    <h1 className="text-2xl lg:text-4xl md:text-3xl font-semibold text-[#121212]">
                        Experience
                    </h1>
                </div>
                <div className="flex flex-col lg:w-[40%] md:w-full w-full">
            <div className=" pb-4 flex flex-row items-center">
              <h2 className=" text-3xl lg:text-4xl md:text-4xl text-black font-semibold">Tech Stack</h2>
            </div>
            
          </div>
            </div>
        </div>

    )
}