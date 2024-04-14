import React from 'react';
import { Link } from 'react-router-dom'; // For links

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-white mb-4">Oops!</h1>
                <h2 className="text-3xl font-semibold text-white mb-8">404 - Page Not Found</h2>
                <p className="text-lg text-white mb-8">We couldn't find the page you're looking for. But don't worry, you can continue your journey by clicking on one of the options below:</p>
                <div>
                    <Link to="/" className="text-lg text-white bg-yellow-500 hover:bg-yellow-600 px-8 py-4 rounded-md mr-4 transition duration-300 ease-in-out">Go to Home</Link>
                    <Link to="/destinations" className="text-lg text-white border border-white hover:bg-white hover:text-blue-500 px-8 py-4 rounded-md transition duration-300 ease-in-out">Discover Destinations</Link>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;

