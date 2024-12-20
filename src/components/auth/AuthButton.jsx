// src/components/auth/AuthButton.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const AuthButton = ({ icon: Icon, text, onClick, variant = 'default', isLoading = false }) => {
  const baseClasses = "w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-colors";
  const variants = {
    default: "border-gray-200 hover:bg-gray-50 text-gray-700",
    primary: "bg-blue-600 text-white border-transparent hover:bg-blue-700"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {Icon && <Icon size={20} />}
          <span>{text}</span>
        </>
      )}
    </button>
  );
};

AuthButton.propTypes = {
  icon: PropTypes.elementType,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'primary']),
  isLoading: PropTypes.bool
};

export default AuthButton;