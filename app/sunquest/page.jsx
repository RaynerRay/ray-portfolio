import { AlertCircle, CheckCircle } from "lucide-react";
import TimelineSunquest from './../../components/TimelineSuqnuest';

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
      <div className="max-w-6xl mx-auto p-6 bg-white">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Sun Quest Aviation Case Study
          </h1>
          <div className="mb-4">
      <a
            href="https://www.sqasa.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-200 text-blue-700 px-6 py-2 rounded-full font-medium my-2"
          >
            View Live Site →
          </a>
      </div>
  
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            {/* Description */}
            <div className="lg:w-2/3">
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>Sun Quest Aviation</strong> is a flight school based in Johannesburg, South Africa, offering international-standard 
                pilot training in one of the best flying climates in the world. With students from all over the globe, Sun Quest focuses 
                on providing clear, accelerated paths to professional pilot certification—from PPL to ATPL.
                <br /><br />
                This case study outlines how we restructured the digital experience to improve international access, modernise the interface, 
                and enhance the admissions journey through intuitive UX and a student-first design system.
              </p>
            </div>
  
            {/* Feature Tags */}
            <div className="lg:w-1/3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-center text-sm font-medium">
                  Aviation UX
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-center text-sm font-medium">
                  Student Journey
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-center text-sm font-medium">
                  Global Accessibility
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-center text-sm font-medium">
                  Responsive UI
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-center text-sm font-medium">
                  Onboarding Flows
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-center text-sm font-medium">
                  Application UX
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Problems and Solutions Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-8">
            {/* <div className="bg-blue-200 text-blue-700 px-4 py-2 rounded-full font-medium">
              01
            </div> */}
            <div className="bg-blue-200 text-blue-700 px-6 py-2 rounded-full font-medium">
              Problems and Solutions
            </div>
          </div>
  
          <p className="text-gray-700 text-lg mb-8 max-w-4xl">
            A modern, accessible website is essential for a global flight academy. Through focused design and development, 
            we tackled Sun Quest’s core UX challenges—improving clarity, boosting international reach, and aligning the digital 
            experience with the prestige and speed of its aviation programs.
          </p>
        </div>
  
        {/* Problems vs Solutions */}
        <div className="relative bg-white py-20 px-6 md:px-20 overflow-hidden">
          {/* Decorative Bubbles */}
          <div className="absolute top-20 left-10 w-48 h-48 bg-blue-300 rounded-full opacity-20 z-0" />
          <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-blue-400 rounded-full opacity-20 z-0" />
          <div className="absolute top-0 right-10 w-48 h-48 bg-blue-400 rounded-full opacity-20 z-0" />
          <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-400 rounded-full opacity-20 z-0" />
  
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column - Problems */}
            <div>
              <h2 className="text-red-600 text-2xl font-semibold mb-6">Problems</h2>
              {problems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-red-100 to-white p-5 rounded-xl mb-4 shadow-sm border border-red-200"
                >
                  <div className="flex items-start space-x-4">
                    <AlertCircle className="text-red-600 mt-1" />
                    <div>
                      <h3 className="text-red-600 font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Right Column - Solutions */}
            <div>
              <h2 className="text-green-600 text-2xl font-semibold mb-6">Solutions</h2>
              {solutions.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-white to-green-50 p-5 rounded-xl mb-4 shadow-sm border border-green-200"
                >
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-green-600 mt-1" />
                    <div>
                      <h3 className="text-green-600 font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <TimelineSunquest />
        </div>
      </div>
    );
  }
  