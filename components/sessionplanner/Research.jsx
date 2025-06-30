import React from 'react';

const Research = () => {
  const contentSections = [
    {
      title: "Early ideation",
      text: `
During our brainstorming session, team members first generated ideas individually, encouraging diverse perspectives. These ideas were then collected and refined collaboratively using Google Docs.

We discussed each idea in detail, evaluating its feasibility, potential impact, and alignment with our project goals. This process allowed us to refine and prioritise the most promising ideas:
• User authentication: Develop a secure login and registration system for UoL Computer Science students.
• Module information access: Provide students with access to syllabi, past exams, notes, and resources for easier preparation and study.
• Session planning: Enable students to organise their semester schedules using a visual timeline to manage study sessions and deadlines.
• Module ranking and metrics visualisation: Create visualisations based on student feedback on factors like difficulty and time required to help students choose modules.
• Recognition of Prior Learning (RPL): Highlight modules eligible for RPL and provide guidance on equivalent courses.
• Progression blockers identification: Identify prerequisite modules and those that may delay academic progress, helping students avoid scheduling issues.
• Grade/Progression tracking: Allow students to input and track their grades, providing calculated averages and projected final scores.
• Student feedback system: Create a space for students to rate and review completed modules to improve future offerings.
• Mobile application development: Expand the application to mobile platforms.
• Integration with LMS: Integrate with external learning systems such as Moodle and UoL’s portal.
• Support for non-UoL students: Offer the application to students from other universities.
• Trained LLM chatbot: Develop a chatbot that assists with module selection, academic policies, and common student queries.

With a refined list of features, we moved on to user research to validate and align our functionalities with user needs.
      `
    },
    {
      title: "User Research",
      text: `
Our next step was to conduct user research to validate our ideas and gain insights into the needs and preferences of a broader audience within the University of London (UoL) Computer Science student community. To gather this feedback, we distributed online surveys, reaching a larger number of students and collecting quantitative data to inform our design decisions.

Key Features of Interest:
The survey asked respondents which features they would find most useful to enhance their study experience. Features such as student feedback systems and user authentication were excluded from this question as they are integral parts of updating module rankings and ensuring a personalised experience.
      `
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
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">Research</h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Our research journey combined brainstorming, collaboration, and user feedback to shape a student-focused web app.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {contentSections.map((section, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{section.title}</h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {section.text.trim()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
