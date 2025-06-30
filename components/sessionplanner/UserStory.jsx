import React from 'react';

const UserStory = () => {
  const acceptanceCriteria = [
    "The system determines remaining modules and queries the user on how much time they can commit and how many modules they would like to take.",
    "Upon submission, the system processes the input and generates a suggested semester.",
    "The suggested semester is displayed as an editable upcoming semester within the main page.",
    "The user can edit the suggested semester directly on the page, with options to keep, modify, or reroll the suggestions.",
    "Changes made by the user are saved."
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-8 relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 bg-gray-800 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23374151' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`
        }}
      ></div>
      
      {/* Background decorative circles */}
      <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">1. Develop user stories</h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            The following is one of the generated user stories for the Session Planning Feature, and how it progressed into an implemented part of the system.
          </p>
        </div>
        
        {/* User Story Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden mb-8">
          {/* User Story Header */}
          <div className="bg-indigo-600/80 backdrop-blur-sm p-6">
            <h2 className="text-white font-bold text-xl mb-2">User story: Automated semester planning</h2>
          </div>
          
          {/* User Story Content */}
          <div className="p-6 space-y-6">
            {/* Story Components */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                <span className="text-cyan-400 font-semibold text-sm sm:text-base min-w-fit">As a</span>
                <span className="text-white/90 italic text-sm sm:text-base">registered user</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                <span className="text-cyan-400 font-semibold text-sm sm:text-base min-w-fit">I want</span>
                <span className="text-white/90 italic text-sm sm:text-base">the system to suggest a semester to me based on my requirements</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                <span className="text-cyan-400 font-semibold text-sm sm:text-base min-w-fit">So that</span>
                <span className="text-white/90 italic text-sm sm:text-base">I can plan my semesters quickly.</span>
              </div>
            </div>
            
            {/* Divider */}
            <div className="border-t border-white/10"></div>
            
            {/* Acceptance Criteria */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Acceptance criteria</h3>
              <div className="space-y-3">
                {acceptanceCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-white/60 mt-2 flex-shrink-0"></div>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      {criteria}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Automated Planning</h3>
            <p className="text-white/70 text-sm">System generates intelligent semester suggestions based on user requirements</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-green-400 rounded-full"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Editable Interface</h3>
            <p className="text-white/70 text-sm">Users can modify, keep, or regenerate suggestions directly on the page</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-full"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Persistent Changes</h3>
            <p className="text-white/70 text-sm">All user modifications are automatically saved for future reference</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStory;