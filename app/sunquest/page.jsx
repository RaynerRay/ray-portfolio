import { AlertCircle, CheckCircle } from "lucide-react";
import TimelineSunquest from "./../../components/TimelineSuqnuest";
import ApproachSunquest from "../../components/ApproachSunquest";
import UserTestingSunquest from "../../components/UserTestingSunquest";
import ValidationSunquest from "../../components/ValidationSunquest";
import AfterThoughtsSunquest from "../../components/AfterThoughtsSunquest";
import Image from "next/image";

const problems = [
  {
    title: "Unclear Course Structure",
    desc: "Prospective students found it difficult to understand the licensing paths, durations, and prerequisites for each pilot training program.",
  },
  {
    title: "Poor International Appeal",
    desc: "The website lacked key information for international students such as visa support, accommodation, and currency conversions.",
  },
  {
    title: "Outdated Visual Experience",
    desc: "The user interface felt dated, unresponsive on mobile, and failed to reflect the high-tech nature of aviation training.",
  },
  {
    title: "Lack of Application Guidance",
    desc: "No clear step-by-step application flow led to user drop-offs and excessive inquiries from confused applicants.",
  },
];

const solutions = [
  {
    title: "Course Path Visualisation",
    desc: "Designed a clear licensing roadmap and comparison chart that guides users through PPL, CPL, and ATPL training paths at a glance.",
  },
  {
    title: "International Student Hub",
    desc: "Added dedicated sections for global students, including visa help, local housing info, FAQs, and flight hour equivalency charts.",
  },
  {
    title: "Modern, Mobile-First Redesign",
    desc: "Rebuilt the entire interface using responsive, aviation-themed UI elements and high-resolution imagery to reflect quality training.",
  },
  {
    title: "Guided Application Experience",
    desc: "Created a progressive form flow with status tracking, file upload, and real-time guidance to simplify and speed up enrolment.",
  },
];

export default function Page() {
  return (
    <div className="bg-gray-900">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto p-6  bg-gradient-to-br from-gray-800/20 to-gray-950/20 backdrop-blur-sm text-white max-w-7xl mx-auto p-6 md:p-12 rounded-lg relative">
        <div
          className="absolute inset-0 bg-gray-800 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23374151' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
          }}
        ></div>

        <div className="mb-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
            Sunquest Flight Academy 
          </h1>
          <p className="text-gray-300 text-lg mb-2">
            <strong className="text-amber-300">Mission:</strong> Modernise the existing website.
          </p>
          <p className="text-gray-300 text-md mb-1">
            <strong className="text-indigo-300">Deliverables:</strong> User
            testing report, High-fidelity
            UI, Functional prototype, Website
          </p>
          <p className="text-gray-300 text-md">
            <strong className="text-rose-300">Role:</strong>
            Designer/Developer — Website, UI/UX
          </p>
        </div>

        <div className="relative z-10">
          <a
            href="https://www.sunquestflight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800/20 text-yellow-200 px-4 py-2 rounded-full text-center text-sm font-medium hover:bg-blue-700/20 hover:text-yellow-100"
          >
            View Live Site →
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={"/no-bg-sqasa.png"} height={200} width={200} alt="screenshot" />
      </div>

<ApproachSunquest />
<UserTestingSunquest />

      {/* Problems vs Solutions */}
      <div className="max-w-7xl mx-auto relative bg-gradient-to-br from-gray-900 to-slate-500/20 backdrop-blur-sm py-20 px-6 md:px-20 overflow-hidden rounded-xl">
        {/* Decorative Bubbles */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-fuchsia-500 rounded-full opacity-20 z-0" />
        <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-emerald-500 rounded-full opacity-20 z-0" />
        <div className="absolute top-0 right-10 w-48 h-48 bg-blue-500 rounded-full opacity-20 z-0" />
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-indigo-500 rounded-full opacity-20 z-0" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Problems */}
          <div>
            <h2 className="text-red-400 text-2xl font-semibold mb-6">
              Problems
            </h2>
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
            <h2 className="text-green-400 text-2xl font-semibold mb-6">
              Solutions
            </h2>
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
      <ValidationSunquest />
      <AfterThoughtsSunquest />
    </div>
  );
}
