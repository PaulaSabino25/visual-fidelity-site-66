
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MediaCardProps {
  title: string;
  image: string;
  to: string;
  date?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ title, image, to, date }) => {
  return (
    <div className="relative">
      <Link to={to} className="block">
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {date ? (
          <div className="font-medium text-gray-700 mb-1">
            {title} | {date}
          </div>
        ) : (
          <div className="font-medium text-gray-700 mb-1">
            {title}
          </div>
        )}
      </Link>
      
      <Link to={to} className="absolute bottom-0 right-0">
        <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-400 transition-all">
          <ChevronRight size={20} className="text-white" />
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
