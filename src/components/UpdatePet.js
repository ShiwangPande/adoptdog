import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPet = () => {
    const navigate = useNavigate();
    const [petData, setPetData] = useState([]);
    const [selectedPet, setSelectedPet] = useState('');
    const [petInfo, setPetInfo] = useState({
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

    // Fetch pet data from the server
    useEffect(() => {
        axios.get('https://apdoptdogserver.onrender.com/api/pets')
            .then(response => {
                console.log('Pet data:', response.data); // Log the received pet data
                setPetData(response.data);
            })
            .catch(error => {
                console.error('Error fetching pet data:', error);
            });
    }, []);

    // Handle pet selection from dropdown
    const handlePetSelect = (e) => {
        const petId = e.target.value;
        setSelectedPet(petId);
        // Find the selected pet's information
        const selectedPetInfo = petData.find(pet => pet.id === parseInt(petId));
        setPetInfo(selectedPetInfo);
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            // Handle file input separately
            const file = files[0];
            const reader = new FileReader();

            reader.onload = () => {
                setPetInfo(prevState => ({
                    ...prevState,
                    pic: reader.result
                }));
            };

            reader.readAsDataURL(file);
        } else {
            // For other input types
            setPetInfo(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Check if a pet is selected
            if (!selectedPet) {
                console.error('No pet selected for update');
                return;
            }

            // Send updated pet info to the server
            const response = await axios.put(`https://apdoptdogserver.onrender.com/api/pets/${selectedPet}`, petInfo);

            // Check if the update was successful
            if (response.status === 200) {
                console.log('Pet info updated successfully');
                // Redirect to home page after successful update
                navigate('/');
            } else {
                console.error('Failed to update pet info:', response.data);
            }
        } catch (error) {
            console.error('Error updating pet info:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 to-green-200 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-8 text-center">Edit Pet Information</h1>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="petSelect" className="block text-gray-700 text-sm font-bold mb-2">Select Pet:</label>
                        <select
                            id="petSelect"
                            name="petSelect"
                            value={selectedPet}
                            onChange={handlePetSelect}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select a pet...</option>
                            {petData.map(pet => (
                                <option key={pet.id} value={pet.id}>{pet.name}</option>
                            ))}
                        </select>
                    </div>
                    {selectedPet && (
                        <>
                            {/* Display editable fields */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={petInfo.name}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Picture:</label>
                                <input
                                    type="file"
                                    name="pic"
                                    onChange={handleChange}
                                    accept="image/*"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />

                                {petInfo.pic && (
                                    <img src={petInfo.pic} alt={petInfo.name} className="mt-2 h-32 rounded object-cover" />
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={petInfo.gender}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Breed:</label>
                                <input
                                    type="text"
                                    name="breed"
                                    value={petInfo.breed}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Age:</label>
                                <input
                                    type="text"
                                    name="age"
                                    value={petInfo.age}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Weight:</label>
                                <input
                                    type="text"
                                    name="weight"
                                    value={petInfo.weight}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={petInfo.location}
                                    onChange={handleChange}
                                    className="shadow appearance-none border roundedw-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                                {/* Change input to textarea for description */}
                                <textarea
                                    name="description"
                                    value={petInfo.description}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Diseases:</label>
                                <input
                                    type="text"
                                    name="diseases"
                                    value={petInfo.diseases}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Update Pet
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default EditPet;

