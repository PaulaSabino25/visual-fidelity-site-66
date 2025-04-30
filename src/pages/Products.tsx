
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ 
  image, 
  title, 
  subtitle = null,
  link
}: { 
  image: string; 
  title: string; 
  subtitle?: string | null;
  link: string;
}) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <div className="p-4">
        <img src={image} alt={title} className="w-full h-48 object-contain mb-4" />
      </div>
      <div className="pb-4 px-4">
        <h3 className="text-[#1A3654] font-medium">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>
      <div className="flex justify-end p-2">
        <Link 
          to={link} 
          className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-medium text-[#1A3654] mb-12">All Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ProductCard 
            image="/lovable-uploads/7dbb3ab3-18f9-49a9-a82c-88b8aab2f622.png" 
            title="PETsys TOFPET2 ASIC" 
            link="/products/tofpet2-asic"
          />
          
          <ProductCard 
            image="/lovable-uploads/b5f75b92-2247-4cc7-b342-d1f80dd547d5.png" 
            title="PETsys TOF ASIC E.KIT" 
            link="/products/tof-asic-e-kit"
          />
          
          <ProductCard 
            image="/lovable-uploads/a401f205-ed76-473c-9a19-a149b1df737f.png" 
            title="PETsys TOF Front-End Module" 
            subtitle="(Readout System)" 
            link="/products/tof-front-end-module"
          />

          <ProductCard 
            image="/lovable-uploads/4a49022d-35e0-4f26-a771-1632de142394.png" 
            title="PETsys TOF FEB / D Board" 
            subtitle="(Readout System)" 
            link="/products/tof-febd-board"
          />

          <ProductCard 
            image="/lovable-uploads/3e9260b9-c71e-4256-ad2b-d83e221c095a.png" 
            title="PETsys TOF DAQ Board" 
            subtitle="(Readout System)" 
            link="/products/tof-daq-board"
          />

          <ProductCard 
            image="/lovable-uploads/2505f83d-3905-40ff-873a-21e3db665630.png" 
            title="PETsys SiPM Readout System" 
            link="#"
          />
        </div>
        
        <div className="flex justify-center">
          <button className="bg-gray-400 text-white px-6 py-3 rounded hover:bg-opacity-90 transition">
            SHOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
