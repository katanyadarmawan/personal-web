import { useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText);

export const About = () => {
  const [about] = useState(
    `I am a Software Engineer professional with experience working as an App Developer and
    Fullstack/Frontend Engineer.
    Throughout my career, I have been involved in various web and mobile application development projects,
     enriching my understanding of designing, building, and optimizing applications for diverse business needs. \n \n I have hands-on experience with a range of technologies and programming languages, including Vue.js, React.js, Next.js, Nuxt.js, Laravel, Spring Boots and OutSystems. My ability to master these technologies allows me to quickly adapt to project requirements and develop applications with optimal performance. In addition, I have a deep understanding of software development structures and design patterns, including the use of clean, organized code architecture. I believe that well-structured code not only streamlines the development process but also simplifies maintenance and future enhancements. \n \n With a combination of technical experience, strong grasp of software development concepts, and the ability to work effectively both in teams and independently,
    I am confident in my ability to contribute positively and innovatively to your company.`
  );
  const aboutSection = useRef();
  const leftContent = useRef();
  const rigtContent = useRef();

  useGSAP(
    () => {
      gsap.set([leftContent.current, rigtContent.current], {
        opacity: 0,
        y: 40,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection.current,
          start: "20% 75%",
          end: "bottom top", // penting: benar-benar selesai saat section lewat
          scrub: 1.5,
          toggleActions: "play none none reverse",

          // markers: true,
        },
      });

      // ANIMASI MASUK
      tl.to(leftContent.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          rigtContent.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        )

        // ANIMASI KELUAR (SAAT SUDAH LEWAT)
        .to(
          [leftContent.current, rigtContent.current],
          {
            opacity: 0,
            y: -40,
            duration: 1,
            ease: "power3.in",
          },
          "+=0.5"
        );
    },
    { scope: aboutSection }
  );

  return (
    <section
      ref={aboutSection}
      className="h-[800px] w-full justify-center items-center mt-2 flex flex-col sm:flex-row text-start gap-5 px-4 sm:px-10"
    >
      <div
        ref={leftContent}
        className="content-left flex flex-col justify-center basis-full sm:basis-1/2 p-4 sm:p-6"
      >
        <div className="text-2xl font-bold mb-3">About Me</div>
        <div className="text-[1rem] text-justify leading-snug tracking-tight">
          {about}
        </div>
      </div>

      <div
        ref={rigtContent}
        className="basis-full sm:basis-1/2 flex justify-center items-center p-4 sm:p-6 overflow-hidden"
      >
        <div className="relative w-[400px] h-[600px]">
          {/* SVG background */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-[620px] h-[620px] -top-30 -left-40 z-0"
          >
            <path
              fill="#B4B4B4"
              d="M61.8,-31.7C70.9,-19.9,62.8,5.8,49.6,28.1C36.4,50.4,18.2,69.2,6.4,65.5C-5.5,61.8,-11,35.7,-13.4,19.6C-15.8,3.6,-15.1,-2.4,-12.4,-10.5C-9.6,-18.7,-4.8,-29,10.8,-35.2C26.3,-41.5,52.7,-43.5,61.8,-31.7Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Image */}
          <img
            src="/rizky-clean.png"
            alt=""
            className="relative z-10 w-full h-full object-cover rounded-tl-lg rounded-br-lg"
          />
        </div>
      </div>
    </section>
  );
};
