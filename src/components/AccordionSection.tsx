
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AccordionSectionProps {
  title: string;
  to?: string;
  rounded?: boolean;
  children?: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ 
  title, 
  to, 
  rounded = true, 
  children 
}) => {
  return (
    <div className="mb-4">
      <Link 
        to={to || "#"} 
        className={`group bg-gray-100 w-full flex justify-between items-center px-6 py-4 
        ${rounded ? 'rounded-full' : 'rounded-lg'} hover:bg-gray-200 transition-all`}
      >
        <h3 className="font-medium text-lg text-[#1A3140]">{title}</h3>
        <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-gray-100 transition-all">
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </Link>
      {children}
    </div>
  );
};

export default AccordionSection;
