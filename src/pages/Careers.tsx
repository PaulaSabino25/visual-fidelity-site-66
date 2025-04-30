
import React from 'react';
import { Link } from 'react-router-dom';

const JobItem = ({ 
  title, 
  isOpen = false 
}: { 
  title: string;
  isOpen?: boolean;
}) => {
  return (
    <div className={`bg-gray-100 rounded-full overflow-hidden mb-4 ${isOpen ? 'rounded-b-none' : ''}`}>
      <div className="py-3 px-6 flex justify-between items-center">
        <h3 className="text-xl text-[#1A3654]">{title}</h3>
        <Link to={`/careers/${title.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white p-2 rounded-full">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
      
      {isOpen && (
        <div className="bg-white p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="font-medium text-gray-600">Location</p>
              <p>Lisbon area (Portugal)</p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Category</p>
              <p>Engineering</p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Type</p>
              <p>Production Manager</p>
              <p className="text-gray-500 text-sm">(Responsável pela produção)</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p>
              PETsys Electronics (www.petsyselectronics.com) opens a position for a talented electronics
              production manager (responsável pela produção). We offer a regular employment contract,
              attractive salary and flexible work conditions.
            </p>
            <p>
              The candidate is expected to organize the fabrication (outsourced), testing (in-house), stocking and
              shipping of the company's electronics products, as well as in the processing of clients orders. The
              candidates should have a degree in Industrial Engineering, Electronics Engineering or equivalent.
              Good command of English is mandatory. Working experience in production management,
              electronics industry, as well as familiarity with Odoo or other ERP platforms are valued.
            </p>
            <p>
              Candidates that only want to work remotely should not apply.
            </p>
            <p>
              Applications, including a detailed CV, a motivation letter and two recommendation letters, should
              be sent to: <a href="mailto:info@petsyselectronics.com" className="text-blue-600 hover:underline">info@petsyselectronics.com</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const Careers = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-medium text-[#1A3654] mb-12">Careers</h1>
        
        <JobItem title="Electronics Production Manager" isOpen={true} />
        <JobItem title="Summer Internship" />
      </div>
    </div>
  );
};

export default Careers;
