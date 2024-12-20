// src/components/dashboard/RepositoryItem.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Star, GitFork } from 'lucide-react';

// Avatar component
const Avatar = ({ letter, bgColor = 'bg-purple-600', size = 'small' }) => {
  const sizeClasses = {
    small: 'w-6 h-6 text-xs sm:w-8 sm:h-8 sm:text-sm',
    medium: 'w-8 h-8 text-sm sm:w-10 sm:h-10 sm:text-base',
    large: 'w-10 h-10 text-base sm:w-12 sm:h-12 sm:text-lg'
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        ${bgColor} 
        rounded-full 
        flex 
        items-center 
        justify-center 
        text-white 
        font-semibold
      `}
    >
      {letter}
    </div>
  );
};

// Avatar group component
const AvatarGroup = ({ users, limit = 3 }) => {
  const visibleUsers = users.slice(0, limit);
  const remainingCount = users.length - limit;

  return (
    <div className="flex -space-x-2">
      {visibleUsers.map((user, index) => (
        <div key={index} className="ring-2 ring-white rounded-full">
          <Avatar 
            letter={user.letter} 
            bgColor={user.bgColor} 
          />
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="ring-2 ring-white rounded-full">
          <Avatar 
            letter={`+${remainingCount}`} 
            bgColor="bg-gray-400"
          />
        </div>
      )}
    </div>
  );
};

// Repository stats component
const RepositoryStats = ({ stars, forks }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1 text-gray-500">
        <Star size={16} />
        <span className="text-sm">{stars}</span>
      </div>
      <div className="flex items-center gap-1 text-gray-500">
        <GitFork size={16} />
        <span className="text-sm">{forks}</span>
      </div>
    </div>
  );
};

// Main RepositoryItem component
const RepositoryItem = ({ 
  name, 
  language, 
  updatedAt, 
  description,
  users = [], 
  stats = { stars: 0, forks: 0 } 
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-gray-100 gap-3 sm:gap-4 hover:bg-gray-50 transition-colors px-4">
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {name}
          </h3>
          {language && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {language}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {description}
          </p>
        )}
        <p className="text-xs text-gray-500 mt-1">
          {updatedAt}
        </p>
      </div>
      
      <div className="flex items-center gap-6">
        <RepositoryStats {...stats} />
        <AvatarGroup users={users} />
      </div>
    </div>
  );
};

// PropTypes
Avatar.propTypes = {
  letter: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

AvatarGroup.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    letter: PropTypes.string.isRequired,
    bgColor: PropTypes.string
  })).isRequired,
  limit: PropTypes.number
};

RepositoryStats.propTypes = {
  stars: PropTypes.number,
  forks: PropTypes.number
};

RepositoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string,
  updatedAt: PropTypes.string.isRequired,
  description: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.shape({
    letter: PropTypes.string.isRequired,
    bgColor: PropTypes.string
  })),
  stats: PropTypes.shape({
    stars: PropTypes.number,
    forks: PropTypes.number
  })
};

export default RepositoryItem;