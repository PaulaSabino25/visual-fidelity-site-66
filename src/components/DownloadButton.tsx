
import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DownloadButtonProps {
  text: string;
  to: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ text, to }) => {
  return (
    <Link 
      to={to} 
      className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6"
    >
      <FileText size={20} className="text-gray-400" />
      <span className="text-sm">
        Download<br />
        {text}
      </span>
    </Link>
  );
};

export default DownloadButton;
