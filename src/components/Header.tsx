
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/2e59ab53-765f-4fb6-9bc2-34ef6b6c11c6.png" 
            alt="PETsys Electronics Logo" 
            className="h-12 md:h-16"
          />
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-[#1A3654]" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <Link to="/team" className="text-[#1A3654] hover:text-opacity-80 transition font-medium">ABOUT US</Link>
          <Link to="/products" className="text-[#1A3654] hover:text-opacity-80 transition font-medium">PRODUCTS</Link>
          <Link to="/technology" className="text-[#1A3654] hover:text-opacity-80 transition font-medium">PETSYS TECHNOLOGY</Link>
          <Link to="/track-record" className="text-[#1A3654] hover:text-opacity-80 transition font-medium">NEWS</Link>
          <Link to="/contact" className="text-[#1A3654] hover:text-opacity-80 transition font-medium">CONTACT</Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Link to="/sign-in" className="bg-[#1A3654] text-white px-4 py-2 rounded hover:bg-opacity-90 transition">
            SIGN IN
          </Link>
          <button className="bg-[#1A3654] text-white p-2 rounded-full hover:bg-opacity-90 transition">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white shadow-md z-50 md:hidden">
            <div className="flex flex-col p-4">
              <Link to="/team" className="py-2 text-[#1A3654]" onClick={toggleMobileMenu}>ABOUT US</Link>
              <Link to="/products" className="py-2 text-[#1A3654]" onClick={toggleMobileMenu}>PRODUCTS</Link>
              <Link to="/technology" className="py-2 text-[#1A3654]" onClick={toggleMobileMenu}>PETSYS TECHNOLOGY</Link>
              <Link to="/track-record" className="py-2 text-[#1A3654]" onClick={toggleMobileMenu}>NEWS</Link>
              <Link to="/contact" className="py-2 text-[#1A3654]" onClick={toggleMobileMenu}>CONTACT</Link>
              <Link to="/sign-in" className="py-2 text-[#1A3654]" onClick={toggleMobileMenu}>SIGN IN</Link>
              <div className="flex items-center mt-2">
                <button className="bg-[#1A3654] text-white p-2 rounded-full">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
