// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  Lock, 
  Github, 
  Settings, 
  Book, 
  X,
  LogOut
} from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQurey';
import { useAuth } from '../../context/AuthContext';
import PropTypes from 'prop-types';
import Logo from '../../assets/Logo.jpg';

const MenuItem = ({ icon: Icon, text, isActive, onClick, variant = 'default' }) => {
  const variants = {
    default: isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50',
    danger: 'text-red-600 hover:bg-red-50'
  };

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 w-full px-3 py-2 text-sm rounded-lg transition-colors
        ${variants[variant]}
      `}
    >
      <Icon size={20} />
      <span>{text}</span>
    </button>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const primaryMenuItems = [
    { 
      icon: Github, 
      text: "Repositories", 
      path: "/repositories" 
    },
    { 
      icon: MessageSquare, 
      text: "AI Code Review", 
      path: "/code-review" 
    },
    { 
      icon: Lock, 
      text: "Cloud Security", 
      path: "/security" 
    },
    { 
      icon: Book, 
      text: "Guide", 
      path: "/guide" 
    },
    { 
      icon: Settings, 
      text: "Settings", 
      path: "/settings" 
    }
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // You might want to show an error notification here
    }
  };

  const sidebarContent = (
    <>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <img 
              src={Logo} 
              alt="Logo" 
              className="h-8 w-8 rounded-full"
            />
            <span className="font-semibold">CodeAnt AI</span>
          </div>
          {isMobile && (
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Primary Navigation */}
        <nav className="flex-1 px-2 space-y-1 mb-4">
          {primaryMenuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              text={item.text}
              isActive={location.pathname === item.path}
              onClick={() => {
                navigate(item.path);
                if (isMobile) setIsMobileMenuOpen(false);
              }}
            />
          ))}
        </nav>

        {/* User Section */}
        <div className="mt-auto">
          <div className="px-2 mb-4">
            <MenuItem
              icon={LogOut}
              text="Logout"
              onClick={handleLogout}
              variant="danger"
            />
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {user?.name?.[0] || 'U'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.name || 'User Name'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.email || 'user@example.com'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Mobile sidebar overlay
  const mobileSidebar = isMobile && (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <div 
        className={`fixed inset-y-0 left-0 w-64 bg-white transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {sidebarContent}
      </div>
    </div>
  );

  // Desktop sidebar
  const desktopSidebar = !isMobile && (
    <div className="w-64 border-r border-gray-200 h-screen flex flex-col">
      {sidebarContent}
    </div>
  );

  return (
    <>
      {mobileSidebar}
      {desktopSidebar}
      
    </>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'danger'])
};

export default Sidebar;