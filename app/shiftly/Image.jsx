// app/components/DashboardSection.tsx or /pages/index.tsx
import Image from 'next/image';

export default function ImageSection() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-4 md:px-12 py-12">
      
      {/* Left section */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center h-[400px] md:h-auto">
        <div className="absolute w-96 h-96 rounded-full bg-blue-400 blur-[100px] opacity-70"></div>
        <button className="relative z-10 bg-yellow-400 text-black font-medium px-6 py-2 rounded-full shadow-lg">
          Dashboards
        </button>
      </div>

      {/* Right section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/case-study-4.png" // Make sure to place it in public folder as 'public/case-study-4.png'
          alt="Dashboard Screenshot"
          width={800}
          height={600}
          className="rounded-xl shadow-xl w-full max-w-[700px] h-auto"
        />
      </div>
    </div>
  );
}
