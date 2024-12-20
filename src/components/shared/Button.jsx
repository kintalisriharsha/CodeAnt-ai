import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  icon: Icon,
  fullWidth = false,
  onClick,
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium transition-colors rounded-lg";
  
  const variants = {
    default: "border border-gray-200 hover:bg-gray-50 text-gray-900",
    primary: "bg-blue-600 hover:bg-blue-700 text-white border-transparent",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  icon: PropTypes.elementType,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default React.memo(Button);