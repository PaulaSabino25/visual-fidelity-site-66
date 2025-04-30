
import React from 'react';
import WavyBackground from '../components/WavyBackground';
import PageHeading from '../components/PageHeading';
import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-12">
        <PageHeading title="Products" />
        
        <div className="space-y-8">
          <ProductCard 
            title="PETsys TOFPET2 ASIC" 
            subtitle="PETsys Time-of-Flight PET ASIC"
            image="/lovable-uploads/f316c73e-a4bb-4700-86a9-e3e3edefe199.png"
            to="/products/petsys-tofpet2-asic"
          />
          
          <ProductCard 
            title="PETsys TOF ASIC E. KIT" 
            subtitle="PETsys Time-of-Flight ASIC Evaluation Kit"
            image="/lovable-uploads/edae8fa4-17b3-433c-b719-7fc21685d3a0.png"
            to="/products/tof-asic-e-kit"
          />
          
          <ProductCard 
            title="PETsys TOF Front-End Module" 
            subtitle="PETsys Time-of-Flight Front-End Module (Readout System)"
            image="/lovable-uploads/e9e71fe5-b52b-4b6d-aec5-6dd9bb65555f.png"
            to="/products/tof-front-end-module"
          />
          
          <ProductCard 
            title="PETsys TOF FEB / D board" 
            subtitle="PETsys Time-of-Flight Front End Board / D (Readout System)"
            image="/lovable-uploads/b3c5fb5f-9e5a-48ac-89d9-6cd17b8fe051.png"
            to="/products/tof-febd-board"
          />
          
          <ProductCard 
            title="PETsys TOF DAQ Board" 
            subtitle="PETsys Time-of-Flight Data Acquisition Board (Readout System)"
            image="/lovable-uploads/b5f75b92-2247-4cc7-b342-d1f80dd547d5.png"
            to="/products/tof-daq-board"
          />
          
          <ProductCard 
            title="PETsys SiPM Readout System" 
            subtitle="PETsys Silicon Photomultiplier Readout System"
            image="/lovable-uploads/edae8fa4-17b3-433c-b719-7fc21685d3a0.png"
            to="/products/sipm-readout-system"
          />
        </div>
      </div>
    </WavyBackground>
  );
};

export default Products;
