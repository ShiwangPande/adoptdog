import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrackingPage = () => {
    const [pets, setPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState(null);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get('https://apdoptdogserver.onrender.com/api/pets');
                setPets(response.data);
            } catch (error) {
                console.error('Error fetching pets:', error);
            }
        };

        fetchPets();
    }, []);

    const handlePetClick = (pet) => {
        setSelectedPet(pet);
    };

    const handleClearSelection = () => {
        setSelectedPet(null);
    };

    return (
        <div className='bg-gradient-to-br from-blue-200 to-green-200 min-h-screen'>
            <div className="container  mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Pet Tracking</h1>
                {selectedPet ? (
                    <div>
                        <button onClick={handleClearSelection} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Back to List</button>
                        <h2 className="text-xl font-semibold">{selectedPet.name}</h2>
                        <p className="text-gray-600">Gender: {selectedPet.gender}</p>
                        <p className="text-gray-600">Age: {selectedPet.age}</p>
                        <p className="text-gray-600">Breed: {selectedPet.breed}</p>
                        <p className="text-gray-600">Weight: {selectedPet.weight}</p>
                        <p className="text-gray-600">Location: {selectedPet.location}</p>
                        <p className="text-gray-600">Description: {selectedPet.description}</p>
                        <p className="text-gray-600">Diseases: {selectedPet.diseases}</p>

                    </div>
                ) : (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Pets in Shelter</h2>
                        <ul>
                            {pets.map((pet) => (
                                <li key={pet.id} onClick={() => handlePetClick(pet)} className="cursor-pointer py-2 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                    {pet.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackingPage;
