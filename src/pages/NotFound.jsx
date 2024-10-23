import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/dashboard" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
