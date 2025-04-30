
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container flex items-center justify-between h-20 px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/cd791cf5-26cd-41ea-8dc8-f302f78d20fb.png" alt="PETsys Electronics Logo" className="h-12" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/products">PRODUCTS</NavLink>
          <NavLink to="/technology">PETSYS TECHNOLOGY</NavLink>
          <NavLink to="/news">NEWS</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          
          <Button variant="secondary" className="rounded-md bg-gray-200 hover:bg-gray-300" asChild>
            <Link to="/signin">SIGN IN</Link>
          </Button>
          
          <button 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200" 
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="w-5 h-5 text-gray-600" />
          </button>
        </nav>
        
        <div className="flex md:hidden items-center space-x-4">
          <Button variant="secondary" className="rounded-md bg-gray-200 hover:bg-gray-300" asChild>
            <Link to="/signin">SIGN IN</Link>
          </Button>
          
          <button className="p-2 rounded-full bg-gray-100">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
    >
      {children}
    </Link>
  );
};

export default Header;
