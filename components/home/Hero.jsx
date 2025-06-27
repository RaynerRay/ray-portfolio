import React from "react";
import { Figma, Globe, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className=" bg-gray-900 flex items-center justify-center p-4 md:p-2">
      <div className="relative max-w-7xl w-full">
        {/* Background decorative circles */}
        <div className="absolute top-0 left-0 w-60 h-60 md:w-80 md:h-80 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 md:w-72 md:h-72 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-teal-500 rounded-full opacity-15 blur-3xl"></div>

        {/* Main portfolio card */}
        <div className="relative bg-gray-900 backdrop-blur-sm rounded-3xl p-6 md:p-10 lg:p-12 border border-gray-700/50 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                 <span className="text-3xl font-extrabold bg-gradient-to-r from-teal-300 via-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer tracking-wider hover:scale-105 transition-transform duration-300 ease-in-out">
                 Hi! My name is<span className="font-normal"> Godfrey</span>
          </span>
                </h1>
                {/* <h2 className="text-2xl md:text-3xl font-light text-teal-400 mb-1">
                  GODFREY <span className="font-normal">NDINGINDWAYO</span>
                </h2> */}
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              I'm a UX/UI designer and Software Developer. Skilled in bridging UI/UX
                design with React front-end development, creating intuitive and
                accessible user interfaces.
              </p>
                

              <Link
  href="#case-studies"
  className="inline-flex items-center gap-2 mt-6 px-4 py-1 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full shadow-md hover:from-teal-300 hover:to-cyan-400 transition-all duration-300 text-xs md:text-base font-medium"
>
  View Case Studies →
</Link>
              </div>

            
            </div>

            {/* Right content */}
            <div className="space-y-8">
              {/* Profile image */}
              <div className="relative">
                <div className="w-60 h-60 md:w-72 md:h-72 lg:w-60 lg:h-60 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-30 blur-xl"></div>
                  <div className="relative w-full h-full bg-gray-700 rounded-full overflow-hidden border-4 border-gray-600">
                    <Image
                      src="/ray.jpeg"
                      alt="Profile photo"
                      width={400}
                      height={400}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Skills section */}
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                {/* Software Skills */}
                <div>
                  <h3 className="text-white font-semibold mb-3 text-sm tracking-wider">
                    TOOLS
                  </h3>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">
                        Xd
                      </div>
                      <div className="w-16 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                         Figma
                      </div>
                    </div>
                    {/* <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
                        Pr
                      </div>
                    </div> */}
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                        Ae
                      </div>
                      <div className="px-2 h-6 bg-purple-700 rounded flex items-center justify-center text-white text-xs font-bold">
                        Tailwind CSS
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="px-2 h-6 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                        React
                      </div>
                      <div className="px-2 h-6 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                        JavaScript
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Skills */}
                <div>
                  <h3 className="text-white font-semibold mb-3 text-sm tracking-wider">
                    CORE SKILLS
                  </h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <div>UX/UI Design & Strategy</div>
                    <div>Design Systems & Component Libraries</div>
                    <div className="flex items-center gap-2">
                      <span>Wireframing & Prototyping</span>
                      <Figma className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>User Research & Usability Testing</div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span>Mobile & Web Apps</span>
                      <div className="flex gap-1">
                        <Globe className="w-4 h-4 text-blue-400" />
                        <Smartphone className="w-4 h-4 text-green-400" />
                        <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extras */}
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm tracking-wider">
                  EXTRAS
                </h3>
                <p className="text-gray-300 text-sm">
                  Driven | Effective communicator | Decisive and accountable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
