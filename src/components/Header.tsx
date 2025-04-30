
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/2e59ab53-765f-4fb6-9bc2-34ef6b6c11c6.png" 
            alt="PETsys Electronics Logo" 
            className="h-16"
          />
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link to="/about" className="text-[#1A3654] hover:text-opacity-80 transition">ABOUT US</Link>
          <Link to="/products" className="text-[#1A3654] hover:text-opacity-80 transition">PRODUCTS</Link>
          <Link to="/technology" className="text-[#1A3654] hover:text-opacity-80 transition">PETSYS TECHNOLOGY</Link>
          <Link to="/news" className="text-[#1A3654] hover:text-opacity-80 transition">NEWS</Link>
          <Link to="/contact" className="text-[#1A3654] hover:text-opacity-80 transition">CONTACT</Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Link to="/sign-in" className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-opacity-90 transition">
            SIGN IN
          </Link>
          <button className="bg-gray-400 text-white p-2 rounded-full hover:bg-opacity-90 transition">
            <Search size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
