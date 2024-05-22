import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black/80 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold hover:text-yellow-300 transition duration-300">Pet Adoption</Link>
                <div className="flex items-center">
                    <Link to="/" className="text-white mr-6 text-lg hover:text-yellow-300 transition duration-300">Home</Link>
                    <Link to="/admin" className="text-white text-lg hover:text-yellow-300 transition duration-300">Admin</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;