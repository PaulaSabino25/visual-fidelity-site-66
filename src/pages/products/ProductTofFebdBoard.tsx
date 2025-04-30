
import React from 'react';
import { Link } from 'react-router-dom';

const ProductTofFebdBoard = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-white to-gray-100 pt-16 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-medium text-[#1A3654] mb-4">PETsys TOF FEB/D Board</h1>
            <h2 className="text-lg text-[#1A3654] mb-6">(Readout System)</h2>
            <h3 className="text-xl text-[#1A3654] mb-4">PETsys Time-of-Flight Front End Board / D</h3>
            <p className="text-gray-700 mb-6">
              The PETsys TOF Front-End Board D version 2 (FEB/D_V2) (Fig. 1) is part of the PETsys SiPM readout system.
            </p>
            <p className="text-gray-700 mb-6">
              The Readout System has three different components: the Front-End Module (Fig. 2), the FEB/D_V2 boards and the DAQ board (Fig. 3). Together these allow assembling a complete and scalable data acquisition system for several tens of thousands SiPM channels for Time Of Flight PET, or similar, applications.
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
            src="/lovable-uploads/4a49022d-35e0-4f26-a771-1632de142394.png" 
            alt="TOF FEB/D Board" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl text-[#1A3654] mb-8">
              Each FEB/D Board collects the data from the Front-End Modules and transmits assembled data frames to the DAQ using an electrical HDMI serial link or using a high-speed optical link.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <p className="mb-6">
                  The FEB/D is equipped with a Kintex 7 FPGA. It receives the data from the ASICs in the Front-End Modules, and sends the data to the DAQ board in the data acquisition computer. The FEB/D_V2 also receives configuration, clock and sync signals from the DAQ board and distributes them to the ASICs. Optionally, the DAQ board can receive an external veto signal and distribute the veto signal to the FEB/D boards. The FEB/D will ignore all events which no veto signal is on.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  Each FEB/D_V2 board measures 104.5×104.5 mm2. Eight Front-End Modules can be connected to one FEB/D board, using either direct board-to-board connectors or using flexible flat cables. Each FEB/D board collects the data from the Front End Modules and forwards assembled data frames to the DAQ using an electrical HDMI serial link or using a high-speed optical link. Several FEB/D boards can be daisy-chained and interfaced to a single DAQ board input. This maximum event rate of this output, link (HDMI or optical) is 72 M events/s.
                </p>
                <p className="mb-6">
                  A mezzanine on the FEB/D_V2 (module mezzanine on figure 1) supplies bias voltages to the SiPMs. The default mezzanine provides 64 positive bias voltages in the range 5-100 V, with a maximum current of 550 µA per bias line. A customized mezzanine version, e. g. supplying negative bias voltage, or a larger current, can be developed on request.
                </p>
                <p className="mb-6">
                  DC-DC converters and regulators on the FEB/D motherboard provide the low voltages for the ASICs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <img src="/lovable-uploads/e9e71fe5-b52b-4b6d-aec5-6dd9bb65555f.png" alt="FEB/D_V2 Board" className="w-full max-w-lg mx-auto mb-4" />
            <p className="text-center mb-12">
              <span className="font-medium">Figure 1</span><br />
              FEB/D_V2 Board
            </p>
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
              <p>Reading up to 2048 independent SiPM channels from</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Clock frequency 160-200 MHz</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Equipped with Kintex 7 FPGA</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>External supply voltage: 12 Vdc</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Compatible with Front-End Modules with 128 or 256 channels</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>On board DC-DC converters supply power to the ASICs in the FEB/A boards</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Data output interfaces: micro HDMI, and optical</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>SiPM bias voltages provided in a mezzanine. The default mezzanine provides 16 lines, 5-100 V, positive voltage, 3 mA or 8 mA per bias line</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Max event output rate: HDMI links or optical): 72 M events/s</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Can accept a veto signal</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Daisy chaining of data output data links allows reading up to 48 FEB/D boards with one DAQ board</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>External clock and synchronization provided by the HDMI cable</p>
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

export default ProductTofFebdBoard;
