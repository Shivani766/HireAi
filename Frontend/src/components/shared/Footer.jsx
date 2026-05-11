import React from "react";

const Footer = () => {
  return (
    <footer className="border-t dark:border-t-gray-700 border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* LEFT SIDE */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">HireAi</h2>
            <p className="text-sm">
              © 2026 Shivani Diwakar All Rights Reserved.
            </p>
          </div>

          {/* RIGHT SIDE (UPDATED LINKS) */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0 text-sm">

            {/* my Portfolio */}
            <a
              href="https://polite-monstera-1cbe7c.netlify.app/"
              target="_blank"
              className="hover:text-gray-400"
            >
              My Portfolio
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Shivani766"
              target="_blank"
              className="hover:text-gray-400"
            >
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shivani-diwakar"
              target="_blank"
              className="hover:text-gray-400"
            >
              LinkedIn
            </a>

            {/* Phone Number */}
            <a
              href="tel:+917668407998"
              className="hover:text-gray-400"
            >
              +91 7668407998
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;