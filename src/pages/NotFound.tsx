
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import WavyBackground from '../components/WavyBackground';

const NotFound = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold text-[#1A3140] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </WavyBackground>
  );
};

export default NotFound;
