
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#1A3654] mb-4">404</h1>
        <p className="text-xl text-[#1A3654] mb-6">Page not found</p>
        <p className="mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link to="/" className="bg-[#1A3654] text-white px-6 py-3 rounded hover:bg-opacity-90 transition">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
