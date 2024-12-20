// src/components/dashboard/Dashboard.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import SearchBar from '../shared/SearchBar';
import { useMediaQuery } from '../../hooks/useMediaQurey';
import MobileMenu from '../navigation/MobileMenu';
import RepositoryItem from './RepositoryItem';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const repositories = [
    {
      name: "design-system",
      language: "React",
      updatedAt: "Updated 3 days ago",
      users: [
        { letter: "P", bgColor: "bg-purple-600" },
        { letter: "A", bgColor: "bg-red-600" }
      ]
    },
    // ... other repositories
  ];

  return (
    <div className="flex-1 flex flex-col">
      <DashboardHeader 
        onMenuClick={() => setIsMobileMenuOpen(true)}
        showMenuButton={!isDesktop}
      />
      <div className="p-4 border-b border-gray-200">
        <SearchBar 
          placeholder="Search repositories..."
          value={searchTerm}
          onChange={setSearchTerm}
        />
      </div>
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-1 max-w-5xl mx-auto">
          {repositories.map((repo, index) => (
            <RepositoryItem key={index} {...repo} />
          ))}
        </div>
      </div>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </div>
  );
};

export default Dashboard;