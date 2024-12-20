// src/pages/GuidePage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Play, Book, Tool, Code } from 'lucide-react';

const GuidePage = () => {
  const guides = [
    {
      title: "Getting Started",
      icon: Play,
      description: "Learn the basics of CodeAnt AI",
      steps: [
        "Create your account",
        "Connect your first repository",
        "Run your first code review"
      ]
    },
    {
      title: "Advanced Features",
      icon: Tool,
      description: "Master advanced CodeAnt AI features",
      steps: [
        "Custom review rules",
        "Team collaboration",
        "CI/CD integration"
      ]
    },
    {
      title: "Best Practices",
      icon: Book,
      description: "Learn best practices for code reviews",
      steps: [
        "Writing effective comments",
        "Review workflow",
        "Team coordination"
      ]
    },
    {
      title: "API Integration",
      icon: Code,
      description: "Integrate CodeAnt AI into your workflow",
      steps: [
        "API setup",
        "Authentication",
        "Webhooks configuration"
      ]
    }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Guide</h1>
        <p className="text-gray-600">Learn how to use CodeAnt AI effectively</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <guide.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{guide.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                <div className="space-y-3">
                  {guide.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                        {stepIndex + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Help Section */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">Need Help?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Can&apos;t find what you&apos;re looking for? Our support team is here to help.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default GuidePage;