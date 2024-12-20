// src/components/auth/AuthLayout.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import BackgroundSVG from './BackgroundSVG';
import Logo from '../../assets/Logo.jpg';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background SVG - Hidden on mobile */}
      <div className="hidden md:block">
        <BackgroundSVG />
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
        {/* Left Side - Metrics */}
        <div className="hidden md:block">
          <div className="w-full max-w-md">
            {/* Main Stats Card */}
            <div className="bg-white rounded-[32px] shadow-lg p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-12 border-b pb-4">
                <img 
                  src={Logo}
                  alt="Logo" 
                  className="w-8 h-8"
                />
                <h2 className="text-lg font-medium text-gray-900">
                  AI to Detect & Autofix Bad Code
                </h2>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-2xl font-bold mb-1">30+</div>
                  <div className="text-sm text-gray-600">Language Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">10K+</div>
                  <div className="text-sm text-gray-600">Developers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">100K+</div>
                  <div className="text-sm text-gray-600">Hours Saved</div>
                </div>
              </div>
            </div>

            {/* Issues Fixed Card */}
            <div className="bg-white rounded-[32px] shadow-lg p-6 mt-6 ml-auto max-w-[280px]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex items-center text-blue-600">
                  <span className="text-sm font-medium">↑ 14%</span>
                  <span className="text-xs text-gray-500 ml-1">This week</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Issues Fixed</div>
                <div className="text-3xl font-bold">500K+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md">
          <div className="text-center space-y-4 mb-8">
            <div className="flex items-center justify-center gap-2">
              <img 
                src={Logo} 
                alt="CodeAnt AI" 
                className="w-8 h-8"
              />
              <span className="text-xl">CodeAnt AI</span>
            </div>
            <h2 className="text-2xl font-semibold">Welcome to CodeAnt AI</h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthLayout;