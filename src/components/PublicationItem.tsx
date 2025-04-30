
import React from 'react';

interface PublicationItemProps {
  index: number;
  title: string;
  authors: string;
  reference: string;
}

const PublicationItem: React.FC<PublicationItemProps> = ({
  index,
  title,
  authors,
  reference,
}) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium text-[#1A3140] mb-1">{index}. {title}</h3>
      <p className="text-sm text-gray-600 mb-1">{authors}</p>
      <p className="text-xs text-gray-500">{reference}</p>
    </div>
  );
};

export default PublicationItem;
