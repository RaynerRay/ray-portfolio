import React from 'react';

const Objectives = () => {
  const recommendations = [
    {
      title: "Responsive Design",
      description: "Improving the app's responsiveness on smaller screens will be essential to ensuring a seamless experience for students accessing the web app from various devices.",
      priority: "High",
      icon: "📱"
    },
    {
      title: "Full CRUD Functionality for Grades",
      description: "Streamlining the grade management system by allowing users to easily update and delete entries will make the grade tracking feature more flexible and user-friendly.",
      priority: "Medium",
      icon: "📊"
    },
    {
      title: "Accessibility Enhancements",
      description: "Adding options for customizable fonts, contrast settings, and a dark mode will enhance the app's accessibility, making it more inclusive for users with specific preferences or accessibility needs.",
      priority: "High",
      icon: "♿"
    },
    {
      title: "Automation of Feedback Processing",
      description: "Automating the feedback collection process will reduce manual effort, ensuring more efficient data handling and improving the accuracy of feedback results.",
      priority: "Medium",
      icon: "🔄"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'Medium':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Low':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

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
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Comparison with Initial Objectives</h1>
        </div>
        
        {/* Achievement of Objectives */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
              <span className="text-green-400 text-lg">✓</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">Achievement of Objectives</h2>
          </div>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            The project successfully met its primary objectives by delivering a functional and user-friendly tool for session planning, grade tracking, and module information access. Core features were implemented as intended, and the application offers a significant improvement over existing student tools.
          </p>
        </div>
        
        {/* Gaps and Unmet Objectives */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <span className="text-orange-400 text-lg">⚠</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">Gaps and Unmet Objectives</h2>
          </div>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            Despite the overall success, certain features, such as responsiveness and accessibility features along with full CRUD functionalities in the grade tracking system, were not fully realised due to time and resource constraints.
          </p>
        </div>
        
        {/* Overall Success and Recommendations */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <span className="text-blue-400 text-lg">📋</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">Overall Success and Recommendations</h2>
          </div>
          
          <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
            The web application offers a significant improvement over existing student tools, particularly in the areas of session planning and grade tracking. However, several areas require further attention for future development:
          </p>
          
          {/* Recommendations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {recommendations.map((recommendation, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-5 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{recommendation.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-white font-semibold text-base">{recommendation.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(recommendation.priority)}`}>
                        {recommendation.priority}
                      </span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {recommendation.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-green-400 text-xl">✓</span>
            </div>
            <div className="text-xl font-bold text-white mb-2">Core Features</div>
            <div className="text-white/70 text-sm">Successfully Implemented</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-400 text-xl">📈</span>
            </div>
            <div className="text-xl font-bold text-white mb-2">4 Areas</div>
            <div className="text-white/70 text-sm">For Future Development</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-400 text-xl">🎯</span>
            </div>
            <div className="text-xl font-bold text-white mb-2">High Impact</div>
            <div className="text-white/70 text-sm">Student Tool Improvement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;