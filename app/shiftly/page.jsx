import ProductTimeline from "../../components/Timeline";
import { CheckCircle, AlertCircle } from "lucide-react";
import Approach from "./Approach";
import ImageSection from "./Image";
import UserTesting from "../../components/UserTesting";
import Validation from "../../components/Validation";
import AfterThoughts from "../../components/AfterThoughts";
import Image from "next/image";
import Link from "next/link";

const problems = [
  {
    title: "Navigation and Ease of Use",
    desc: "Users initially found the platform difficult to navigate and not intuitive. Many struggled to locate core functions such as the dashboard, profile setup, and availability calendar. The experience felt disjointed, especially for users unfamiliar with digital platforms."
  },
  {
    title: "Profile Setup and Availability",
    desc: "Several users were unclear on how to create professional profiles or indicate when they were available for shifts. This led to frustration and limited engagement with key features of the platform."
  },
  {
    title: "Understanding Filters",
    desc: "The filter system was found to be confusing, with ambiguous labels and insufficient guidance. Users were unsure how to refine search results to match their needs, leading to inefficient use of the platform."
  },
  {
    title: "Booking Process",
    desc: "The booking process was perceived as overly complicated. Users hesitated to complete bookings due to uncertainty about next steps, unclear language, and a lack of confirmation feedback."
  },
  {
    title: "User Advocacy",
    desc: "In its early stages, the platform lacked the level of polish and trust needed for users to confidently recommend it to peers. Concerns around usability and clarity prevented it from being seen as a dependable tool for healthcare professionals."
  }
];


const solutions = [
  {
    title: "Streamlined User Experience",
    desc: "We restructured the interface to prioritise clarity and simplicity. Key actions—such as finding shifts, messaging providers, and managing schedules—were surfaced prominently. A redesigned navigation bar, with guided onboarding, helped new users feel confident navigating the platform."
  },
  {
    title: "Improved Profile and Availability Setup",
    desc: "We implemented a step-by-step profile wizard, complete with tooltips and visual indicators to help users set up their profiles with ease. Availability can now be set using a simple calendar view, with colour-coded shifts for quick reference."
  },
  {
    title: "Refined Filtering System",
    desc: "Filters were redesigned with clearer language, icons, and grouping. We added real-time feedback, so users could immediately see how their filters affected search results. A short explainer was added to introduce new users to the feature."
  },
  {
    title: "Simplified Booking Flow",
    desc: "The entire booking journey was reduced to three clear steps: select, confirm, and message. Language was rewritten for clarity, animations were introduced for feedback, and a progress bar was added to show users how far along they were in the process."
  },
  {
    title: "Increased Trust and Advocacy",
    desc: "Through visual polish, usability improvements, and active support channels, we significantly increased user satisfaction. A success banner now thanks users after bookings, and regular feedback prompts help us stay attuned to their needs—leading to a platform users are proud to recommend."
  }
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
            Shiftly UK
          </h1>
          <p className="text-gray-300 text-lg mb-2">
            <strong className="text-emerald-300">Challenge:</strong> Build a
            dynamic staffing platform that connects healthcare providers with
            qualified healthcare workers in real time.
          </p>
          <p className="text-gray-300 text-md mb-1">
            <strong className="text-indigo-300 ">Deliverables:</strong> User
            testing report, Affinity map, Wireframe, UI, Prototype, React UI
          </p>
          <p className="text-gray-300 text-md">
            <strong className="text-fuchsia-400">Role:</strong> Researcher, Designer, Developer
             
          </p>
        </div>

        <div className="relative z-10">
          <a
            href="https://www.shiftly.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800/20 text-blue-200 px-4 py-2 rounded-full text-center text-sm font-medium hover:bg-blue-700/20 hover:text-yellow-100"
          >
            View Live Site →
          </a>
        </div>
      </div>
    
      <div className="flex justify-center">
    
        <Image src={"/no-bg-shiftly.png"} height={200} width={200} alt="screenshot" />
      </div>

      <div className="max-w-7xl mx-auto">

        <Approach />
        <div className="flex justify-center border-t border-gray-200 mt-4">
        <h1 className="text-xl md:text-3xl font-bold  mb-4 text-gray-100/50 mt-8">
      Sketching early on to spark ideas.
          </h1>
        <Image src={"/shiftlywireframe.png"} height={400} width={800} alt="sketch" className="mt-8" />
      </div>
        <UserTesting />
        <ProductTimeline />
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
        <Validation/>
        <AfterThoughts />

       
      </div>
    </div>
  );
}
