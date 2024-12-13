
import ItemOne from "./ItemOne"
import ItemTwo from "./ItemTwo"


const experiences = [
    {
        organization: "Batian Technologies",
        duration: "2021-Present",
        role: "Full Stack Developer",
        location: "Nairobi",
        statement: "I helped built client SPAs and PWAs, mobile app pages, ERPs, and CRM modules, increasing margins. I reduced routine tasks through automation, improving overall efficiency. I also founded two startups, D2D and Kiota App.",
        item: <ItemOne />
    },
    {
        organization: "Alan Dick EA.",
        duration: "2020-2021",
        role: "Software Developer",
        location: "Nairobi",
        statement: "C# backend developer for IP software used for Remote Monitoring System. Built aggregator for the system. Used NI Labview for Graphical Programming and Ranorex for automation.",
        item: <ItemTwo />
    },
    {
        organization: "AlS Kenya",
        duration: "Mar-Apr 2020",
        role: "Maintenance Intern",
        location: "Nairobi",
        statement: "Aircraft maintenance intern. Took part in DHC-8 100 avionic tasks during C-check.",
    },
    {
        organization: "Jambojet.",
        duration: "May-Dec 2019",
        role: "Technical Trainee",
        location: "Nairobi",
        statement: "Participated in routine and non-routine line and base maintenance tasks for DHC-8 400 aircraft. Conducted troubleshooting and normalization of avionic components.",
    },
    {
        organization: "Brogio Space Center.",
        duration: "Sep-Dec 2018",
        role: "TT&C Intern",
        location: "Nairobi",
        statement: "Performed Telemetry, Tracking, and Communication tasks for AGILE, Nustar, Aqua, and Swift satellites. Configuration of TX/RX and signal processing. Rocket pre-launch, launch and LEOP support.",
    },
]

export default function ExperienceList() {
    return (
        <main>
            {experiences.map((experience, index) => (
                <section key={index} className="w-full flex flex-col lg:flex-row justify-center py-4 gap-8">
                    <article className="lg:w-[90%] w-full p-6 bg-gray-800 shadow-md rounded-lg">
                        <div className="mb-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl text-[#FFFFFF] font-semibold">
                                    {experience.organization}
                                </h2>
                                <span className="text-md text-[#FFFFFF] font-normal">
                                {experience.duration}
                                </span>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <h3 className="text-lg text-[#0AEF94] font-medium">
                                {experience.role}
                                </h3>
                                <span className="text-lg text-[#FFFFFF] font-normal">{experience.location}</span>
                            </div>
                        </div>
                        <p className="text-md text-white leading-relaxed font-normal">
                        {experience.statement}
                        </p>
                        <div className="py-2">
                            {experience.item}
                        </div>
                    </article>
                </section>
            ))}
        </main>
    )
}