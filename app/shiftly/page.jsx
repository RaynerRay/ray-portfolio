import ProductTimeline from "../../components/Timeline";
import { CheckCircle, AlertCircle } from "lucide-react";
import Approach from "./Approach";
import ImageSection from "./Image";


const problems = [
  {
    title: "Confusing Onboarding",
    desc: "First-time users struggled to create profiles and set up availability due to unclear flows and overwhelming options.",
  },
  {
    title: "Poor Shift Visibility",
    desc: "Healthcare clients found it difficult to view and filter shifts that matched their availability and qualifications.",
  },
  {
    title: "Inefficient Matching Logic",
    desc: "Providers often received irrelevant or delayed candidate suggestions due to lack of real-time data integration.",
  },
  {
    title: "Low Engagement on Mobile",
    desc: "The mobile experience lacked optimization, leading to low engagement from professionals using phones on the go.",
  },
];

const solutions = [
  {
    title: "Simplified Onboarding",
    desc: "Streamlined account creation and setup process with progress indicators, reducing user drop-off and setup time by 60%.",
  },
  {
    title: "Enhanced Shift Discovery",
    desc: "Introduced advanced filters and live availability toggles, enabling professionals to find matching shifts effortlessly.",
  },
  {
    title: "Real-time Smart Matching",
    desc: "Rebuilt the matching logic using advanced filters to ensure highly relevant results for providers.",
  },
  {
    title: "Mobile-first Design Overhaul",
    desc: "Redesigned mobile interface with responsive components, swipe actions, and real-time notifications to drive real-time engagement.",
  },
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="mb-12">
      
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Shiftly Case Study
          </h1>
          
      <div className="mb-4">
      <a
            href="https://www.shiftly.uk"
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
              <strong>Shiftly</strong> is a healthcare staffing platform
              revolutionising how shifts are filled across the UK. It bridges
              the gap between care providers and verified healthcare
              professionals with instant, real-time connections. This case study
              highlights the design and UX improvements that transformed Shiftly
              into a seamless, trusted, and efficient solution for both
              healthcare facilities and professionals.
            </p>
          </div>

          {/* Feature Tags */}
          <div className="lg:w-1/3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-center text-sm font-medium">
                Real-Time Matching
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-center text-sm font-medium">
                Mobile-first Design
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-center text-sm font-medium">
                Intuitive UI
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-center text-sm font-medium">
                Healthcare UX
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-center text-sm font-medium">
                Seamless Onboarding
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-center text-sm font-medium">
                Shift Discovery
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problems and Solutions Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-8">
          {/* <div className="bg-purple-200 text-purple-700 px-4 py-2 rounded-full font-medium">
            01
          </div> */}
          <div className="bg-purple-200 text-purple-700 px-6 py-2 rounded-full font-medium">
            Problems and Solutions
          </div>
        </div>

        <p className="text-gray-700 text-lg mb-8 max-w-4xl">
          With a human-centred design approach, we tackled critical usability
          issues in the Shiftly experience—focusing on faster shift fulfillment,
          better navigation, and improved mobile performance. These changes
          directly enhanced <strong>engagement</strong>,
          <strong>efficiency</strong>, and <strong>user trust</strong> across
          the platform.
        </p>
      </div>

      {/* Problems vs Solutions */}
      <div className="relative bg-white py-20 px-6 md:px-20 overflow-hidden">
        {/* Decorative Bubbles */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-purple-300 rounded-full opacity-20 z-0" />
        <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-blue-400 rounded-full opacity-20 z-0" />
        <div className="absolute top-0 right-10 w-48 h-48 bg-blue-400 rounded-full opacity-20 z-0" />
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-purple-400 rounded-full opacity-20 z-0" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column - Problems */}
          <div>
            <h2 className="text-red-600 text-2xl font-semibold mb-6">
              Problems
            </h2>
            {problems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-red-100 to-white p-5 rounded-xl mb-4 shadow-sm border border-red-200"
              >
                <div className="flex items-start space-x-4">
                  <AlertCircle className="text-red-600 mt-1" />
                  <div>
                    <h3 className="text-red-600 font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Solutions */}
          <div>
            <h2 className="text-green-600 text-2xl font-semibold mb-6">
              Solutions
            </h2>
            {solutions.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white to-green-50 p-5 rounded-xl mb-4 shadow-sm border border-green-200"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-green-600 mt-1" />
                  <div>
                    <h3 className="text-green-600 font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ProductTimeline />
        <Approach />
        {/* <ImageSection /> */}
      </div>
    </div>
  );
}
