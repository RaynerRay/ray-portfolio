import React from 'react';
import { Search, X, Layers, GitBranch } from 'lucide-react';

const Approach = () => {
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
            <span className="text-white font-medium text-xs">OUR UX DESIGN APPROACH</span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-6 mb-10">
          <p className="text-white/90 text-md leading-relaxed">
            When designing Shiftly, a web app that links healthcare companies with workers, our aim was to make it simple, clear, and easy to use. We focused on making tasks like finding shifts, applying for jobs, and managing compliance quick and stress-free.
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
              Understanding the Problems
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We spoke to users, checked out similar platforms, and reviewed feedback to learn what wasn’t working. Many said the process was confusing, with too many steps and unclear information.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-gray-500/20 to-slate-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <X className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">02</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Making the Structure Simple
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We simplified the menus and made it easier to find what users need. Everything was reorganised based on how people actually use the platform, so it feels more natural to navigate.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <Layers className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">03</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Designing Clear Interfaces
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              The new design shows the most important information clearly and at the right time. We used real-time data and visual cues to help users make decisions quickly and with confidence.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <GitBranch className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">04</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Adding Helpful Features
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We added tools that help with safety checks, shift tracking, and instant alerts. These features make the platform safer and save time for both companies and workers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
