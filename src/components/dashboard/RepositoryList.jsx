// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import RepositoryCard from './RepositoryCard';

const RepositoryList = ({ repositories }) => {
  return (
    <div className="flex-1 p-4 overflow-auto">
      <div className="max-w-5xl mx-auto space-y-1">
        {repositories.map((repo, index) => (
          <RepositoryCard key={index} {...repo} />
        ))}
      </div>
    </div>
  );
};

RepositoryList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    users: PropTypes.array
  })).isRequired
};

export default RepositoryList;

