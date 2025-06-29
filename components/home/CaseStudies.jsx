import { BookOpen} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden" id="case-studies">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Background decorative circles */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700 rounded-full opacity-25 blur-3xl"></div>

      <div className="relative z-10 py-16 px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl text-white font-light">
            <span className="font-medium">Case</span>
            <span className="text-gray-400"> Studies</span>
          </h1>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Mobile header */}
          <div className="block lg:hidden mb-4">
            <h2 className="text-xl font-bold text-blue-400 text-center">
              OVERVIEW
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Vertical OVERVIEW text - desktop only */}
            <div className="hidden lg:flex flex-shrink-0 ">
              <div className="h-full flex items-center">
                <h2 className="text-4xl lg:text-6xl font-bold text-blue-400 transform -rotate-90 whitespace-nowrap origin-center translate-y-32">
                  OVERVIEW
                </h2>
              </div>
            </div>

            {/* Cards grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Card 02 - WMS app */}
              <Link href={"/shiftly"}>
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Mobile & Web App
                  </span>
                </div>

                {/* Person with phone and dashboard */}
                <div className="mt-12 mb-6 relative">
                  {/* <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="text-gray-800 font-semibold text-sm">Nurse Dashboard</div>
                        <div className="w-6 h-6 bg-blue-500 rounded"></div>
                      </div>
                      <div className="h-8 bg-blue-100 rounded flex items-center px-2">
                        <div className="text-blue-800 font-bold text-xs">R15,493</div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-200 rounded"></div>
                        <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div> */}

                  {/* Person figure */}
                  {/* <div className="absolute -right-2 -bottom-2 w-16 h-20 bg-green-600 rounded-t-full">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-200 rounded-full"></div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-800 rounded-full"></div>
                    <div className="absolute top-2 -right-2 w-4 h-6 bg-gray-900 rounded border border-gray-600"></div>
                  </div> */}

                  
                    <Image
                      src="/shiftlyD.png"
                      alt="website screenshot"
                      width={400}
                      height={400}
                      className="rounded-xl"
                    />
                
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-bold text-gray-600">01</span>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        Shiftly UK
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Marketplace for Healthcare workers
                      </p>
                      <p className="text-gray-500 text-xs flex py-2">
                        <BookOpen className="h-4 w-4 mr-1" /> : 15 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>

              {/* Card 02 - SmartSchool */}
              <Link href={"/school"}>
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    Desktop & Web app
                  </span>
                </div>

                
                <div className="mt-12 mb-6 relative">
                  

                  
                  <Image
                      src="/smartschool-desktop.png"
                      alt="website screenshot"
                      width={400}
                      height={400}
                      className="rounded-xl"
                    />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-bold text-gray-600">02</span>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        SmartSchool
                      </h3>
                      <p className="text-gray-400 text-xs flex py-2">
                        School Management System
                      </p>
                      <p className="text-gray-500 text-xs flex py-2">
                        <BookOpen className="h-4 w-4 mr-1" /> : 10 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>

              {/* Card 03 - Sunquest */}
              <Link href={"/sunquest"}>
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-gray-700/50 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Website
                  </span>
                </div>

                {/* Mock interface */}
                <div className="mt-12 mb-6">
                  {/* <div className="bg-gray-900 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-blue-500 rounded w-1/3"></div>
                      <div className="h-2 bg-purple-500 rounded w-1/4"></div>
                      <div className="h-2 bg-green-500 rounded w-1/2"></div>
                    </div>
                    <div className="bg-gray-800 rounded p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                
                        </div>
                        <div className="w-16 h-2 bg-gray-700 rounded-full">
                          <div className="w-3/4 h-full bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                 
                    <Image
                      src="/sunquestD.png"
                      alt="Person holding phone"
                      width={400}
                      height={400}
                      className="rounded-xl"
                    />
                 
                </div>

                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <span className="text-4xl lg:text-6xl font-bold text-gray-600">
                      03
                    </span>
                    <div>
                      <h3 className="text-white font-semibold text-base lg:text-lg">
                        Sunquest Aviation
                      </h3>
                      <p className="text-gray-400 text-xs lg:text-sm">
                        Aviation School Website
                      </p>
                      <p className="text-gray-500 text-xs flex py-2">
                        <BookOpen className="h-4 w-4 mr-1" /> : 10 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>

              

              {/* Card 04 - Fulfillment Hub USA */}
              {/* <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Website Design
                  </span>
                </div>

               
                <div className="mt-12 mb-6 relative">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <div className="bg-gray-100 p-2 flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="bg-orange-500 h-8 rounded flex items-center px-2">
                        <div className="text-white text-xs font-bold">
                          Get High Quality
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-200 rounded"></div>
                        <div className="h-1 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>

                 
                  <div className="absolute -right-2 -bottom-2 w-8 h-12 bg-gray-900 rounded border border-gray-600 overflow-hidden">
                    <div className="bg-orange-500 h-3 w-full"></div>
                    <div className="p-1 space-y-0.5">
                      <div className="h-0.5 bg-gray-600 rounded"></div>
                      <div className="h-0.5 bg-gray-600 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-bold text-gray-600">04</span>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        Fulfillment Hub USA
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Logistic and warehouse website
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
