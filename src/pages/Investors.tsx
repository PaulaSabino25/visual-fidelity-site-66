
import React from 'react';
import WavyBackground from '../components/WavyBackground';
import PageHeading from '../components/PageHeading';
import AccordionSection from '../components/AccordionSection';

const Investors = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-12">
        <PageHeading title="Main Investors" />
        
        <AccordionSection 
          title="Shareholders" 
          to="/investors/shareholders"
        />
        
        <div className="mt-8 px-4">
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
                <img
                  src="/lovable-uploads/cd791cf5-26cd-41ea-8dc8-f302f78d20fb.png"
                  alt="PETsys Electronics"
                  className="max-w-full max-h-36"
                />
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-[#1A3140] mb-2">PETsys</h3>
                <h4 className="text-lg mb-4">Medical PET Imaging Systems, S.A</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-700 mb-4">
                      PETsys Systems SA, a Medical Device Company that develops and markets electronics was responsible for developing much of the worldwide accumulated know-how in ToFPET. The company has been able to capture much of the worldwide accumulated know-how in ToFPET and Business Excellence.
                    </p>
                    <p className="text-sm text-gray-700">
                      Currently, it is in a privileged position from a medical/financial/know-how to provide the necessary funding for development of PET scanners. PETsys benefits from a collaborating with hospitals and universities to adjust to business needs/market activities including market research and consulting.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-4">
                      PETsys Systems SA (Shareholders are in) individual PETsys shares LUSO, FIEP(DEG, NOVABASE collaborators and a business angel).
                    </p>
                    <p className="text-sm text-gray-700">
                      A spin-off of PETsys Systems SA named PETsys Electronics SA to focus on PET detector modules and readout electronics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
                <img
                  src="/lovable-uploads/81f05a65-a7f8-4c51-b499-19c960b94461.png"
                  alt="Portugal Ventures"
                  className="max-w-full max-h-36"
                />
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-[#1A3140] mb-2">Portugal Ventures</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-700 mb-4">
                      Portugal Ventures is a Venture Capital and Private Equity firm, focusing its investments in innovative, scientific and technology-based companies as well as in companies from the more traditional Portuguese tourism sector.
                    </p>
                    <p className="text-sm text-gray-700">
                      Portugal Ventures operates alongside entrepreneurs by providing them access to additional rounds of funding, with enhanced networking opportunities in global markets, while targeting high-growth Portuguese companies to become global stories.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-4">
                      Portugal Ventures works alongside entrepreneurs, enabling high-growth Portuguese companies to become global stories.
                    </p>
                    <p className="text-sm text-gray-700">
                      <a href="https://portugalventures.pt" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.portugalventures.pt</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#1A3140] mb-4">Individual Shareholders</h3>
            <p className="text-sm text-gray-700">
              João Varela, Manuel Rolo, Ricardo Bugalho, Stefaan Tavernier and Vasco Varela.
            </p>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};

export default Investors;
