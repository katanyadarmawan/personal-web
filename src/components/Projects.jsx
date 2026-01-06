import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const Projects = () => {
  const projectsSection = useRef();
  useGSAP(
    () => {
      gsap.set(".project-card", { opacity: 0 });

      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsSection.current,
            start: "10% 75%",
            // toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: projectsSection }
  );

  const projects = [
    {
      title: "Back Office Application",
      tech: ["JSP", "Java", "Spring Boot", "Bootstrap"],
      description:
        "An internal company application for managing products, banners, rewards, campaigns, and vouchers for the Alfagift application.",
      // demo: "https://example-demo.com",
      // github: "https://github.com/example/dashboard",
    },
    {
      title: "Admin Tools Application",
      tech: ["JavaScript", "Nuxt.js", "Vuetify", "Tailwind", "Vite"],
      description:
        "An internal application for managing livestream data, promotions, and online ordering applications (APO).",
      // demo: "https://example-demo.com",
      // github: "https://github.com/example/dashboard",
    },
    {
      title: "Alfagift Partner Chat Agent (ALPACA)",
      tech: ["JavaScript", "Nuxt.js", "Vuetify", "Tailwind", "Vite"],
      description:
        "A real-time chat application for Alfagift official store partners.",
      // demo: "https://example-demo.com",
      // github: "https://github.com/example/dashboard",
    },
    {
      title: "MNC Tourism",
      tech: ["October CMS", "PHP", "Laravel", "JavaScript", "Bootstrap"],
      description:
        "A content management system (CMS) application for managing tourism-related content.",
      demo: "https://mnctourismindonesia.com/",
      // github: "https://github.com/example/chatapp",
    },
    {
      title: "Next Hotel",
      tech: ["Vue.js", "Laravel", "Bootstrap"],
      description: "A landing page website for Next Hotel.",
      demo: "https://nexthotel.id/",
      // github: "https://github.com/example/chatapp",
    },
    {
      title: "One East",
      tech: ["Vue.js", "Laravel", "Bootstrap"],
      description: "A landing page website for One East.",
      demo: "https://www.oneeast.co.id/",
      // github: "https://github.com/example/chatapp",
    },
    {
      title: "Report Issue",
      tech: ["OutSystems", "JavaScript", ".NET"],
      description:
        "A centralized application that allows users to submit feedback and report bugs for applications that have been developed.",
      // demo: "https://example-demo.com",
      // github: "https://github.com/example/dashboard",
    },
    {
      title: "Logsheet",
      tech: ["OutSystems", "JavaScript", ".NET", "React.js"],
      description:
        "An internal logging application used by field teams to record schedules and ongoing work activities.",
      // demo: "https://example-demo.com",
      // github: "https://github.com/example/dashboard",
    },
    {
      title: "Master Data",
      tech: ["OutSystems", "JavaScript", ".NET"],
      description:
        "An internal master data management application for related teams.",
      // demo: "https://example-demo.com",
      // github: "https://github.com/example/dashboard",
    },
    {
      title: "Security Patrol",
      tech: ["OutSystems", "JavaScript", ".NET", "React.js"],
      description:
        "A mobile-based application for reporting damaged roads within the company area.",
      // demo: "https://example-demo.com",
      // github: "https://github.com/example/dashboard",
    },
  ];

  return (
    <section ref={projectsSection} className="py-16" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="card-project grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card border border-gray-200 rounded-lg p-6
             transition-transform duration-300 ease-out
             hover:scale-120 hover:shadow-xl bg-gray-200"
            >
              <div
                className="
          pointer-events-none absolute inset-0 rounded-xl
          opacity-0 group-hover:opacity-100
          transition duration-500
          bg-linear-to-br from-white/10 via-transparent to-transparent
        "
              />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-sm opacity-80 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="
                text-xs px-2 py-1 rounded-md
                bg-white/20 opacity-90
                transition
                group-hover:bg-white/40
              "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex gap-4 mt-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:underline"
                  >
                    <FiExternalLink /> Website
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:underline"
                  >
                    <FiGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
