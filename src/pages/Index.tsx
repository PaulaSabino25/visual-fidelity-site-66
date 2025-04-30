
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would connect to a newsletter service
    console.log('Newsletter subscription for:', email);
    setEmail('');
    // Could add toast notification here
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-gray-100 relative">
        <div className="container mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl font-medium text-[#1A3654] mb-4">PETsys Electronics</h1>
            <h2 className="text-2xl md:text-3xl text-[#1A3654] mb-6">Medical PET Detectors, S.A.</h2>
            <p className="text-[#1A3654] mb-6 max-w-lg">
              State-of-the-art electronic solutions for the PET detectors of the future, LIDAR and other applications.
            </p>
            <button className="bg-[#1A3654] text-white px-6 py-3 rounded hover:bg-opacity-90 transition">
              READ MORE
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            <img 
              src="/lovable-uploads/5731e299-9eb8-48bc-b71a-630323bf40f4.png" 
              alt="PETsys Laboratory" 
              className="rounded-full md:absolute md:right-0"
            />
          </div>
        </div>
        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" className="fill-[#1A3654]">
            <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* News Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-medium text-[#1A3654]">News</h2>
            <div className="flex space-x-2">
              <button className="bg-gray-300 p-2 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-180">
                  <path d="M9 18L15 12L9 6" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="bg-gray-300 p-2 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* News Item 1 */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-medium text-[#1A3654] mb-2">PETsys TOFPET2 ASIC</h3>
              <p className="text-gray-700 text-sm mb-4">PETsys has developed a new ASIC for the readout of the TOFPET2 detector module...</p>
              <Link to="/news/1" className="text-blue-500 text-sm hover:underline">READ MORE</Link>
            </div>
            
            {/* News Item 2 */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-medium text-[#1A3654] mb-2">Experimental Physics Applications</h3>
              <p className="text-gray-700 text-sm mb-4">Applications of PETsys technology in experimental physics settings...</p>
              <Link to="/news/2" className="text-blue-500 text-sm hover:underline">READ MORE</Link>
            </div>
            
            {/* News Item 3 */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-medium text-[#1A3654] mb-2">Medical Applications</h3>
              <p className="text-gray-700 text-sm mb-4">How PETsys technology is applied in advanced medical imaging and diagnosis...</p>
              <Link to="/news/3" className="text-blue-500 text-sm hover:underline">READ MORE</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/lovable-uploads/5382a9f4-13af-4e8e-b9e0-135df9f771e5.png" 
                alt="PETsys Laboratory" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-medium text-[#1A3654] mb-4">The Company</h2>
              <p className="text-gray-700 mb-6">
                PETsys Electronics, S.A. leads in innovative high-performance electronics for medical PET detectors. 
                Our solutions offer superior spatial resolution and time-of-flight capability for next-generation 
                imaging systems used in cancer diagnosis and treatment planning.
              </p>
              <Link to="/about" className="bg-gray-300 text-[#1A3654] px-6 py-3 rounded hover:bg-gray-400 transition">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-medium text-[#1A3654]">Meet the Team</h2>
            <Link to="/team" className="bg-gray-300 text-[#1A3654] px-4 py-2 rounded text-sm hover:bg-gray-400 transition">
              VIEW ALL
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Team Member */}
            <div className="bg-gray-100 rounded-lg overflow-hidden relative">
              <img 
                src="/lovable-uploads/b3c5fb5f-9e5a-48ac-89d9-6cd17b8fe051.png" 
                alt="Team Member" 
                className="w-full h-auto"
              />
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Team Member */}
            <div className="bg-gray-100 rounded-lg overflow-hidden relative">
              <img 
                src="/lovable-uploads/b3c5fb5f-9e5a-48ac-89d9-6cd17b8fe051.png" 
                alt="Team Member" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-[#1A3654] bg-opacity-90 text-white p-4 flex flex-col">
                <h3 className="font-medium mb-1">Carlos Leong</h3>
                <p className="text-sm text-gray-300 mb-4">Co-Founder, Computer Engineer</p>
                <p className="text-sm flex-grow">
                  Carlos is responsible for the software development and integration of PETsys electronics systems.
                </p>
                <button className="self-end bg-white p-1 rounded-full mt-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Team Member */}
            <div className="bg-gray-100 rounded-lg overflow-hidden relative">
              <img 
                src="/lovable-uploads/b3c5fb5f-9e5a-48ac-89d9-6cd17b8fe051.png" 
                alt="Team Member" 
                className="w-full h-auto"
              />
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Team Member */}
            <div className="bg-gray-100 rounded-lg overflow-hidden relative">
              <img 
                src="/lovable-uploads/b3c5fb5f-9e5a-48ac-89d9-6cd17b8fe051.png" 
                alt="Team Member" 
                className="w-full h-auto"
              />
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Customers Map */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-[#1A3654] mb-10">Our Customers</h2>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/4c0b288a-e06d-4a10-98f7-38f7cbd74f46.png" 
              alt="World Map of Customers" 
              className="w-full h-auto"
            />
            {/* Customer Tooltip */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0A1D33] text-white p-4 rounded-lg max-w-xs">
              <h4 className="font-medium mb-2">PETsys Electronics, SA</h4>
              <p className="text-sm mb-1">Lisbon, Portugal</p>
              <p className="text-sm mb-3">Headquarters</p>
              <div className="flex items-center mb-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M3 5H21V19H3V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 5L12 14L21 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:info@petsyselectronics.com" className="text-blue-300 text-xs">info@petsyselectronics.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
