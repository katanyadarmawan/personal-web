import { useState } from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export const Hero = () => {
  const [name] = useState("Hi, I’m Rizky Darmawan");
  const [detail] = useState("Software Engineer | Frontend Engineer");
  const socials = [
    {
      icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/rizky-darmawan/",
    },
    { icon: "fa-brands fa-github", url: "https://github.com/katanyadarmawan" },
    {
      icon: "fa-brands fa-instagram",
      url: "https://www.instagram.com/katanyadarmawan/",
    },
  ];

  const heroSection = useRef(null);
  const heroHeader = useRef(null);
  const heroDetail = useRef(null);
  const download = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      download.current,
      { opacity: 0, y: -200 },
      { opacity: 1, y: 0, duration: 3, ease: "power3.out" }
    );

    const split1 = SplitText.create(heroHeader.current, {
      type: "chars, words, lines",
    });
    const split2 = SplitText.create(heroDetail.current, {
      type: "chars, words, lines",
    });
    const allChars = [...split1.chars, ...split2.chars];

    gsap.from(allChars, {
      x: 150,
      opacity: 0,
      duration: 1.5,
      ease: "power4",
      stagger: 0.04,
    });
    // scroll animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection.current,
          start: "50px top",
          scrub: 1.5,
        },
      });

      tl.to(heroHeader.current, {
        scale: 1.6,
        x: 400,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      tl.to(
        heroDetail.current,
        {
          scale: 1.7,
          x: -400,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1.2"
      );

      tl.to(
        download.current,
        {
          scale: 1.8,
          y: -400,
          opacity: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1.5"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="flex min-h-screen w-full justify-center items-center"
      ref={heroSection}
    >
      <main>
        <div className="mb-3" ref={heroHeader}>
          <span className="inline-block header text-7xl font-bold">{name}</span>
        </div>
        <div className="mb-5" ref={heroDetail}>
          <span className="inline-block transition-transform text-[1.3rem]">
            {detail}
          </span>
        </div>
        <div ref={download}>
          <div className="flex justify-center gap-4">
            <a
              href="/cv-rizky-darmawan-2026.pdf"
              download
              className="
    inline-flex items-center gap-2 animate-bounce
    px-6 py-3
    bg-gray-900 text-white text-sm font-medium
    rounded-lg
    hover:bg-gray-700
    transition
  "
            >
              Download CV
            </a>
          </div>
        </div>
      </main>
    </section>
  );
};
