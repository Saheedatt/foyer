import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaMusic,
  FaBell,
  FaQuestionCircle,
  FaCog,
  FaPhone,
} from 'react-icons/fa';
import { MdOutlineDashboard, MdSecurity } from 'react-icons/md';

interface NavItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

const SideNav: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Dashboard', href: '/dashboard', icon: <MdOutlineDashboard /> },
    { label: 'Rooms', href: '/', icon: <FaHome /> },
    { label: 'Devices', href: '/', icon: <FaPhone /> },
    { label: 'Security', href: '/', icon: <MdSecurity /> },
    { label: 'Settings', href: '/', icon: <FaCog /> },
    { label: 'Notification', href: '/', icon: <FaBell /> },
    { label: 'Music', href: '/', icon: <FaMusic /> },
    { label: 'Support', href: '/', icon: <FaQuestionCircle /> },
  ];

  const renderIntro = () => <h2 className="text-xl font-bold mb-6">Good morning, user</h2>;

  const renderNavItems = () => (
    <nav className="space-y-2">
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className="flex items-center text-white p-2 my-2 hover:bg-gray-700 rounded-lg"
        >
          <span className="mr-3">{item.icon}</span>
          <span className={isMobile ? 'block' : 'hidden md:block'}>{item.label}</span>
        </Link>
      ))}
    </nav>
  );

  const renderSkipNavigation = () => (
    <Link to="#main-content" className="sr-only focus:not-sr-only">
      Skip to main content
    </Link>
  );

  const toggleMenu = () => setIsSidebarOpen(!isSidebarOpen);

  const renderMobileMenu = () => (
    <button 
      className="md:hidden text-black fixed top-4 left-4 z-30 bg-white p-2 rounded-full shadow-md" 
      onClick={toggleMenu}
    >
      {/* {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />} */}
      <FaBars size={20} />
      <span className="sr-only">Open the sidebar
        {/* {isSidebarOpen ? 'Close the sidebar' : 'Open the sidebar'} */}

      </span>
    </button>
  );

  return (
    <>
      {isMobile && !isSidebarOpen && renderMobileMenu()}
      <aside
        className={`
          bg-black text-white h-full p-4 flex flex-col fixed transition-all duration-300 z-20
          ${isMobile 
            ? isSidebarOpen ? 'w-64 left-0' : '-left-64 w-64' 
            : 'w-16 md:w-64 left-0'
          }
        `}
      >
        {renderSkipNavigation()}
        <div className={`flex flex-col space-y-4 ${isMobile && !isSidebarOpen ? 'hidden' : 'block'}`}>
          {isMobile && (
            <button 
              className="self-end text-white mb-4" 
              onClick={toggleMenu}
            >
              <FaTimes size={20} />
              <span className="sr-only">Close the sidebar</span>
            </button>
          )}
          {renderIntro()}
          {renderNavItems()}
        </div>
      </aside>
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default SideNav;