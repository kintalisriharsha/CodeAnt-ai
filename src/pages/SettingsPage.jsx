// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { User, Bell, Shield, Palette, Globe } from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  const settingSections = {
    profile: [
      { name: "Full Name", value: "John Doe", type: "text" },
      { name: "Email", value: "john@example.com", type: "email" },
      { name: "Company", value: "CodeAnt Inc", type: "text" }
    ],
    notifications: [
      { name: "Email Notifications", value: true, type: "toggle" },
      { name: "Push Notifications", value: false, type: "toggle" },
      { name: "Weekly Digest", value: true, type: "toggle" }
    ],
    security: [
      { name: "Two-Factor Authentication", value: "Enabled", type: "status" },
      { name: "Password", value: "Last changed 2 months ago", type: "action" },
      { name: "Active Sessions", value: "3 devices", type: "info" }
    ]
  };

  const tabs = [
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'security', icon: Shield, label: 'Security' },
    { id: 'appearance', icon: Palette, label: 'Appearance' },
    { id: 'language', icon: Globe, label: 'Language' }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>
      
      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
              activeTab === tab.id 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <tab.icon size={18} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Settings Content */}
      <div className="space-y-6">
        {settingSections[activeTab]?.map((setting, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
            <div>
              <h3 className="font-medium">{setting.name}</h3>
              <p className="text-sm text-gray-500">{setting.value}</p>
            </div>
            {setting.type === 'toggle' && (
              <button 
                className={`w-11 h-6 rounded-full transition-colors ${
                  setting.value ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`block w-4 h-4 ml-1 rounded-full bg-white transform transition-transform ${
                  setting.value ? 'translate-x-5' : ''
                }`} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;