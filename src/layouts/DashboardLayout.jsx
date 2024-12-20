// src/layouts/DashboardLayout.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import { useMediaQuery } from '../hooks/useMediaQuery';
import Sidebar from '../components/dashboard/Sidebar';
import MobileMenu from '../components/navigation/MobileMenu';
import PropTypes from 'prop-types';



const DashboardLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="flex h-screen bg-white">
        <div className="flex h-screen">
        <Sidebar />
      </div>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        {children}
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DashboardLayout;