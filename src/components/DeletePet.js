import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeletePet = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetchPets();
    }, []);

    const fetchPets = () => {
        axios.get('http://localhost:5000/api/pets')
            .then(response => {
                setPets(response.data);
            })
            .catch(error => {
                console.error('Error fetching pets:', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/pets/${id}`)
            .then(response => {
                console.log(response.data);
                // Remove the deleted pet from the list
                setPets(pets.filter(pet => pet.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the pet:', error);
            });
    };

    return (
        <div className='bg-gradient-to-br from-blue-200 to-green-200'>
            <div className="container mx-auto ">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pets.map(pet => (
                        <div key={pet.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className="w-full h-56 object-cover object-center rounded-t-lg" src={pet.pic} alt={pet.name} />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{pet.name}</h2>
                                <p className="text-gray-700">{pet.description}</p>
                                <div className="mt-4 flex justify-center">
                                    <button onClick={() => handleDelete(pet.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeletePet;
