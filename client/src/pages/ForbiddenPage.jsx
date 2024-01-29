// ForbiddenPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ForbiddenPage = () => {
  return (
    <div className="container mx-auto my-10 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
      <p className="text-gray-600">
        This page is restricted. Please log in with the appropriate credentials to continue.
      </p>
      <Link to="/" className="text-blue-700 font-semibold hover:underline mt-4 inline-block">
        Login
      </Link>
    </div>
  );
};

export default ForbiddenPage;
