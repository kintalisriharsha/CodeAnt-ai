import React from 'react';
import PropTypes from 'prop-types';
import AvatarGroup from './AvatarGroup';

const RepositoryCard = ({ name, language, updatedAt, users }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-gray-100 gap-3 sm:gap-4">
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          <span className="text-xs text-gray-500">{language}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">{updatedAt}</p>
      </div>
      <AvatarGroup users={users} />
    </div>
  );
};

RepositoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    letter: PropTypes.string.isRequired,
    bgColor: PropTypes.string
  }))
};

export default React.memo(RepositoryCard);