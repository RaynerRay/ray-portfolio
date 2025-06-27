import React from 'react';
import { Search, X, Layers, GitBranch } from 'lucide-react';

const Approach = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8 relative overflow-hidden rounded-lg mt-4">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-gray-800 opacity-20" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23374151' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`
           }}>
      </div>

      {/* Background decorative circles */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto ">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          {/* <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
            <span className="text-white font-medium text-lg">02</span>
          </div> */}
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 border border-white/20">
            <span className="text-white font-medium text-sm">UX Approach</span>
          </div>
        </div>

        {/* Main content area */}
        <div className=" gap-8 items-start mb-4">
          {/* Left side - Description */}
          <div className="space-y-6">
            <div className="text-white/90 text-lg leading-relaxed">
              <p>
              The UX approach for the Shiftly platform focused on delivering an intuitive, efficient platform. It centralises healthcare company needs with available workers, streamlines placement and management, and simplifies complex scheduling and compliance. The platform also emphasizes security and trust through integrated verification and communication tools, ensuring both effectiveness and safety.
              </p>
            </div>
          </div>

          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 01 */}
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <Search className="w-6 h-6 text-white/70" />
                <span className="text-6xl font-bold text-white/30">01</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Problem Discovery & User Research
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Key usability issues were identified through user behavior
                analysis, feedback sessions, and competitor audits. Insights
                revealed challenges such as cluttered navigation, limited data
                visibility, and missing feature parity.
              </p>
            </div>

            {/* Card 02 */}
            <div className="bg-gradient-to-br from-gray-500/20 to-slate-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <X className="w-6 h-6 text-white/70" />
                <span className="text-6xl font-bold text-white/30">02</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Information Architecture Redefinition
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                The navigation structure and content hierarchy were
                redefined to improve clarity and ease of access. Menu depth
                was reduced, and layout decisions were guided by user
                workflows and priorities.
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <Layers className="w-6 h-6 text-white/70" />
                <span className="text-6xl font-bold text-white/30">03</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Interface Redesign with Real-Time Context
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Key interface components were redesigned to highlight real-time
                data and contextual information. The new design prioritises
                actionable insights and reduces cognitive load.
              </p>
            </div>

            {/* Card 04 */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <GitBranch className="w-6 h-6 text-white/70" />
                <span className="text-6xl font-bold text-white/30">04</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Feature Integration for Security and Efficiency
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Critical features such as testing, scanning, and vulnerability
                detection were seamlessly integrated into the workflow to
                enhance both security and operational efficiency.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Approach;