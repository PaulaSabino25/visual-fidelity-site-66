
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = React.useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription for:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#1A3654] text-white pt-20 pb-4 relative">
      {/* Wave shape at top */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-99%">
        <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" className="fill-[#1A3654]">
          <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-medium mb-4">ABOUT US</h3>
            <ul className="space-y-2">
              <li><Link to="/about/company" className="text-sm hover:underline">The Company</Link></li>
              <li><Link to="/about/team" className="text-sm hover:underline">The Team</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">PETSYS TECHNOLOGY</h3>
            <ul className="space-y-2">
              <li><Link to="/technology/solutions" className="text-sm hover:underline">Innovative Solutions</Link></li>
              <li><Link to="/technology/toflar" className="text-sm hover:underline">TOFLAR ASIC for LIDAR Applications</Link></li>
              <li><Link to="/technology/sipm" className="text-sm hover:underline">SiPM based Technology</Link></li>
              <li><Link to="/technology/apd" className="text-sm hover:underline">APD based Technology</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">CONTACT</h3>
            <ul className="space-y-2">
              <li className="text-sm">Taguspark,</li>
              <li className="text-sm">Ed. Tecnologia, 3.2 n.61-64,</li>
              <li className="text-sm">2740-257 Porto Salvo</li>
              <li className="text-sm">Oeiras, Portugal, European Union</li>
              <li className="pt-2">
                <a href="mailto:info@petsyselectronics.com" className="text-sm hover:underline">info@petsyselectronics.com</a>
              </li>
              <li>
                <a href="mailto:support@petsyselectronics.com" className="text-sm hover:underline">support@petsyselectronics.com</a>
              </li>
              <li className="text-sm">(+351) 966 002 882</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">NEWSLETTER</h3>
            <p className="text-sm mb-4">Lorem ipsum dolor sit amet</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l text-black focus:outline-none"
                required
              />
              <button 
                type="submit"
                className="bg-gray-400 text-white px-4 py-2 rounded-r hover:bg-opacity-90 transition"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-2 md:mb-0">© 2024 PETsys Electronics SA | All Rights Reserved</p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-sm hover:underline">Política de Privacidade</Link>
            <Link to="/terms" className="text-sm hover:underline">Termos e Condições</Link>
            <Link to="/complaints" className="text-sm hover:underline">Livro de Reclamações</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
