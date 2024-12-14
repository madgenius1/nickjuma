import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
    { category: "UI/UX Design", percentage: 85 },
    { category: "Frontend (React.js & Next.js)", percentage: 95 },
    { category: "Backend (NodeJS, ExpressJS, Python, C#)", percentage: 85 },
    { category: "Mobile Apps (React Native)", percentage: 85 },
    { category: "Cloud (AWS)", percentage: 60 },
    { category: "Automation (Ranorex)", percentage: 70 },
    { category: "Testing (Jest)", percentage: 80 },
    { category: "IoT (Arduino)", percentage: 70 },
];

export default function SkillsSection() {
    // State to track the animated progress values
    const [progressValues, setProgressValues] = useState(
        Array(skills.length).fill(0) // Initialize all progress values to 0
    );

    useEffect(() => {
        // Start the animation for each skill
        const intervals = skills.map((skill, index) => {
            return setInterval(() => {
                setProgressValues((prevValues) => {
                    const newValues = [...prevValues];
                    if (newValues[index] < skill.percentage) {
                        newValues[index] += 1; // Increment progress
                    }
                    return newValues;
                });
            }, 20); // Adjust the speed of animation
        });

        // Cleanup intervals when the component unmounts
        return () => intervals.forEach((interval) => clearInterval(interval));
    }, []);

    return (
        <div className="p-8">
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={skill.category}
                        className="flex flex-col items-center space-y-4 bg-white shadow-lg p-4 rounded-lg"
                    >
                        <div className="w-24 h-24">
                            <CircularProgressbar
                                value={progressValues[index]} 
                                text={`${progressValues[index]}%`}
                                styles={buildStyles({
                                    textSize: "16px",
                                    textColor: "#4831D4",
                                    pathColor: "#4831D4",
                                    trailColor: "#F2F2F2",
                                })}
                            />
                        </div>
                        <h3 className="text-center text-sm font-semibold text-gray-950">
                            {skill.category}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
