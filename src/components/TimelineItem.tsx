
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TimelineItemProps {
  date: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  description,
  link
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-medium text-gray-800 mb-2">{date}</h3>
      <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
        <p className="text-gray-700">{description}</p>
        
        {link && (
          <Link 
            to={link.url} 
            className="text-blue-500 text-sm hover:underline flex items-center space-x-1 ml-4"
          >
            <span>{link.text}</span>
            <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight size={16} className="text-gray-500" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
