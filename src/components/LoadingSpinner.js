// LoadingSpinner.js
import React from 'react';
import DogSpinner from './dog-spinner.gif'; // Add a dog-themed spinner GIF in your project

const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src={DogSpinner} alt="Loading..." className="w-24 h-24" />
            <p className="mt-4 text-lg text-gray-700">Loading, please wait...</p>
        </div>
    );
};

export default LoadingSpinner;
