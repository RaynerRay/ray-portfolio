import { Circle } from "lucide-react";

const stages = [
  {
    title: "Research & Development",
    color: "bg-yellow-400",
    tags: ["User Interviews", "Documentation", "Release Feature Planning"],
    gradient: "from-green-900/30 to-green-800/10",
  },
  {
    title: "Wireframing & User flow",
    color: "bg-yellow-400",
    tags: ["Low-fidelity Wireframes", "User flows", "Design Direction"],
    gradient: "from-green-500/20 to-green-400/10",
  },
  {
    title: "High-Fidelity Design",
    color: "bg-yellow-400",
    tags: ["High-fidelity design screens", "Follow Design System"],
    gradient: "from-indigo-500/20 to-indigo-400/10",
  },
  {
    title: "Testing & Iteration",
    color: "bg-yellow-400",
    tags: ["UI/UX Design", "Design Testing", "Final Reviews"],
    gradient: "from-indigo-900/40 to-indigo-800/10",
  },
];

export default function ProductTimeline() {
  return (
    <div className="bg-gray-700/20 text-white px-4 py-16 md:px-20 rounded-lg">
      <div className="">
        <div className="mb-10">
          <span className="inline-block bg-sky-100 text-black text-sm px-3 py-1 rounded-full font-medium"> Product Timeline</span>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">
            A timeline outlines a <span className="text-emerald-300">structured plan detailing</span> the <span className="text-fuchsia-400">key phases</span> and activities involved in the design and development of the Shiftly platform over a defined period.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {stages.map((stage, idx) => (
            <div
              key={stage.title}
              className={`bg-gradient-to-br ${stage.gradient} border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur`}
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(3)].map((_, i) => (
                  <Circle
                    key={i}
                    size={10}
                    className={`${i === idx ? stage.color : "bg-gray-700"} rounded-full`}
                  />
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-4">{stage.title}</h3>
              <div className="flex flex-wrap gap-2">
                {stage.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/20 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
