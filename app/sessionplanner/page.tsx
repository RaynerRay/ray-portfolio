import { AlertCircle, CheckCircle } from "lucide-react";
import ValidationSunquest from "../../components/ValidationSunquest";
import AfterThoughtsSunquest from "../../components/AfterThoughtsSunquest";
import Image from "next/image";
import Research from '../../components/sessionplanner/Research';
import Issues from '../../components/sessionplanner/Issues';
import UserStory from './../../components/sessionplanner/UserStory';
import Objectives from './../../components/sessionplanner/Objectives';
import FixedIssues from './../../components/sessionplanner/FixedIssues';

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-teal-300 bg-clip-text text-transparent">
            University Session Planer
          </h1>
          <p className="text-gray-300 text-lg mb-2">
            <strong className="text-amber-300">Mission:</strong> Develop a web application to help
            University of London BSc Computer Science students plan study
            sessions and track academic progress. It addresses the need for a
            more user-friendly tool than the current portal, offering features
            like session planning, real-time grade tracking, and access to past
            papers and notes.
          </p>
          <p className="text-gray-300 text-md mb-1">
            <strong className="text-indigo-300">Deliverables:</strong> User
            testing report, Low & High-fidelity UI, Functional prototype, Web app
          </p>
          <p className="text-gray-300 text-md">
            <strong className="text-rose-300">Role:</strong>
            UI/UX Designer & Developer 
          </p>
        </div>

        {/* <div className="relative z-10">
          <a
            href="https://www.sunquestflight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800/20 text-yellow-200 px-4 py-2 rounded-full text-center text-sm font-medium hover:bg-blue-700/20 hover:text-yellow-100"
          >
            View Live Site →
          </a>
        </div> */}
      </div>
      <div className="flex justify-center">
        <Image
          src={"/sessionplanner.png"}
          height={200}
          width={400}
          alt="screenshot"
        />
      </div>

        <Research />
        <Issues />
        <div className="max-w-7xl mx-auto border-t border-gray-200 mt-4">
        <h1 className="text-xl md:text-3xl font-bold  mb-4 text-gray-100/50 mt-8">
          Low Fidelity Sketches
          </h1>
        <div className="flex justify-center gap-2">
         
          <Image
            src={"/lofi.png"}
            height={400}
            width={800}
            alt="sketch"
            className="mt-8"
          />
          <Image
            src={"/lofi1.png"}
            height={400}
            width={800}
            alt="sketch"
            className="mt-8"
          />
        </div>

        <h1 className="text-xl md:text-3xl font-bold  mb-4 text-gray-100/50 mt-8 pt-8">
        Moving to high-fidelity prototypes
          </h1>
          <p className="text-md md:text-xl  mb-4 text-gray-100/50">As the project progressed, we iterated upon our low-fidelity designs and incorporated feedback from user surveys and testing. This phase focused on enhancing usability, refining the user interface, and ensuring that the core functionalities were ready for implementation.
</p>
        <div className="flex justify-center gap-2">
         
          <Image
            src={"/hifi.png"}
            height={400}
            width={800}
            alt="sketch"
            className="mt-8"
          />
          <Image
            src={"/hifi2.png"}
            height={400}
            width={800}
            alt="sketch"
            className="mt-8"
          />
        </div>

        </div>

        <UserStory />
        <FixedIssues />
        <Objectives />
        
      
    </div>
  );
}
