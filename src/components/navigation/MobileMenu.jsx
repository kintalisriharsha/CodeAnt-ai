// src/components/navigation/MobileMenu.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { X, MessageSquare, Lock, Github } from 'lucide-react';
import PropTypes from 'prop-types';

const MobileMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: MessageSquare, text: "AI Code Review" },
    { icon: Lock, text: "Cloud Security" },
    { icon: Github, text: "How to Use" }
  ];

  return (
    <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className={`fixed inset-y-0 left-0 w-64 bg-white transform transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <img 
                src="/api/placeholder/32/32" 
                alt="Logo" 
                className="h-8 w-8 rounded-full"
              />
              <span className="font-semibold">CodeAnt AI</span>
            </div>
            <button onClick={onClose} className="p-2">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <item.icon size={20} />
                <span>{item.text}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default MobileMenu;