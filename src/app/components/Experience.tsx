
import Link from "next/link"


export default function Experience() {
    return (
        <div className="min-h-screen bg-[#CCF381] flex flex-col items-center pb-12 max-w-screen-xl">
            <div className="flex lg:flex-row flex-col w-full justify-start px-4 py-6 gap-4">
                <div className="flex flex-col lg:w-[60%] md:[60%] w-full lg:px-8 ">
                    <div className="py-6">
                        <h1 className="text-2xl lg:text-4xl md:text-3xl font-semibold text-[#4831D4]">
                            Experience Column
                        </h1>
                        <h2 className="text-black">
                            badazzle badazzle.
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col lg:w-[40%] md:w-full w-full py-6">
                    <div className=" pb-4 flex flex-col items-center">
                        <h2 className=" text-3xl lg:text-4xl md:text-4xl text-[#4831D4] font-semibold">Timeline column</h2>
                        <Link href="#" className="text-black">Timeline Comes here</Link>
                        <h2 className="text-black">
                            badazzle badazzle.
                        </h2>
                    </div>

                </div>
            </div>
        </div>

    )
}