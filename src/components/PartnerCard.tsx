
import React from 'react';

interface PartnerCardProps {
  name: string;
  description: string;
  rightDescription?: string;
  logo: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  description,
  rightDescription,
  logo,
}) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center h-[200px]">
            <img
              src={logo}
              alt={name}
              className="max-w-full max-h-full"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#1A3140] mb-1">{name}</h3>
          <h4 className="text-lg mb-4">{description}</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-sm text-gray-700">
              <p>PETsys is collaborating with CERN in the development and testing of state-of-the-art electronics for the readout of scintillation crystal output, which can be used in the next generation of medical devices. PETsys was invited by CERN to participate with others in the ClearPEM Sonic funded for the development of multifunctional equipment combining PEM with ultrasound capabilities. PETsys was responsible for the PEM developments.</p>
            </div>
            
            {rightDescription && (
              <div className="text-sm text-gray-700">
                <p>{rightDescription}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
