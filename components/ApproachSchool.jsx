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
        <div className="flex items-centre gap-4 mb-12">
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
                Our UX approach for the School Management System was focused on simplifying admin
                workflows, improving staff-parent communication, and providing accessible academic
                insights through intuitive design. We conducted interviews with teachers, students,
                and admin staff, alongside a review of existing school platforms.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 01 */}
          <div className="bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-centre justify-between mb-4">
              <Search className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">01</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              User Discovery & Experience Mapping
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Stakeholder interviews highlighted difficulties in attendance tracking, timetable
              access, and parent-teacher communication. We mapped journeys from login to managing
              reports, ensuring clear flows for every user type.
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-gradient-to-br from-slate-500/20 to-gray-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-centre justify-between mb-4">
              <X className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">02</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Information Architecture Overhaul
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We restructured navigation to prioritise daily schedules, announcements, class
              management, and academic records. Dashboards were designed for rapid access to the
              most relevant tools per role.
            </p>
          </div>

          {/* Card 03 */}
          <div className="bg-gradient-to-br from-blue-400/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-centre justify-between mb-4">
              <Layers className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">03</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Visual Language for Trust & Simplicity
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              We introduced a clean visual system with friendly icons, colour-coded roles, and
              calm-toned gradients — aimed at creating a sense of professionalism and ease, while
              reflecting the values of education.
            </p>
          </div>

          {/* Card 04 */}
          <div className="bg-gradient-to-br from-green-400/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-centre justify-between mb-4">
              <GitBranch className="w-6 h-6 text-white/70" />
              <span className="text-6xl font-bold text-white/30">04</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Simplified Administration & Reporting
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Admin workflows were redesigned to support effortless record keeping, reporting, and
              real-time communication. Tools such as grade books, attendance logs, and message
              centres were made mobile-first and staff-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSchool;
