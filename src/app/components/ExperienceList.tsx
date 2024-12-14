import { motion } from "framer-motion";
import ItemOne from "./ItemOne";
import ItemTwo from "./ItemTwo";
import ItemThree from "./ItemThree";
import ItemFour from "./ItemFour";
import ItemFive from "./ItemFive";

const experiences = [
    {
        organization: "Batian Technologies",
        duration: "2021-Now",
        role: "Full Stack Developer",
        location: "Nairobi",
        statement: "Built client SPAs and PWAs, mobile app pages, ERPs, and CRM modules, increasing margins. I reduced routine tasks through automation, improving overall efficiency. I also founded two startups, D2D and Kiota App.",
        item: <ItemOne />,
    },
    {
        organization: "Alan Dick EA",
        duration: "2020-2021",
        role: "Software Developer",
        location: "Nairobi",
        statement: "C# backend developer for IP software used for Remote Monitoring System. Built aggregator for the system. Used NI Labview for Graphical Programming and Ranorex for automation.",
        item: <ItemTwo />,
    },
    {
        organization: "ALS Kenya",
        duration: "Mar-Apr 2020",
        role: "Maintenance Intern",
        location: "Nairobi",
        statement: "Aircraft maintenance intern. Took part in DHC-8 100 avionics tasks during C-check.",
        item: <ItemThree />,
    },
    {
        organization: "Jambojet",
        duration: "May-Dec 2019",
        role: "Technical Trainee",
        location: "Nairobi",
        statement: "Participated in routine and non-routine line and base maintenance tasks for DHC-8 400 aircraft. Conducted troubleshooting and normalization of avionic components.",
        item: <ItemFour />,
    },
    {
        organization: "Brogio Space Center",
        duration: "Sep-Dec 2018",
        role: "TT&C Intern",
        location: "Nairobi",
        statement: "Performed Telemetry, Tracking, and Communication tasks for AGILE, Nustar, Aqua, and Swift satellites. Configuration of TX/RX and signal integrity test. Rocket pre-launch, launch and LEOP support. Wrote first Malindi 1 TT&C Operations Handbook.",
        item: <ItemFive />,
    },
];

// Statistics items
const statistics = [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Startups", value: "2" },
];


// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function ExperienceList() {
    return (
        <main>
            {/* Statistics Section */}
            <h2 className="text-[#FFFFFF] text-xl font-medium px-6 sm:block md:hidden lg:hidden pb-2"> So Far...</h2>
            <div className="flex flex-col md:flex-row justify-center items-start gap-8 px-6 -mt-6 py-8">
                <motion.div
                    className="grid grid-cols-2 gap-6 md:gap-8 md:grid-cols-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, staggerChildren: 0.2 }}
                >
                    {statistics.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 text-[#0AEF94] hover:bg-white hover:text-[#4831D4] rounded-md shadow-md px-4 py-4 text-center transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            <p className="text-3xl font-bold">{stat.value}</p>
                            <p className="text-sm font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Experience List Section */}
            <motion.main
                className="flex flex-col gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {experiences.map((experience, index) => (
                    <motion.section
                        key={index}
                        className="w-full flex flex-col lg:flex-row justify-center py-4 gap-8"
                        variants={itemVariants}
                    >
                        <article className="lg:w-[90%] w-full p-6 bg-gray-800 shadow-md rounded-lg">
                            <div className="mb-6">
                                <div className="flex justify-between gap-2 items-center">
                                    <h2 className="text-lg text-[#FFFFFF] font-semibold">
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
                                    <span className="text-md text-[#FFFFFF] font-normal">
                                        {experience.location}
                                    </span>
                                </div>
                            </div>
                            <p className="text-md text-white leading-relaxed font-normal">
                                {experience.statement}
                            </p>
                            <div className="py-2">{experience.item}</div>
                        </article>
                    </motion.section>
                ))}
            </motion.main>
        </main>
    );
}
