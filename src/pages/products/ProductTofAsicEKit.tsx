
import React from 'react';
import { Link } from 'react-router-dom';

const ProductTofAsicEKit = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-white to-gray-100 pt-16 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-medium text-[#1A3654] mb-6">PETsys TOF ASIC E. KIT</h1>
            <h2 className="text-xl text-[#1A3654] mb-6">PETsys Time-of-Flight ASIC Evaluation Kit</h2>
            <p className="text-gray-700 mb-8">
              The PETsys TOF ASIC Evaluation Kit (Fig. 1) is a complete readout kit allowing to read 256 SiPM channels.
            </p>
            <p className="text-gray-700 mb-8">
              It provides an easy to use, and cost effective, way for exploring the unique, powerful and versatile features of the PETsys TOFPET2 ASIC (Fig. 2).
            </p>
            <p className="text-gray-700 mb-8">
              It is also the perfect solution for anybody wanting to read a few 100 SiPM channels.
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
            src="/lovable-uploads/b5f75b92-2247-4cc7-b342-d1f80dd547d5.png" 
            alt="TOF ASIC E. KIT" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="mb-4">
                The front panel right connector (HDMI) is used to transport data to the computer, and two HDMI out and back (Fig. 3), to allow FEBD/D to feed the next module in line. Each FEBD has two connectors that directly accept the Hamamatsu S13361-3050AE-08 SiPM MPPC arrays, or the KETEK PA3325-WB-0808 array. With a special adapter board, the FEBD will equally well read analog SiPM arrays from other vendors.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Flexible cables can feed the HDMI-DB boards to the FEBD board, allowing greater flexibility for experimental setup.
              </p>
              <p className="mb-4">
                For an easy start we supply the evaluation kit with the ASIC SiPM mode activated on a board that plugs in the computer via the TOFPET2 ASIC test board, and sits on a PCB that powers the DAQ board and FEDB/D board for SiPM voltage bias supply. Also included is sleeping time with two bins provides a noise compression better than 25 times, without side effects of dead time. This provides a wide engineering margin over delivery conceivable requirements and also protects the measurement setup from saturation light. 
              </p>
              <p className="mb-4">
                The Eval-evo Kit is provided with firmware and software. The data acquisition software uses JSON for data and control and is easy to use, graphical user interface, see figure 5. The hardware interface in "Python" and ".m" and is also provided as source code, allowing the advanced user to customize it.
              </p>
            </div>
          </div>
          
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-100 p-6 rounded">
              <img src="/lovable-uploads/341df18e-44f9-4e34-a35b-b8234b1c7939.png" alt="Figure 1" className="w-full h-48 object-contain mb-4" />
              <p className="font-medium">Figure 1</p>
              <p className="text-sm">PETsys TOF ASIC E. Kit: The PETsys Evaluation Kit can accommodate a readout of a total of a total of 256 SiPM channels, that with two-side readout allows up to 128 crystal elements.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded">
              <img src="/lovable-uploads/7dbb3ab3-18f9-49a9-a82c-88b8aab2f622.png" alt="Figure 2" className="w-full h-48 object-contain mb-4" />
              <p className="font-medium">Figure 2</p>
              <p className="text-sm">PETsys TOFPET2 ASIC: Detail of test board, showing the TOFPET2 ASIC in socket package.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded">
              <img src="/lovable-uploads/cfd07fff-d931-4312-ab41-eb537143af8f.png" alt="Figure 3" className="w-full h-48 object-contain mb-4" />
              <p className="font-medium">Figure 3</p>
              <p className="text-sm">FEMB (in Module): Detail of internal FEMB with SiPM, ASICs, and FEB connectors. FEMB 64-ch modules are connected to the Module via high-speed HDMI-DB HDMI GB and 2-p. VHDMI 1.3-H 1m connectors for low-noise high speed communications.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-100 p-6 rounded">
              <img src="/lovable-uploads/edf02dbb-e43e-4ef2-9e5f-ec5911fa022b.png" alt="Figure 4" className="w-full h-48 object-contain mb-4" />
              <p className="font-medium">Figure 4</p>
              <p className="text-sm">Complete Setup: A view with two FEMBs, picking data with connection meeting sip/on applied bottom left with offset lands and load module.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded">
              <img src="/lovable-uploads/98b534e3-6509-489e-a33f-5795d24e0df2.png" alt="Figure 5" className="w-full h-48 object-contain mb-4" />
              <p className="font-medium">Figure 5</p>
              <p className="text-sm">Graphical User Interface: Setting up the parameters, a GUI to set the initial data for analysis and interact.</p>
            </div>
          </div>
          
          <p className="mb-8">
            Included in the price of the evaluation kit there is a hands-on and individual training for one or two people. The training introduces the user to the use of the evaluation Kit, the related electronics and the software.
          </p>
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
              <p>Two FEBD/D modules (Fig. 3), and two cables for connecting to sockets in the FEDB board</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Firmware for FEBD board, allowing configuration of the ASICs, and readout of the events using Digital Ethernet. The FEBD board is equipped with the FPGA</p>
            </div>

            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>One FEBD board reading the data and sending the data to the DAQ, using a HDMI cable (Fig. 4). One board with two TOFPET2 ASICs provides the clock and reset signals to the ASICs, and bias voltages to the SiPMs</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>JTAG interface cable for programming the firmware in the Altera FPGA of the FEBD board. This allows to upload firmware updates in the field</p>
            </div>

            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Two S13361-3050 modules, each with SiPM module for connecting the modules through the read-out DB modules, with LVDS portables and a mechanical mount (22Mhz Frame)</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Acquisition software for receiving the data in a PC</p>
            </div>

            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>A cooling box with two Peltier elements and allowing stable and reliable temperature regulation (Fig. 4)</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>One day training in the use of our module electronics for one or two people</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Documentation</p>
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

export default ProductTofAsicEKit;
