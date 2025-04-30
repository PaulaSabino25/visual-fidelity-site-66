import React from 'react';
import WavyBackground from '../components/WavyBackground';
import PageHeading from '../components/PageHeading';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3140] mb-6">
                High-Performance PET Technology
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                PETsys Electronics develops cutting-edge silicon photo-sensors and integrated circuits for medical imaging applications, with unmatched spatial resolution and time-of-flight capability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/products" 
                  className="bg-[#1A3140] hover:bg-[#2a4658] text-white py-3 px-6 rounded-md transition-colors"
                >
                  Explore Our Products
                </Link>
                <Link 
                  to="/technology" 
                  className="bg-white border border-[#1A3140] text-[#1A3140] py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Learn About Technology
                </Link>
              </div>
              <div className="mt-4">
                <Link 
                  to="/gallery" 
                  className="text-[#1A3140] hover:underline inline-flex items-center gap-1"
                >
                  Ver Galeria de Imagens
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/cd791cf5-26cd-41ea-8dc8-f302f78d20fb.png" 
                alt="PETsys Technology" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <PageHeading title="Introduction" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-gray-700">
              <p className="mb-4">
                PETsys Electronics develops silicon photo-sensors for medical imaging technology of relevance to various disciplines and management of PET. It is one of the fastest growing markets in healthcare due to its reliability in disease detection and prognosis. The global market for dedicated PET systems each year is about 1000, and the total number for imaging market at present is over 5K billion per year. We believe the potential for growth is still considerable because PET will start being widely used in many developed countries.
              </p>
              <p className="mb-4">
                The main advantages of SiPM technology versus conventional PMTs are low power comsumption, compactness, and low-noise, they are magnetic field compatible and operate at low-voltage. Today we are embarking a new breakthrough in PET scanner technology with the introduction called photon-assisted ToFPET.
              </p>
            </div>
            <div className="text-gray-700">
              <p className="mb-4">
                SiPMs are compact and perform better than the photomultipliers. The main advantages of the SiPM are lower cost, compactness, and better time resolution. This price versus quality in PET scanners when the main target patient value is comparable to current PET systems. It is low power vs high PET scanners will be based on the use of SiPMs rather than the use of photomultiplier tubes.
              </p>
              <p>
                PETsys is exploiting its technological advantage in the area of PET detector modules using SiPMs as photosensors. Our speciality is in the development of detector modules for PET scanners. This involves the development of crystals, the associated SiPMs and the electronic readout. These modules include the scintillator crystal arrays, SiPM arrays, materials and the combining of both in high-performance readout units.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <PageHeading title="Markets" />
          <p className="text-gray-700 mb-8">
            The clients of PET detector modules are scanner manufacturers, independent labs of major educational and research centers, PET equipment manufactureres, and manufacturers of PET whole-body scanners.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#1A3140] mb-4">Small Animal PET Scanners</h3>
              <p className="text-gray-700">
                The market for SA in the coming years is estimated at 100 machines per year.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#1A3140] mb-4">Brain Scanners</h3>
              <p className="text-gray-700">
                PET is increasingly used in clinic for brain scans. In some hospitals the number of brain scans can even be that of the total PET Scanner. In these cases, it may prove attractive to develop a dedicated brain scanner based on SiPMs when using PET-compatible MRI.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#1A3140] mb-4">Dedicated Breast Scanners</h3>
              <p className="text-gray-700">
                Breast cancer can be detected and monitored using whole-body PET scanners. However, dedicated breast scanners where the detectors are placed close to the breast can achieve better resolution, and with time-of-flight capability. Considering the prevalence of this disease, we believe the full potential is of important matter in the future.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#1A3140] mb-4">Medium Animal Scanners</h3>
              <p className="text-gray-700">
                Medium animal PET is a new market with a potential of six systems. Reduction of injection dose, reduction of procedures and detail in medium animals, especially in cancers that require high doses, are necessary pharmacokinetics and targeting to reduce side-effects.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#1A3140] mb-4">Whole Body PET Scanners</h3>
              <p className="text-gray-700">
                The whole-body PET scanners represent a very large market: {'>'}1000 scanners per year.
              </p>
            </div>
          </div>
        </section>
      </div>
    </WavyBackground>
  );
};

export default Index;
