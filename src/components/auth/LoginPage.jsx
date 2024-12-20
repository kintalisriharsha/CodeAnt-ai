// src/components/auth/LoginPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AuthLayout from './AuthLayout';
import PropTypes from 'prop-types';


const LoginButton = ({ icon: Icon, text, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors ${className}`}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span className="text-sm font-medium">{text}</span>
  </button>
);

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [activeOption, setActiveOption] = useState('saas');

  const handleLogin = async (provider) => {
    try {
      // Mock user data - replace with actual authentication
      const mockUser = {
        name: 'John Doe',
        email: 'john@example.com',
        provider: provider
      };

      await login(mockUser);
      navigate('/repositories');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const GithubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );

  const BitbucketIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#2684FF" d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891zM14.52 15.53H9.522L8.17 8.466h7.561z"/>
    </svg>
  );

  const AzureIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#0078D4" d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L8.262 13.567l-3.567 8.232H0l13.23-19.1z"/>
    </svg>
  );

  const GitLabIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#FC6D26" d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.387 9.452.045 13.587a.924.924 0 00.331 1.03L12 23.054l11.624-8.437a.924.924 0 00.331-1.03"/>
    </svg>
  );

  return (
    <AuthLayout>
      <div className="space-y-6">
        {/* Plan Selection */}
        <div className="flex rounded-lg border border-gray-200 p-1 gap-1">
          <button
            onClick={() => setActiveOption('saas')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
              activeOption === 'saas'
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            SAAS
          </button>
          <button
            onClick={() => setActiveOption('self-hosted')}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
              activeOption === 'self-hosted'
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Self Hosted
          </button>
        </div>

        {/* Login Options */}
        <div className="space-y-3">
          <LoginButton
            icon={GithubIcon}
            text="Sign in with GitHub"
            onClick={() => handleLogin('github')}
          />
          <LoginButton
            icon={BitbucketIcon}
            text="Sign in with Bitbucket"
            onClick={() => handleLogin('bitbucket')}
          />
          <LoginButton
            icon={AzureIcon}
            text="Sign in with Azure DevOps"
            onClick={() => handleLogin('azure')}
          />
          <LoginButton
            icon={GitLabIcon}
            text="Sign in with GitLab"
            onClick={() => handleLogin('gitlab')}
          />
        </div>

        {/* Privacy Policy */}
        <p className="text-xs text-center text-gray-500">
          By signing up you agree to the{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

LoginButton.propTypes = {
  icon: PropTypes.func,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default LoginPage;