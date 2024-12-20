// src/components/dashboard/DashboardHeader.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Plus, Menu, X } from 'lucide-react';
import PropTypes from 'prop-types';
import Logo from '../../assets/Logo.jpg';

// eslint-disable-next-line no-unused-vars
const DashboardHeader = ({ onMenuClick, showMenuButton = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items for the dropdown
  const navigationItems = [
    { title: "AI Code Review", path: "/code-review" },
    { title: "Cloud Security", path: "/security" },
    { title: "How to Use", path: "/how-to-use" },
    { title: "Support", path: "/support" }
  ];

  return (
    <>
      {/* Main Header */}
      <div className="flex flex-col border-b border-gray-200">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            {showMenuButton && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 -ml-2 lg:hidden"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            )}
            <img
              src={Logo}
              alt="CodeAnt AI"
              className="h-8 w-8"
            />
          </div>
          <button
            className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add Repository</span>
          </button>
        </div>


        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center justify-between"
              >
                {item.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

DashboardHeader.propTypes = {
  onMenuClick: PropTypes.func,
  showMenuButton: PropTypes.bool
};

export default DashboardHeader;