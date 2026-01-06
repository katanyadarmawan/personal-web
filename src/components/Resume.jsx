import React from "react";

export const Resume = () => {
  return (
    <section className="w-full flex justify-center py-16">
      <div className="max-w-4xl w-full px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Resume</h2>

        {/* Summary */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
          <p className="text-gray-600 leading-relaxed">
            Frontend Engineer with 3+ years of experience specializing in
            building fast, scalable, and user-focused web applications.
            Passionate about performance optimization, clean architecture, and
            delivering highly polished UI/UX experiences.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Experience</h3>

          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">
                Frontend Engineer – PT Digital Inovasi
              </h4>
              <span className="text-gray-500 text-sm">2023 - Present</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">Jakarta, Indonesia</p>
            <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
              <li>
                Develop and maintain enterprise-level web applications using
                React and Vue.
              </li>
              <li>
                Optimize frontend performance, achieving up to 35% faster load
                times.
              </li>
              <li>
                Collaborate closely with UI/UX designers to deliver smooth user
                interactions.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Frontend Developer – Freelance</h4>
              <span className="text-gray-500 text-sm">2021 - 2023</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">Remote</p>
            <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
              <li>
                Built landing pages, admin dashboards, and company profile
                websites.
              </li>
              <li>Integrated REST APIs and third-party services.</li>
              <li>
                Improved user experience by simplifying interaction flows.
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Education</h3>

          <div className="flex justify-between items-center">
            <h4 className="font-semibold">
              Bachelor of Informatics Engineering
            </h4>
            <span className="text-gray-500 text-sm">2018 - 2022</span>
          </div>
          <p className="text-gray-600 text-sm">
            Universitas Teknologi Indonesia
          </p>
        </div>
      </div>
    </section>
  );
};
