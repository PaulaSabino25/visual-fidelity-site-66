
import React from 'react';

const Technology = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-medium text-[#1A3654] mb-12">PETsys Technology</h1>
        
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-medium text-[#1A3654] mb-6">Innovative Solutions</h2>
              <p className="text-gray-700 mb-6">
                PETsys Electronics offers state-of-the-art solutions for PET imaging applications. Our products provide superior time-of-flight (TOF) resolution and spatial precision for next-generation medical imaging systems.
              </p>
              <p className="text-gray-700 mb-6">
                Our core technology is based on advanced ASICs (Application-Specific Integrated Circuits) designed specifically for high-resolution PET imaging. These ASICs enable unprecedented timing resolution and signal-to-noise ratio, resulting in clearer and more accurate images.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <img 
                src="/lovable-uploads/7dbb3ab3-18f9-49a9-a82c-88b8aab2f622.png" 
                alt="PETsys TOFPET2 ASIC" 
                className="w-full h-auto mb-4"
              />
              <h3 className="text-xl font-medium text-[#1A3654] mb-2">TOFPET2 ASIC</h3>
              <p className="text-gray-700">
                Our flagship technology combines advanced digital architecture with precise analog processing capabilities.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-[#1A3654] mb-6">Application Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-medium text-[#1A3654] mb-4">Medical Imaging</h3>
              <p className="text-gray-700">
                Our technology enables clearer, more accurate PET scans for improved cancer diagnosis and treatment planning.
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-medium text-[#1A3654] mb-4">LIDAR Applications</h3>
              <p className="text-gray-700">
                The TOFLAR ASIC brings high-resolution capabilities to LIDAR systems for autonomous vehicles and robotics.
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-medium text-[#1A3654] mb-4">Research & Development</h3>
              <p className="text-gray-700">
                Our products provide the precision needed for advanced physics research and medical technology development.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-[#1A3654] mb-6">Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b border-gray-200 bg-gray-100 text-left text-[#1A3654]">Feature</th>
                  <th className="py-3 px-4 border-b border-gray-200 bg-gray-100 text-left text-[#1A3654]">TOFPET2 ASIC</th>
                  <th className="py-3 px-4 border-b border-gray-200 bg-gray-100 text-left text-[#1A3654]">TOFLAR ASIC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">Channels</td>
                  <td className="py-2 px-4 border-b border-gray-200">64</td>
                  <td className="py-2 px-4 border-b border-gray-200">32</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">Time Resolution</td>
                  <td className="py-2 px-4 border-b border-gray-200">25 ps RMS</td>
                  <td className="py-2 px-4 border-b border-gray-200">40 ps RMS</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">Power Consumption</td>
                  <td className="py-2 px-4 border-b border-gray-200">10 mW/ch</td>
                  <td className="py-2 px-4 border-b border-gray-200">8 mW/ch</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">Input Dynamic Range</td>
                  <td className="py-2 px-4 border-b border-gray-200">1 - 2000 pC</td>
                  <td className="py-2 px-4 border-b border-gray-200">1 - 1000 pC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Wave Background */}
      <div className="bg-[#1A3654] h-64 relative -mx-4 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 transform -translate-y-99%">
          <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" className="fill-[#1A3654]">
            <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Technology;
