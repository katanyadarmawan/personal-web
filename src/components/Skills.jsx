// Skills.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiVuetify,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiGooglecloud,
  SiVite,
  SiBootstrap,
} from "react-icons/si";

export const Skills = () => {
  const skillsSection = useRef(null);
  const languages = useRef(null);
  const frameworks = useRef(null);
  const tools = useRef(null);
  useGSAP(
    () => {
      gsap.set([languages.current, frameworks.current, tools.current], {
        opacity: 0,
      });

      gsap.to(languages.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: languages.current,
          start: "start 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(frameworks.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: frameworks.current,
          start: "start 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(tools.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: tools.current,
          start: "start 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: skillsSection }
  );

  const groupClass =
    "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-4xl justify-center place-items-center";
  const iconClass =
    "skill-icon transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.85)] cursor-pointer";

  return (
    <section ref={skillsSection} className="py-16 mt-6 ">
      <div className="skill-card max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Languages & Databases</h3>
          <div className={groupClass} ref={languages}>
            <SiJavascript className={"lang " + iconClass} title="JavaScript" />
            <SiTypescript className={"lang " + iconClass} title="TypeScript" />
            <SiNodedotjs className={"lang " + iconClass} title="Node.js" />
            <SiPhp className={"lang " + iconClass} title="PHP" />
            <SiMysql className={"lang " + iconClass} title="MySQL" />
            <SiPostgresql className={"lang " + iconClass} title="PostgreSQL" />
            <SiMongodb className={"lang " + iconClass} title="MongoDB" />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">
            Frameworks & Technologies
          </h3>
          <div className={groupClass} ref={frameworks}>
            <SiReact className={"framework " + iconClass} title="React" />
            <SiVuedotjs className={"framework " + iconClass} title="Vue.js" />
            <SiNextdotjs className={"framework " + iconClass} title="Next.js" />
            <SiNuxtdotjs className={"framework " + iconClass} title="Nuxt.js" />
            <SiExpress
              className={"framework " + iconClass}
              title="Express.js"
            />
            <SiTailwindcss
              className={"framework " + iconClass}
              title="TailwindCSS"
            />
            <SiVuetify className={"framework " + iconClass} title="Vuetify" />
            <SiBootstrap
              className={"framework " + iconClass}
              title="Bootstrap"
            />
            <SiVite className={"framework " + iconClass} title="Vite" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Tools & Platforms</h3>
          <div className={groupClass} ref={tools}>
            <SiGit className={"tool " + iconClass} title="Git" />
            <SiGithub className={"tool " + iconClass} title="GitHub" />
            <SiGitlab className={"tool " + iconClass} title="GitLab" />
            <SiDocker className={"tool " + iconClass} title="Docker" />
            <SiGooglecloud className={"tool " + iconClass} title="GCP" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
