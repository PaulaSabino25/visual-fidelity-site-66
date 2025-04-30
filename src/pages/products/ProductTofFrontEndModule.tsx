
import React from 'react';
import { Link } from 'react-router-dom';

const ProductTofFrontEndModule = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-white to-gray-100 pt-16 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-medium text-[#1A3654] mb-4">PETsys TOF Front-End Module</h1>
            <h2 className="text-lg text-[#1A3654] mb-6">(Readout System)</h2>
            <h3 className="text-xl text-[#1A3654] mb-4">PETsys Time-of-Flight Front-End Module</h3>
            <p className="text-gray-700 mb-6">
              The PETsys Front-End Module is the interface between the analog signals of the photo-sensor and the digital readout chain. It comes in two versions: (1) PETsys Front-End Module with 128 channels (Fig. 1) optimized for small systems with high channel data rate; (2) PETsys Front-End Module with 256 channels optimized for large systems with lower per channel cost. Both are made-up from three different boards: FEB/A_v2, FEB/S and FEB/I.
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
            src="/lovable-uploads/a401f205-ed76-473c-9a19-a149b1df737f.png" 
            alt="TOF Front-End Module" 
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
                The FEB/A_v2 board has one TOFPET2 ASIC with 64 channels (Fig 2). The two versions of the Front-End Module use the same FEB/A_v2 board as core component. The Front-End Module with 128 channels has two FEB/A_v2 boards and the 256 channels version has four boards. The FEB/A_v2 boards are mounted perpendicular to the SiPM array, and this geometry makes it easier to control and stabilize the temperature of the SiPM array. The board also has a temperature sensor near to the ASIC.
              </p>
              <p className="mb-6">
                The FEB/S board is a purely passive board adapting the SiPM array to the input connector on FEB/A_v2 boards. This board will be different for different SiPM arrays models. The version of the board shown on figure 1 has two pairs of connectors that directly take the Hamamatsu S13361-3050AE-08 SiPM MPPC array, or the KETEK PA3325-WB-0808 array PA3365-WB-0808. Each FEB/S measures 53.1 x 25.4 mm and is four-side foldable such as to allow forming a continuously sensitive area with a small dead space. The FEB/S also has two temperature sensors, each located at the middle of the pad of connectors taking one SiPM array. The Front End Module with 256 channels has two FEB/S boards identical to those used in the 128 channel version.
              </p>
            </div>
            <div>
              <p className="mb-6">
                The FEB/I, manages the communication between the FEB/A_v2 boards in the Front-End Module and the FEB/D_V2. The FEB/I provides the matching of data and configuration links to the FEB/D_V2. The board is different for the 128 and 256 channel versions of the Front-End Module. Up to eight PETsys Front-End Modules can be connected to one FEB/D board using a SAMTEC HQCD-030-xx-DTH-ETH-1M cable. It is also possible to plug the front-end modules directly into the FEB/D_V2.
              </p>

              <h3 className="text-xl text-[#1A3654] mt-12 mb-4">FEB/A Boards Construction</h3>
              <h4 className="text-xl text-[#1A3654] mb-4">(...) this geometry makes it easier to control and stabilise the temperature of the SiPM array.</h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-100 p-6 rounded">
              <img src="/lovable-uploads/a5d9bf60-8dbc-4aee-aded-1ae315a95bb3.png" alt="Figure 1" className="w-full h-48 object-contain mb-4" />
              <p className="font-medium">Figure 1</p>
              <p className="text-sm">PETsys Front-End Module with 128 channels</p>
            </div>
            <div className="bg-gray-100 p-6 rounded">
              <img src="/lovable-uploads/5382a9f4-13af-4e8e-b9e0-135df9f771e5.png" alt="Figure 2" className="w-full h-48 object-contain mb-4" />
              <p className="font-medium">Figure 2</p>
              <p className="text-sm">FEB/A_v2 with the the ASIC in BGa package</p>
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
              <p>Based on the PETsys TOFPET2 ASIC. Compatible with FEB/D_V2 board and DAQ board</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>The 128 channels version allows a rate of 600 kcps per ASIC channel</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Compatible with any analog SiPM photosensor or with Micto Channel Plate photosensor</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>The 256 channels version allows a rate of 150 kcps per ASIC channel</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Cost effective solution for reading several ten thousand channels</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Provides bias voltage to the SiPM arrays</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Comes in two versions: 128 channels and 256 channels</p>
            </div>
            
            <div className="flex items-start">
              <svg className="w-6 h-6 text-[#1A3654] mr-2 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Power consumption per channel: 14 mW</p>
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

export default ProductTofFrontEndModule;
