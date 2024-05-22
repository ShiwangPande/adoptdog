import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (password === 'admin123') {
            setAuthenticated(true);
        } else {
            alert('Invalid password!');
        }
    };

    const handleLogout = () => {
        setAuthenticated(false);
        setPassword(''); // Clear password field on logout
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 to-green-200 flex flex-col justify-center items-center">
            {!authenticated ? (
                <div className="max-w-md mx-5 rounded-lg bg-white shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-8 text-center">Admin Login</h1>
                    <div className="mb-4">
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button onClick={handleLogin} className="block w-full bg-black/80 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login
                    </button>
                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-8 text-black">Admin Dashboard</h1>
                    <div className="flex justify-center items-center space-x-4 mb-8">
                        <Link to="/admin/add" className="button-blue inline-block py-2 px-4 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Add Pet
                        </Link>
                        <Link to="/admin/update" className="button-green inline-block py-2 px-4 text-black font-semibold rounded-lg shadow-md hover:bg-green-700/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                            Update Pet
                        </Link>
                        <Link to="/admin/delete" className="button-red inline-block py-2 px-4 text-black font-semibold rounded-lg shadow-md hover:bg-red-700/60 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                            Delete Pet
                        </Link>
                    </div>
                    <button onClick={handleLogout} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Admin;
