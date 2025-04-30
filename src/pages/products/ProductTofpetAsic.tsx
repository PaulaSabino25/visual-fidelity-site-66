
import React from 'react';
import { Link } from 'react-router-dom';

const ProductTofpetAsic = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-white to-gray-100 pt-16 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-medium text-[#1A3654] mb-6">PETsys TOFPET2 ASIC</h1>
            <h2 className="text-xl text-[#1A3654] mb-6">PETsys Time-of-Flight PET ASIC</h2>
            <p className="text-gray-700 mb-8">
              The PETsys High Performance TOFPET2 ASIC is a new 64 channel chip for the readout and digitization of signals from fast photon detectors in applications where a high data rate and fast timing is required. It uses a low threshold for timing and a high threshold for accepting the event. Both thresholds are separately configurable for each channel. Every time one of the 64 channels exceeds the high threshold a record is created giving the channel number, the time and the charge of the event. Activity in one channel does not cause any dead-time on the other channels.
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
            src="/lovable-uploads/7dbb3ab3-18f9-49a9-a82c-88b8aab2f622.png" 
            alt="TOFPET2 ASIC" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-[#1A3654] mb-6">
            TOFPET2 a high-performance ASIC for time and amplitude measurements of SiPM signals in time-of-flight applications
          </h2>
          
          <div className="flex justify-end mb-8">
            <Link to="#" className="flex items-center text-[#1A3654] text-sm">
              <span className="mr-2">know more about ASIC2 and read the performance report</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* ASIC Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-100 p-6 rounded">
              <img src="/lovable-uploads/7dbb3ab3-18f9-49a9-a82c-88b8aab2f622.png" alt="TOFPET2 ASIC Figure 1" className="w-full h-48 object-contain mb-4" />
              <p className="font-medium">Figure 1</p>
              <p className="text-sm">Detail of test board, showing the TOFPET2 ASIC bonded on the test board. An operation of the electronics below 7°C demands it is provided as BGA package.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded">
              <img src="/lovable-uploads/3677df55-adc0-4b1e-8260-2b11ef60959f.png" alt="TOFPET2 ASIC Figure 2" className="w-full h-48 object-contain mb-4" />
              <p className="font-medium">Figure 2</p>
              <p className="text-sm">Pulse height spectrum obtained with a radioactive source of 22Na. LYSO:Ce crystal (3×3×5 mm3) directly coupled to a KETEK PM3325-WB SiPM at 4 V overvoltage and at 20°C. The energy signal is integrated in a time window of 300 ns. The energy resolution is 9.1 keV at 10.5 % after correction for the SiPM non-linearity.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded">
              <img src="/lovable-uploads/edae8fa4-17b3-433c-b719-7fc21685d3a0.png" alt="TOFPET2 ASIC Figure 3" className="w-full h-48 object-contain mb-4" />
              <p className="font-medium">Figure 3</p>
              <p className="text-sm">Time difference between the two signals from a positron source and two 2×2×3 mm3 LYSO:Ce crystals coupled to two Hamamatsu S13361-3050-AE-08 MPPC arrays.</p>
            </div>
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
              <p>Designed in standard CMOS 110 nm technology</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>On-chip calibration pulse generator with 6-bit programmable amplitude</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Signal amplification and discrimination for each of 64 independent channels</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Max channel hit rate: 600 kHz</p>
            </div>
            
            {/* Add more features here */}
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Dual branch analogue interpolation TDCs for each channel. The first branch is used for timing measurement. The second branch provides time-over-threshold (ToT) or charge measurement (ADC)</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Rejects dark counts without triggering, allowing to handle over 1 MHz of dark counts</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Quad-buffered charge integration for each TDC or ADC in digital domain</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Separately configurable thresholds for each channel</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Dynamic range: 1500 pC</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Configurable charge integration time up to two microseconds</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>SiNEt 2% dB for Qin=200 fC (about one p.e.) and input capacitance of 320 pF</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Fully digital output, 4 LVDS data links (double data rate) DDR compatible</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>TDC time binning: 30 ps</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Max output data rate: 3.2 Gb/s</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Gain adjustment per channel: 1, 1/2, 1/4, 1/8</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Clock frequency: 200 MHz</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Power consumption per channel: 6.5 mW, depending on option settings</p>
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

export default ProductTofpetAsic;
