
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="relative">
          <img 
            src="/lovable-uploads/c8983552-19ba-4543-bcdd-42b40d147150.png" 
            alt="PETsys Laboratory" 
            className="w-full h-auto object-cover max-h-[70vh]" 
          />
          
          {/* White overlay with contact info */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-95 rounded-r-full p-8 md:p-12 max-w-xl">
            <h2 className="text-2xl font-medium text-[#1A3654] mb-4">TAGUSPARK</h2>
            <p className="text-[#1A3654] mb-2">Lisboa Science and Technology Park</p>
            <p className="text-[#1A3654] mb-6">Ed. Tecnologia 3.2, n.61-64</p>
            
            <p className="text-[#1A3654] mb-6">2740-257 Porto Salvo</p>
            
            <p className="text-[#1A3654] mb-4">Oeiras, Portugal, European Union</p>
            
            <div className="flex items-center mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="tel:+351966002882" className="text-[#1A3654]">(+351) 96 600 2882</a>
            </div>
            
            <div className="flex items-center mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:info@petsyselectronics.com" className="text-[#1A3654]">info@petsyselectronics.com</a>
            </div>
            
            <div className="flex items-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:support@petsyselectronics.com" className="text-[#1A3654]">support@petsyselectronics.com</a>
            </div>
            
            <p className="text-[#1A3654] italic text-sm">please send product id, s/n, photos,...</p>
            
            <div className="mt-6">
              <p className="text-[#1A3654] mb-2">NIF / VAT Number: 510 861 679</p>
              <p className="text-[#1A3654]">GPS: 38.742751, -9.302342</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
