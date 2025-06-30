import React from 'react';

const Issues = () => {
  const issuesData = [
    {
      issue: "Difficulty in organising study schedules",
      responses: 12,
      percentage: "86%"
    },
    {
      issue: "Tracking academic progress and grades",
      responses: 10,
      percentage: "71%"
    },
    {
      issue: "Easy access to module information such as syllabi, past exams, and student notes",
      responses: 14,
      percentage: "100%"
    },
    {
      issue: "Module rankings, based on difficulty, time required, self-study required, module quality, amount learned, and interest, with visualisation of these rankings",
      responses: 14,
      percentage: "100%"
    },
    {
      issue: "Understanding RPL options",
      responses: 14,
      percentage: "100%"
    },
    {
      issue: "Identifying prerequisite modules and progression blockers",
      responses: 10,
      percentage: "71%"
    },
    {
      issue: "Providing feedback on modules",
      responses: 6,
      percentage: "43%"
    },
    {
      issue: "Support times for simple queries",
      responses: 14,
      percentage: "100%"
    }
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
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Issues with the current UoL portal</h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            We also asked users about the challenges they face with the current UoL portal. The results were as follows:
          </p>
        </div>
        
        {/* Table Container */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-indigo-600/80 backdrop-blur-sm">
                  <th className="text-left py-4 px-6 text-white font-semibold text-lg">Issue</th>
                  <th className="text-center py-4 px-6 text-white font-semibold text-lg">Responses (n = 14)</th>
                  <th className="text-center py-4 px-6 text-white font-semibold text-lg">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {issuesData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-white/10 hover:bg-white/5 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'
                    }`}
                  >
                    <td className="py-4 px-6 text-white/90 text-sm leading-relaxed">
                      {row.issue}
                    </td>
                    <td className="py-4 px-6 text-center text-white font-medium text-lg">
                      {row.responses}
                    </td>
                    <td className="py-4 px-6 text-center text-white font-medium text-lg">
                      {row.percentage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mobile Cards */}
          <div className="md:hidden space-y-4 p-4">
            <div className="bg-indigo-600/80 backdrop-blur-sm rounded-lg p-4 mb-6">
              <h3 className="text-white font-semibold text-lg text-center">Survey Results (n = 14)</h3>
            </div>
            {issuesData.map((row, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <div className="mb-3">
                  <h4 className="text-white/90 text-sm font-medium leading-relaxed">
                    {row.issue}
                  </h4>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <p className="text-white/70 text-xs mb-1">Responses</p>
                    <p className="text-white font-medium text-lg">{row.responses}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/70 text-xs mb-1">Percentage</p>
                    <p className="text-white font-medium text-lg">{row.percentage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="text-2xl font-bold text-white mb-2">14</div>
            <div className="text-white/70 text-sm">Total Respondents</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="text-2xl font-bold text-white mb-2">8</div>
            <div className="text-white/70 text-sm">Key Issues Identified</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="text-2xl font-bold text-white mb-2">79%</div>
            <div className="text-white/70 text-sm">Average Response Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issues;