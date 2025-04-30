
import React from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Link } from 'react-router-dom';
import WavyBackground from '../components/WavyBackground';

const SignIn = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/cd791cf5-26cd-41ea-8dc8-f302f78d20fb.png" 
              alt="PETsys Electronics Logo" 
              className="h-12" 
            />
          </div>
          
          <h1 className="text-2xl font-semibold text-center mb-6 text-[#1A3140]">
            Sign In
          </h1>
          
          <p className="text-center text-gray-600 mb-6">
            This is a restricted page, please login or register to access it.
          </p>
          
          <form className="space-y-4">
            <div>
              <Input 
                type="email" 
                placeholder="E-MAIL" 
                className="w-full"
              />
            </div>
            
            <div>
              <Input 
                type="password" 
                placeholder="PASSWORD" 
                className="w-full"
              />
            </div>
            
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                className="flex-1 mr-2"
              >
                REGISTER
              </Button>
              
              <Button 
                className="flex-1 ml-2 bg-[#1A3140] hover:bg-[#2a4658]"
              >
                LOGIN
              </Button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};

export default SignIn;
