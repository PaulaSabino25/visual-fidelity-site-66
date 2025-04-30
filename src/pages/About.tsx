
import React from 'react';
import WavyBackground from '../components/WavyBackground';
import PageHeading from '../components/PageHeading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-12">
        <PageHeading title="About PETsys Electronics" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#1A3140] mb-4">The Company</h2>
            <p className="text-gray-700 mb-4">
              PETsys Electronics SA is a Medical Device Company that develops and markets electronics for Time-of-Flight PET scanners/systems. The company has been able to capture much of the worldwide accumulated know-how in ToFPET and Business Excellence. Currently, it is in a privileged position from a medical/financial/know-how to provide the necessary funding for development of PET scanners. PETsys benefits from a collaborating with hospitals and universities to adjust to business needs/market activities including market research and consulting.
            </p>
            <p className="text-gray-700">
              PETsys Systems SA (Shareholders are in) individual PETsys shares LUSO, FIEP(DEG, NOVABASE collaborators and a business angel).
            </p>
            <p className="text-gray-700">
              A spin-off of PETsys Systems SA named PETsys Electronics SA to focus on PET detector modules and readout electronics.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <img 
              src="/lovable-uploads/cd791cf5-26cd-41ea-8dc8-f302f78d20fb.png"
              alt="PETsys Logo"
              className="mb-6 max-w-[200px] mx-auto"
            />
            <h3 className="text-xl font-semibold text-[#1A3140] mb-4 text-center">PETsys</h3>
            <p className="text-gray-700 mb-4 text-center">
              Medical PET Imaging Systems, S.A
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Link to="/about/investors" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-[#1A3140] mb-4 flex items-center">
              Main Investors
              <ArrowRight className="ml-2 h-5 w-5" />
            </h3>
            <p className="text-gray-700">
              Learn about the key investors and shareholders backing PETsys Electronics.
            </p>
          </Link>
          
          <Link to="/about/team" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-[#1A3140] mb-4 flex items-center">
              Meet the Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </h3>
            <p className="text-gray-700">
              Get to know our management team, board of directors, and consultants.
            </p>
          </Link>
          
          <Link to="/track-record" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-[#1A3140] mb-4 flex items-center">
              Track Record
              <ArrowRight className="ml-2 h-5 w-5" />
            </h3>
            <p className="text-gray-700">
              Explore our company's achievements, awards, and milestones.
            </p>
          </Link>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-[#1A3140] mb-6">Our Mission</h2>
          <blockquote className="border-l-4 border-[#1A3140] pl-4 italic text-gray-700">
            "To become world provider in high-resolution medical imaging by developing cutting-edge electronics that revolutionize PET scanning technology, improving early cancer detection and treatment outcomes worldwide."
          </blockquote>
        </div>
      </div>
    </WavyBackground>
  );
};

export default About;
