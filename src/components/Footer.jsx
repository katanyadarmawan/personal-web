// import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const Footer = () => {
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
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500 text-center sm:text-left">
          © {new Date().getFullYear()} Rizky Darmawan. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <div>
            <div className="flex justify-center gap-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fa-brands cursor-pointer transition-transform duration-300 
                hover:scale-145 hover:text-gray-500 text-2xl animate-bounce"
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
          {/* <a
            href="mailto:rizky.darmawan1818@email.com"
            className="text-gray-500 hover:text-gray-900 transition"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>

          <a
            href="https://github.com/katanyadarmawan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/rizky-darmawan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a> */}
        </div>
      </div>
    </footer>
  );
};
