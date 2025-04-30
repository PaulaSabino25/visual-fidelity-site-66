
import React from 'react';
import { Check } from 'lucide-react';

interface FeatureItemProps {
  children: React.ReactNode;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ children }) => {
  return (
    <div className="flex items-start space-x-3 mb-4">
      <div className="p-1 bg-white rounded-full shadow-sm mt-1">
        <Check size={16} className="text-gray-500" />
      </div>
      <p className="text-sm text-gray-700">{children}</p>
    </div>
  );
};

export default FeatureItem;
