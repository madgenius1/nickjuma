
import Image from "next/image"
import Link from "next/link"


export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <main>
            <footer className="p-4">
                <div className="flex sm:text-left lg:flex-row flex-col gap-4 sm:space-y-2 items-start justify-between font-medium">
                    <Image
                        src="/logowhite.png"
                        alt="Nick Juma Logo"
                        width={200}
                        height={80}
                        className="p-2 rounded-md logo"
                    />
                    <nav aria-label="Footer Navigation" className="flex lg:flex-row flex-col p-4 sm:items-start lg:items-center sm:space-x-4 space-y-2 lg:space-y-0">
                        <Link href="#work" className="text-md text-[#FFFFFF] hover:text-[#CCF381]">
                            Projects
                        </Link>
                        <Link href="#experience" className="text-md text-[#FFFFFF] hover:text-[#CCF381]">
                            Experience
                        </Link>
                        <Link href="#skills" className="text-md text-[#FFFFFF] hover:text-[#CCF381]">
                            Skills
                        </Link>
                        <Link href="#skills" target="_blank" className="text-lg text-[#FFFFFF] hover:text-[#CCF381]">
                            Resume
                        </Link>
                    </nav>
                    <p className="text-md text-white sm:text-left p-4 lg:text-center">
                        &copy; {new Date().getFullYear()} Nick Juma. 
                    </p>
                </div>
            </footer>

        </main>

    )
}