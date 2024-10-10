import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavItem {
  label: string;
  href: string;
}

const Navigation = () => {
  const [isSidebarOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "About us", href: "/about" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Help", href: "/help" },
    { label: "Contact", href: "/contact" },
    // { label: "Sign in", href: "/sign-in" },
    {label: "Sign up", href: "/dashboard"}
  ];
  const renderLogo = () => {
    return (
      <Link to="/" className="text-2xl font-bold">
        Foyer
      </Link>
    );
  };
  const renderNavItems = () => {
    return navItems.map((item) => (
      <Link
        key={item.label}
        to={item.href}
        className="mx-4 hover:text-gray-500 p-2"
      >
        {item.label}
      </Link>
    ));
  };
  const renderSkipNavigation = () => {
    return (
      <Link to="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </Link>
    );
  };
  const toggleMenu = () => {
    setIsOpen(!isSidebarOpen);
  };
  const renderMobileMenu = () => {
    return (
      <button className="md:hidden" onClick={toggleMenu}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
        <span className="sr-only">
          {isSidebarOpen ? "Close the sidebar" : "Open the sidebar"}{" "}
        </span>
      </button>
    );
  };
  const renderMobileSidebar = () => {
    return (
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-transform duration-300 md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white w-64 h-full p-4 fixed right-0 top-0 transform transition-transform duration-300">
          <button className="mb-4" onClick={toggleMenu}>
            <FaTimes />
            <span className="sr-only">Close the menu</span>
          </button>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="hover:text-gray-500"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <nav className="flex justify-between items-center p-4">
      {renderSkipNavigation()}
      {renderLogo()}
      <div className="hidden md:flex">{renderNavItems()}</div>
      {renderMobileMenu()}
      {renderMobileSidebar()}
    </nav>
  );
};

export default Navigation;
