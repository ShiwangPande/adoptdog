import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPet = () => {
    const [pet, setPet] = useState({
        name: '',
        pic: '',
        gender: '',
        breed: '',
        age: '',
        weight: '',
        location: '',
        description: '',
        diseases: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPet({
            ...pet,
            [name]: name === 'age' ? parseInt(value, 10) : value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPet({
                    ...pet,
                    pic: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting pet data:", pet); // Debugging line
        axios.post('https://apdoptdogserver.onrender.com/api/pets', pet)
        // axios.post('http://localhost:5000/api/pets', pet)
            .then(response => {
                if (response && response.data) {
                    console.log("Response data:", response.data); // Debugging line
                    navigate('/admin');  // Redirect to admin dashboard
                } else {
                    console.error('Invalid response:', response);
                    alert('Error: Invalid response');  // Display error message
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert('Error: ' + error.message);  // Display error message
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 to-green-200 flex flex-col justify-center items-center">
            <div className="max-w-md mx-5 rounded-lg bg-white shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Add Pet</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {Object.keys(pet).map(key => (
                        key !== 'pic' && key !== 'description' ? (
                            <div key={key}>
                                <label className="block text-gray-700 text-sm font-bold mb-2">{key}</label>
                                <input
                                    type={key === 'age' ? 'number' : 'text'}
                                    name={key}
                                    value={pet[key]}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        ) : (
                            key === 'description' && (
                                <div key={key}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                                    <textarea
                                        name="description"
                                        value={pet.description}
                                        onChange={handleChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                            )
                        )
                    ))}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button type="submit" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transform transition duration-300 hover:scale-105">
                        Add Pet
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPet;
