import React from 'react';

const AfterThoughtsSchool = () => {
  const suggestions = [
    "Introduce short testimonial videos or written quotes from teachers and administrators to build trust and highlight real-world benefits.",
    "Add subtle visual feedback during data entry (e.g. saving reports, taking attendance) to reassure staff their actions are being recorded.",
    "Provide clearer detail in search results, such as student support status, lesson notes, or timetable conflicts, to support quick decision-making.",
    "Enable uploads of supporting documents (e.g. medical records, academic plans) for secure, centralised pupil profiles.",
    "Offer transparent guidance on data privacy, safeguarding measures, and support contact channels to reassure parents and staff alike."
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-8 relative overflow-hidden">
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
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">Reflections & Future Suggestions</h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Following the redesign of the school management system, we significantly improved ease of navigation, mobile accessibility, and overall system clarity. Looking ahead, here are a few recommendations to further enhance the experience:
          </p>
        </div>

        {/* Suggestions List */}
        <div className="space-y-6">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex gap-4">
                {/* Bullet point */}
                <div className="flex-shrink-0 mt-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                </div>

                {/* Suggestion text */}
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {suggestion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfterThoughtsSchool;
