import React from 'react';
import { User } from 'lucide-react';

const UserTestingSchool = () => {
  const testingData = [
    {
      score: "6/10",
      filledUsers: 6,
      description: "Found the system intuitive and easy to navigate."
    },
    {
      score: "4/10",
      filledUsers: 4,
      description: "Understood how to set up profiles and assign timetables."
    },
    {
      score: "5/10",
      filledUsers: 5,
      description: "Were able to use the filters to find students or classes."
    },
    {
      score: "6/10",
      filledUsers: 6,
      description: "Found the attendance tracking straightforward to manage."
    },
    {
      score: "5/10",
      filledUsers: 5,
      description: "Would recommend the system to other school administrators or educators."
    }
  ];

  const UserIcon = ({ filled }) => (
    <User
      className={`w-6 h-6 sm:w-8 sm:h-8 ${filled ? 'text-cyan-400 fill-cyan-400' : 'text-cyan-400/30'}`}
    />
  );

  return (
    <div className="bg-gray-900 p-4 sm:p-8 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-gray-800 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23374151' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`
        }}>
      </div>

      {/* Background decorative circles */}
      <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">User Testing</h1>
          <p className="text-white/70 text-base sm:text-lg">
            Usability testing was carried out with 5 students & 5 school staff members  to explore:
          </p>
          <ul className="mt-4 space-y-2 text-white/70 text-sm sm:text-base">
            <li>• What key challenges staff face when using existing school systems?</li>
            <li>• Which features are essential for daily school operations?</li>
            <li>• How can we improve clarity and reduce confusion across interfaces?</li>
            <li>• What builds trust and satisfaction for administrative users?</li>
          </ul>
        </div>

        {/* Synthesis & Analysis Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Synthesis & Analysis</h2>
          <p className="text-white/70 text-base sm:text-lg">
            Throughout synthesis, several recurring usability concerns were identified across
            user groups — from navigation complexity to unclear form structures.
          </p>
        </div>

        {/* Testing Results */}
        <div className="space-y-4 sm:space-y-6">
          {testingData.map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-centre gap-4 sm:gap-8">
                {/* User Icons */}
                <div className="flex gap-1 sm:gap-2 justify-centre sm:justify-start">
                  {[...Array(10)].map((_, userIndex) => (
                    <UserIcon key={userIndex} filled={userIndex < item.filledUsers} />
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-centre gap-3 sm:gap-8">
                  {/* Score */}
                  <div className="text-2xl sm:text-4xl font-bold text-white text-centre sm:text-left sm:min-w-[80px]">
                    {item.score}
                  </div>

                  {/* Description */}
                  <div className="text-white/90 text-sm sm:text-lg text-centre sm:text-left sm:flex-1">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTestingSchool;
