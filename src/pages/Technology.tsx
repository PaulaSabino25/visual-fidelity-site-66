
import React from 'react';
import WavyBackground from '../components/WavyBackground';
import PageHeading from '../components/PageHeading';
import AccordionSection from '../components/AccordionSection';
import { Link } from 'react-router-dom';

const Technology = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-12">
        <PageHeading title="PETsys Technology" />
        
        <div className="mb-12">
          <Link 
            to="/technology/innovative-solutions" 
            className="block mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[#1A3140] mb-4">
                  Innovative Solutions
                </h3>
                <p className="text-gray-700">
                  PETsys technology based on LSO crystals, silicon photo-sensors and integrated electronics allows improving substantially the performance of the PET system. Our SiPM and APD based gamma ray detectors use dedicated highly integrated circuits (ASICs) with low-noise and low-power.
                </p>
                <p className="text-gray-700 mt-4">
                  These ASICs are the key to scalability of PETsys electronics systems to several tens of thousand channels without compromising performance.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/edf02dbb-e43e-4ef2-9e5f-ec5911fa022b.png" 
                  alt="Innovative Solutions" 
                  className="w-full rounded-full"
                />
              </div>
            </div>
          </Link>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-[#1A3140] mb-4">
              PET Resolution
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-xl font-medium text-[#1A3140] mb-6">
                The baseline detector module has a spatial resolution of ~2 mm and the high-resolution option has resolution of ~1 mm (whole-body PET scanners in the market reach not better than 5 mm).
              </p>
              <p className="text-gray-700 mb-4">
                SiPM-based modules achieve a coincidence time resolution (CTR) of 212 ps FWHM. The coincidence time resolution (CTR) in current LYSO is of the order of 1-2 ns (worse than our systems achieve in same conditions (1.5 ns). Our excellent time resolution permits the use of Time-of-Flight (ToF) information to both very sharp and clean PET images.
              </p>
              <p className="text-gray-700">
                PETsys electronics technology allows for this improvement at a very moderate cost and with reduced impact on system integration. Our highly integrated electronics keeps the cost per channel low, keeps the system very compact and the power consumption low.
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#1A3140] mb-4">
              Clinical Trials
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-xl font-medium text-[#1A3140] mb-6">
                (...) it is essential to know that there are multifocal lesions in order to remove them all when extracting the cancer tumor.
              </p>
              <p className="text-gray-700 mb-4">
                The validation of PETsys technology was accomplished in pre-clinical trials in Hospital Montpelier and ICNAS, Coimbra, with two machines prototype and pre-production. Several cases of carcinomas tumors were identified which are not visible in the whole-body PET images. Medical doctors conducting the clinical trials have presented the results in international scientific conferences. Our ClearPEM technology image in the right side identifies multifocal lesions. Standard whole-body PET image in the left side doesn't.
              </p>
              <p className="text-gray-700 mb-4">
                In surgery, it is essential to know that there are multifocal lesions in order to remove them all when extracting the cancer tumor.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-medium text-center mb-2">Whole-body PET Image</h4>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <img 
                      src="/lovable-uploads/5597df55-f1d4-489b-8561-a751221e739b.png" 
                      alt="Whole-body PET Image" 
                      className="mx-auto"
                    />
                  </div>
                  <p className="text-sm text-center mt-2 text-gray-600">Resolution is insufficient to identify multiple focus</p>
                </div>
                <div>
                  <h4 className="font-medium text-center mb-2">Clear PEM Image</h4>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <img 
                      src="/lovable-uploads/c2755f7a-fd84-4052-98d1-1dd4cea24021.png" 
                      alt="Clear PEM Image" 
                      className="mx-auto"
                    />
                  </div>
                  <p className="text-sm text-center mt-2 text-gray-600">Multifocal lesions are observed, strong impact on surgery planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <AccordionSection 
            title="TOFLAR ASIC for LIDAR Applications" 
            to="/technology/toflar-asic"
            rounded={false}
          />
          
          <AccordionSection 
            title="SiPM based Technology with Time-of-Flight capability" 
            to="/technology/sipm-based"
            rounded={false}
          />
          
          <AccordionSection 
            title="APD based technology with Depth-of-Interaction capability" 
            to="/technology/apd-based"
            rounded={false}
          />
        </div>
      </div>
    </WavyBackground>
  );
};

export default Technology;
