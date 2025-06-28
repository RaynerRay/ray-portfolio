import Image from "next/image";
import { Lightbulb, Clock4, PenTool, Settings } from "lucide-react";

export default function Home1() {
  return (
    <div className="relative bg-black w-full flex flex-col items-center justify-center overflow-hidden py-10 px-4">
      {/* Background colored circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-orange-900 rounded-full opacity-40 z-0" />
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-blue-900 rounded-full opacity-30 z-0" />

      {/* Main Card */}
      <div className="relative z-10 flex flex-col md:flex-row items-center bg-[#141414] rounded-2xl p-6 md:p-8 shadow-xl w-full max-w-7xl">
        {/* Left side image */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image
            src="/user-journey.png"
            alt="Person holding phone"
            width={300}
            height={300}
            className="rounded-xl mx-auto"
          />
        </div>

        {/* Right side text & icons */}
        <div className="md:ml-10 text-white space-y-4 text-center md:text-left">
          <p className="text-2xl md:text-3xl font-semibold">
            Designing seamless
            <span className="ml-2 px-2 py-1 bg-green-400 text-black rounded-md inline-block">
              Journeys
            </span>
          </p>
          <p className="text-2xl md:text-3xl font-semibold">
            not just
            <span className="ml-2 px-2 py-1 bg-pink-400 text-black rounded-md inline-block">
              screens
            </span>
          </p>

          {/* Icons & flow */}
          <div className="mt-6 flex justify-center md:justify-start items-center flex-wrap gap-4">
            <Settings className="text-white w-6 h-6" />
            <PenTool className="text-white w-6 h-6 rotate-45" />
            <Clock4 className="text-yellow-400 w-6 h-6" />
            <div className="w-[2px] h-6 bg-white" />
            <Lightbulb className="text-yellow-400 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
