import React from 'react';
import { Search, X, Layers, GitBranch } from 'lucide-react';

const ApproachSchool = () => {
  return (
    <div className="bg-gray-900 p-8 relative overflow-hidden rounded-lg">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 bg-gray-800 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23374151' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
        }}
      ></div>

      {/* Background decorative circles */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 border border-white/20">
            <span className="text-white font-medium text-xs">UX DESIGN PROCESS</span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-6 mb-10">
          <p className="text-white/90 text-md leading-relaxed">
            For Smart School, a system that helps schools manage students, classes, and admin tasks, we aimed to build something easy to use for both teachers and staff. We focused on making daily tasks quicker, clearer, and less frustrating.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <Search className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">01</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Finding Out the Problems
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We spoke with teachers, admin staff, and students to understand where they struggled. Common issues included confusing systems, slow loading times, and not knowing where to find things.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-gray-500/20 to-slate-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <X className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">02</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Organising the System Properly
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We reorganised the whole structure so that users could reach the most used tools quickly. We reduced clutter and grouped actions like attendance, reports, and timetables in a clear way.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <Layers className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">03</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Clean and Simple Interfaces
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We designed each page with a focus on clarity. Important info is now easier to spot, and we made sure actions like marking attendance or adding grades can be done with just a few clicks.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <GitBranch className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">04</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Features that Help Schools Run Better
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We added features like auto-generated reports, digital attendance, class schedules, and student performance tracking – all designed to reduce admin load and help schools stay on top of things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSchool;
