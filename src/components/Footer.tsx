
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-[#1A3140] text-white pt-32 pb-8">
      <div className="absolute top-0 inset-x-0 h-40 bg-white rounded-b-[50%] transform translate-y-[-50%]"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-bold mb-4">ABOUT US</h3>
            <ul className="space-y-2">
              <FooterLink to="/about/company">The Company</FooterLink>
              <FooterLink to="/about/team">The Team</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-4">PETSYS TECHNOLOGY</h3>
            <ul className="space-y-2">
              <FooterLink to="/technology/innovative-solutions">Innovative Solutions</FooterLink>
              <FooterLink to="/technology/toflar-asic">TOFLAR ASIC for LIDAR Applications</FooterLink>
              <FooterLink to="/technology/sipm-based">SIPM based Technology</FooterLink>
              <FooterLink to="/technology/apd-based">APD based Technology</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-4">CONTACT</h3>
            <div className="space-y-2 text-sm">
              <p>Taguspark,</p>
              <p>Ed. Tecnologia, 3.2 n.61-64,</p>
              <p>2740-257 Porto Salvo</p>
              <p>Oeiras, Portugal, European Union</p>
              <p className="mt-4">info@petsyselectronics.com</p>
              <p>support@petsyselectronics.com</p>
              <p>(+351) 966 002 882</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-4">NEWSLETTER</h3>
            <p className="text-sm mb-4">Lorem ipsum dolor sit amet</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded-l-md text-sm p-2 w-full" 
              />
              <button className="bg-gray-400 text-white rounded-r-md px-4 text-sm">SEND</button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 PETsys Electronics SA | All Rights Reserved</p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:underline">Política de Privacidade</Link>
            <Link to="/terms" className="hover:underline">Termos e Condições</Link>
            <Link to="/claims" className="hover:underline">Livro de Reclamações</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  return (
    <li>
      <Link to={to} className="text-sm hover:underline">
        {children}
      </Link>
    </li>
  );
};

export default Footer;
