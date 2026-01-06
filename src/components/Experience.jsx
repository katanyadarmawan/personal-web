import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Experience = () => {
  const experienceSection = useRef();
  useGSAP(
    () => {
      gsap.set(".experience-card", { opacity: 0 });

      gsap.fromTo(
        ".experience-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: experienceSection.current,
            start: "center 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: experienceSection }
  );
  const experiences = [
    {
      role: "Frontend Engineer",
      company: "PT Global Loyalty Indonesia",
      period: "2022 - Present",
      description: [
        "Developed large-scale web applications using React and Vue for loyalty and membership systems.",
        "Improved UI rendering performance through state management optimization and code splitting.",
        "Optimized component design by avoiding premature reusability and over-abstraction during new feature development.",
        "Built reusable UI components and implemented a design system to ensure consistency across products.",
        "Collaborated with Backend, QA, and Product teams in end-to-end feature development.",
        "Conducted code reviews and ensured adherence to clean code principles and frontend best practices.",
      ],
    },
    {
      role: "Fullstack Developer",
      company: "PT MNC Tourism Tbk",
      period: "2021 - 2022",
      description: [
        "Maintained and enhanced existing web applications.",
        "Revamped legacy applications by migrating them to modern technologies.",
        "Worked within an Agile Scrum environment and collaborated closely with QA and Designers.",
      ],
    },
    {
      role: "Fullstack Developer",
      company: "Sinarmas Land",
      period: "2020 - 2021",
      description: [
        "Maintained and enhanced existing web applications.",
        "Developed internal applications to digitalize previously manual processes across multiple teams.",
        "Worked within an Agile Scrum environment and collaborated closely with QA and Designers.",
      ],
    },
  ];

  return (
    <section
      className="w-full max-w-5xl mx-auto px-4 py-10"
      ref={experienceSection}
    >
      <h2 className="text-2xl font-bold mb-8">Experience</h2>

      <div className="space-y-6">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="experience-card border border-gray-200 rounded-lg p-6
             transition-transform duration-300 ease-out
             hover:scale-105 hover:shadow-xl"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-lg font-semibold">{item.role}</h3>
              <span className="text-sm text-gray-500">{item.period}</span>
            </div>

            {/* Company */}
            <p className="text-sm font-medium text-gray-700 mb-3">
              {item.company}
            </p>

            {/* Description */}
            <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-gray-600 text-left">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
