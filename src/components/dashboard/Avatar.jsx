import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ letter, bgColor = 'bg-purple-600', size = 'small' }) => {
  const sizeClasses = {
    small: 'w-6 h-6 text-xs sm:w-8 sm:h-8 sm:text-sm',
    medium: 'w-8 h-8 text-sm sm:w-10 sm:h-10 sm:text-base',
    large: 'w-10 h-10 text-base sm:w-12 sm:h-12 sm:text-lg'
  };

  return (
    <div className={`${sizeClasses[size]} ${bgColor} rounded-full flex items-center justify-center text-white font-semibold`}>
      {letter}
    </div>
  );
};

Avatar.propTypes = {
  letter: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default React.memo(Avatar);