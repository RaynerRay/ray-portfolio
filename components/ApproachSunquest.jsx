import React from 'react';
import { Search, X, Layers, GitBranch } from 'lucide-react';

const ApproachSunquest = () => {
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
            <span className="text-white font-medium text-xs">
              UX STRATEGY / DESIGN THINKING
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="gap-8 items-start mb-4">
          <div className="space-y-6">
            <div className="text-white/90 text-md leading-relaxed">
              <p>
                The UX approach for Sunquest Flight School was centered on simplifying enrollment,
                showcasing aviation programs, and building trust through engaging, transparent
                design. We conducted pilot interviews, competitor reviews, and workflow analysis
                across flight training environments.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 01 */}
          <div className="bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <Search className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">01</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              User Discovery & Journey Mapping
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Interviews with prospective students revealed pain points in registration and course
              selection. We mapped ideal user flows from "dreaming of flying" to "book your first
              flight."
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-gradient-to-br from-slate-500/20 to-gray-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <X className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">02</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Navigation Restructure for Clarity
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We restructured the information architecture to highlight course types, pricing,
              instructor bios, and FAQs. The homepage became a launchpad for quick exploration and
              enrollment.
            </p>
          </div>

          {/* Card 03 */}
          <div className="bg-gradient-to-br from-blue-400/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <Layers className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">03</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Visual Design to Inspire Confidence
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              The visual system used gradients, aviation-themed icons, and action-based layouts to
              guide users toward program signup, while establishing brand identity rooted in safety
              and aspiration.
            </p>
          </div>

          {/* Card 04 */}
          <div className="bg-gradient-to-br from-green-400/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <GitBranch className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">04</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Streamlined Enrollment Experience
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              The enrollment workflow was streamlined to include application tracking, eligibility
              checks, and one-click scheduling of discovery flights — all from desktop or mobile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSunquest;
