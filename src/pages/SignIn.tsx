
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-medium text-[#1A3654] mb-12 text-center">
            This is a restricted page, please login or register to access it.
          </h1>
          
          <div className="bg-white rounded-lg p-8">
            <div className="mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-MAIL"
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            
            <div className="flex justify-between items-center">
              <Link 
                to="/register"
                className="text-[#1A3654] hover:underline"
              >
                REGISTER
              </Link>
              
              <button 
                className="bg-gray-400 text-white px-8 py-2 rounded hover:bg-opacity-90 transition"
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Background */}
      <div className="fixed bottom-0 left-0 w-full z-[-1]">
        <svg viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="fill-[#1A3654]">
          <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default SignIn;
