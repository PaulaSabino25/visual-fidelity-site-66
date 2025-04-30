
import React from 'react';
import { Link } from 'react-router-dom';

const ProductTofDaqBoard = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-white to-gray-100 pt-16 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-medium text-[#1A3654] mb-4">PETsys TOF DAQ Board</h1>
            <h2 className="text-lg text-[#1A3654] mb-6">(Readout System)</h2>
            <h3 className="text-xl text-[#1A3654] mb-4">PETsys Time-of-Flight Data Acquisition Board</h3>
            <p className="text-gray-700 mb-6">
              The PETsys TOF DAQ board is the core of the data acquisition system. It is equipped with a Kintex-7 FPGA, it collects data from the FEB/D1024 boards, and transmits these data to the DAQ computer using four PCI express 2.0 bus lines.
            </p>
            <div className="flex items-center space-x-4 mt-8">
              <Link to="#" className="flex items-center text-[#1A3654]">
                <img src="/lovable-uploads/4c0b288a-e06d-4a10-98f7-38f7cbd74f46.png" alt="Download Icon" className="w-8 h-8 mr-2" />
                <span>Download<br />Product Specifications</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/3e9260b9-c71e-4256-ad2b-d83e221c095a.png" 
            alt="TOF DAQ Board" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <p className="mb-6">
                Each FEB/D collects data from up to eight Front-End Modules (FEM128 equipped with TOF5 ASICs). Up to three chains of FEB/D1024 boards can be connected to the DAQ board using SFPP+ optical or copper links transmitting at 100 Mcount/s/s. The DAQ board can accept an external veto signal and will distribute this veto signal to the FEB/D boards causing these to ignore all events received from the ASICs.
              </p>
            </div>
            <div>
              <p className="mb-6">
                The DAQ board receives and merges the data frames and transmits the assembled data frames to the computer. The maximum event rate to the DAQ computer is 250 Mcps. The DAQ board also sorts the events in the data frames by chronological order to facilitate processing by software.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl text-[#1A3654] mb-8">
              The DAQ board, the Clock&Trigger module and the FEB/D modules together form a complete and scalable data acquisition system that can handle tens of thousands of SiPM channels.
            </h2>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl text-[#1A3654] mb-12">Main Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Single PCIe board providing data acquisition of TOF PET ASICs</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Operation frequency 160-200 MHz</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Compatible with FEB/D boards</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Readout of front-end temperature sensor</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Data readout to host master FEB/D boards and associated daisy-chained slaves</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Readout of TOF ASIC dark counters. Equipped with Kintex7 FPGA</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Max total input event rate: 3x100 M events/s</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Data output rate to computer: 200 M events/s</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Coincidence trigger implemented in the FEB/D</p>
            </div>
          </div>
        </div>
        
        {/* Wave Background */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" className="fill-[#1A3654]">
            <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductTofDaqBoard;
