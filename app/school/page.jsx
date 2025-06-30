
import { CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import ApproachSchool from "../../components/ApproachSchool";
import UserTestingSchool from "../../components/UsertestingSchool";
import ValidationSchool from "../../components/ValidationSchool";
import AfterThoughtsSchool from "../../components/AfterThoughtsSchool";

const problems = [
    {
      title: "Navigation and Usability",
      desc: "Staff members initially found the platform difficult to navigate and unintuitive. Common tasks such as accessing the dashboard, managing pupil records, or locating timetables were not easily discoverable. The experience was particularly challenging for those with limited digital literacy.",
    },
    {
      title: "Staff and Pupil Profile Management",
      desc: "Users were unclear on how to create or update profiles for staff, students, or guardians. Inconsistencies in form layouts and missing guidance led to incomplete records and administrative errors.",
    },
    {
      title: "Filter and Search Confusion",
      desc: "The filtering system lacked clarity, with vague terminology and little explanation. Teachers and admin users struggled to filter students by year, subject, or attendance status effectively.",
    },
    {
      title: "Assessment and Report Entry",
      desc: "The process for entering assessment data and generating reports was seen as tedious and error-prone. Unclear terminology, multiple clicks, and lack of autosave functionality contributed to user frustration.",
    },
    {
      title: "User Confidence and Engagement",
      desc: "Early versions of the system lacked the visual polish and trustworthiness needed for users to fully adopt it. Some users hesitated to use it consistently or recommend it to colleagues, citing unreliability and poor user experience.",
    },
  ];
  

  const solutions = [
    {
      title: "Improved Navigation and Onboarding",
      desc: "The interface was redesigned with clarity in mind. We surfaced common tasks such as taking attendance, sending messages, and accessing timetables. A simplified menu structure and guided onboarding helped staff become comfortable with the system more quickly.",
    },
    {
      title: "Streamlined Profile Management",
      desc: "We introduced a guided form builder for staff and student profiles, with contextual tooltips and validation. The new design ensures essential data is captured correctly, while bulk editing options help administrators save time.",
    },
    {
      title: "Clear and Contextual Filtering",
      desc: "Filter options were rewritten using plain language and organised into logical groups. Icons and real-time feedback were added to show results immediately. A short guide was provided for new users encountering filters for the first time.",
    },
    {
      title: "Optimised Assessment Workflow",
      desc: "The assessment module was refined to allow inline editing, auto-saving, and clearer section headers. A simplified three-step process now allows teachers to enter grades, add comments, and generate reports with fewer errors and delays.",
    },
    {
      title: "Enhanced Trust and Adoption",
      desc: "The platform was polished visually and functionally to build confidence. Key actions include success confirmations, contextual help, and responsive support. Regular in-app feedback prompts help ensure the platform evolves in line with users’ expectations.",
    },
  ];
  

export default function Page() {
  return (
    <div className="bg-gray-900 ">
      <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm text-white max-w-7xl mx-auto p-6 md:p-12 rounded-lg">
        <div
          className="absolute inset-0 bg-gray-800 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23374151' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
          }}
        ></div>

        <div className="mb-4">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4 bg-gradient-to-r from-teal-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Smart School
          </h1>
          <p className="text-gray-300 text-lg mb-2">
            <strong className="text-emerald-300">Challenge:</strong> Develop a
            comprehensive school management system to streamline administrative
            tasks, improve communication, and enhance student performance
            tracking.
          </p>
          <p className="text-gray-300 text-md mb-1">
            <strong className="text-indigo-300">Deliverables:</strong> User
            testing report, Information architecture, Wireframes, High-fidelity
            UI, Functional prototype, React-based dashboard
          </p>
          <p className="text-gray-300 text-md">
            <strong className="text-fuchsia-400">Role:</strong> Product
            Designer & Full-Stack Developer
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src={"/smartschool-phone.png"}
          height={200}
          width={200}
          alt="screenshot"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <ApproachSchool />
        <UserTestingSchool />
        {/* <ProductTimeline /> */}
        {/* Problems vs Solutions */}
        <div className="relative bg-gradient-to-br from-gray-900 to-slate-500/20 backdrop-blur-sm py-20 px-6 md:px-20 overflow-hidden rounded-xl">
      {/* Decorative Bubbles */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-fuchsia-500 rounded-full opacity-20 z-0" />
      <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-emerald-500 rounded-full opacity-20 z-0" />
      <div className="absolute top-0 right-10 w-48 h-48 bg-blue-500 rounded-full opacity-20 z-0" />
      <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-indigo-500 rounded-full opacity-20 z-0" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Problems */}
        <div>
          <h2 className="text-red-400 text-2xl font-semibold mb-6">Challenges</h2>
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-red-900/30 to-transparent p-5 rounded-xl mb-4 shadow-sm border border-red-600/30"
            >
              <div className="flex items-start space-x-4">
                <AlertCircle className="text-red-400 mt-1" />
                <div>
                  <h3 className="text-red-300 font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div>
          <h2 className="text-green-400 text-2xl font-semibold mb-6">Solutions</h2>
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-green-800/20 to-transparent p-5 rounded-xl mb-4 shadow-sm border border-green-400/30"
            >
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-400 mt-1" />
                <div>
                  <h3 className="text-green-300 font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

        <ValidationSchool />
        <AfterThoughtsSchool />
      </div>
    </div>
  );
}
