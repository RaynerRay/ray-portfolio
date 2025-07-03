import React from 'react';
import { Globe, Smartphone, Figma } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ImprovedHero = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-gray-800 opacity-20" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23374151' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`
           }}>
      </div>

      {/* Background decorative circles - using consistent theme colors */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-amber-500/15 to-orange-500/15 rounded-full blur-3xl"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left content - Text and CTA */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      Hi! My name is Godfrey
                    </span>
                  </h1>
                  <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-6">
                    I'm a UX/UI designer and Software Developer. Skilled in bridging UI/UX design with React front-end development, creating intuitive and accessible user interfaces.
                  </p>
                </div>
<Link href={"#case-studies"}>
                <button className="inline-flex items-center gap-3  px-4 md:px-8 md:py-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium text-sm md:text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  View Case Studies
                 
                </button>
                </Link>
              </div>
            </div>

            {/* Right content - Profile and Skills */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-2xl"></div>
                    {/* Profile container */}
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-full p-2 border border-white/10">
                      <div className="w-full h-full bg-gray-600 rounded-full overflow-hidden">
                        {/* Placeholder for profile image */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center text-white/50 text-6xl font-bold">
                          <Image src={"/ray.jpeg"} height={400} width={400} alt='hero picture'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Tools Card */}
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-white font-semibold mb-4 text-sm tracking-wider">TOOLS</h3>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <div className="px-3 py-1 bg-orange-500 rounded-full text-white text-xs font-medium">Adobe XD</div>
                      <div className="px-3 py-1 bg-purple-500 rounded-full text-white text-xs font-medium">Figma</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-3 py-1 bg-cyan-500 rounded-full text-white text-xs font-medium">HTML</div>
                      <div className="px-3 py-1 bg-cyan-500 rounded-full text-white text-xs font-medium">CSS</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-3 py-1 bg-blue-400 rounded-full text-white text-xs font-medium">React</div>
                      <div className="px-3 py-1 bg-yellow-500 rounded-full text-white text-xs font-medium">JavaScript</div>
                    </div>
                  </div>
                </div>

                {/* Skills Card */}
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-white font-semibold mb-4 text-sm tracking-wider">SKILLS</h3>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div>UX/UI Design & Strategy</div>
                    <div>Wireframing & Prototyping</div>
                    <div>User Research & Testing</div>
                    <div className="flex items-center gap-2">
                      <span>Mobile & Web Apps</span>
                      <div className="flex gap-1">
                        <Globe className="w-4 h-4 text-blue-400" />
                        <Smartphone className="w-4 h-4 text-green-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extras Card */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-white font-semibold mb-3 text-sm tracking-wider">EXTRAS</h3>
                <p className="text-white/80 text-sm">
                  Driven • Willing to learn • Decisive and Accountable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedHero;