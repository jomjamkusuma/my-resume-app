import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div>
      <footer className="rounded-lg m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://www.linkedin.com/in/kusuma-jongpattana-975a25197/"
              target="_blank"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <LinkedInIcon fontSize="large" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Kusuma Jongpattana
              </span>
            </a>
            <ul className="flex flex-wrap items-center justify-center space-y-2 md:space-y-0 mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                <a href="#" className="border rounded-lg p-2 mb-2 me-4 md:me-6">
                  <FileDownloadIcon /> Resume.pdf
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline mb-2">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" /> */}
          <div className="my-6  w-full h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" className="hover:underline">
              Kusuma Jongpattana
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
