
import React from 'react';

interface PageHeadingProps {
  title: string;
  subtitle?: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl md:text-5xl font-semibold text-[#1A3140] mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default PageHeading;
