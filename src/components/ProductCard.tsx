
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  subtitle?: string;
  image: string;
  to: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, subtitle, image, to }) => {
  return (
    <div className="border-t border-gray-200 pt-6 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <img src={image} alt={title} className="w-full h-auto object-cover" />
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-[#1A3140] mb-2">{title}</h3>
          {subtitle && <p className="text-sm text-gray-600 mb-4">{subtitle}</p>}
          <Link 
            to={to} 
            className="inline-flex items-center group"
          >
            <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center shadow-sm group-hover:bg-gray-300 transition-all">
              <ChevronRight size={20} className="text-gray-500" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
