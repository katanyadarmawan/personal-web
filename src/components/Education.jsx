import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Education = () => {
  const educationSection = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        ".education-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: educationSection.current,
            start: "center 75%",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );
    },
    { scope: educationSection }
  );

  const education = [
    {
      degree: "Bachelor of Informatics Engineering",
      school: "Muhammadiyah University of Tagerang",
      year: "2014 - 2018",
      achievements: [
        "Focused on Web Development & Software Engineering.",
        "Active in student associations and campus programming communities.",
        "Graduated with a final project developing an online library web application.",
      ],
    },
    {
      degree: "Senior High School (Social Sciences)",
      school: "Perintis 1 Sepatan Senior High School",
      year: "2010 - 2013",
      achievements: [],
    },
  ];
  return (
    <section
      className="w-full max-w-5xl mx-auto px-4 py-10"
      ref={educationSection}
    >
      <h2 className="text-2xl font-bold mb-8">Education</h2>

      <div className="space-y-6">
        {education.map((item, index) => (
          <div
            key={index}
            className="education-card border border-gray-200 rounded-lg p-6
             transition-transform duration-300 ease-out
             hover:scale-105 hover:shadow-xl"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <span className="text-sm text-gray-500">{item.year}</span>
            </div>

            {/* School */}
            <p className="text-sm font-medium text-gray-700 mb-3">
              {item.school}
            </p>

            {/* Achievements */}
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {item.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
