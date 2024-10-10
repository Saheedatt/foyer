import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  const renderLogo = () => {
    return (
      <Link to="/" className="text-2xl font-bold">
        Foyer
      </Link>
    );
  };
  const copyrightText = () => {
    return (
      <div className="text-gray-500 text-sm">
        &copy; 2024 Saheedat. All rights reserved.
      </div>
    );
  };
  const socialLink = () => {
    return (
      <a
        href="https://github.com/saheedatt"
        className="text-xxl flex pr-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
        Github
      </a>
    );
  };
  const downloadApp = () => {
    return (
      <button className="bg-black text-white px-4 text-xxl py-1 rounded">
        Download App
      </button>
    );
  };

  return (
    <footer className="footer p-4 flex flex-col  w-full md:flex-row justify-between">
      {renderLogo()}
      {copyrightText()}
      {socialLink()}
      {downloadApp()}
    </footer>
  );
};

export default Footer;
