import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const DogModal = ({ dog, onClose, onAdopt }) => {
    if (!dog) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white p-6 rounded-md shadow-lg max-w-md w-full">
                <button
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500 focus:outline-none"
                    onClick={onClose}
                >
                    &times;
                </button>
                <img src={dog.pic} alt={dog.name} className="w-full h-64 object-cover rounded-md mb-4" />
                <h2 className="text-3xl font-bold text-center mb-2">{dog.name}</h2>
                <p className="text-gray-600 mb-2"><strong>Breed:</strong> {dog.breed}</p>
                <p className="text-gray-600 mb-2"><strong>Gender:</strong> {dog.gender}</p>
                <p className="text-gray-600 mb-2"><strong>Age:</strong> {dog.age}</p>
                <p className="text-gray-600 mb-2"><strong>Weight:</strong> {dog.weight}</p>
                <p className="text-gray-600 mb-2"><strong>Location:</strong> {dog.location}</p>
                <p className="text-gray-600 mb-2"><strong>Description:</strong> {dog.description}</p>
                <p className="text-gray-600 mb-2"><strong>Diseases:</strong> {dog.diseases}</p>
                <button
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
                    onClick={() => onAdopt(dog)}
                >
                    Adopt
                </button>
            </div>
        </div>
    );
};

const ContactModal = ({ contactInfo, onClose }) => {
    if (!contactInfo) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white p-6 rounded-md shadow-lg max-w-md w-full">
                <button
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500 focus:outline-none"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-2"><strong>Owner:</strong> {contactInfo.owner}</p>
                <p className="text-gray-600 mb-2"><strong>Phone:</strong> {contactInfo.phone}</p>
                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                    onClick={() => window.open(`tel:${contactInfo.phone}`)}
                >
                    Call Owner
                </button>
            </div>
        </div>
    );
};

const Adopt = () => {
    const [dogs, setDogs] = useState([]);
    useEffect(() => {
        fetchPets();
    }, []);

    const fetchPets = () => {
        axios.get('https://apdoptdogserver.onrender.com/api/pets')
            .then(response => {
                setDogs(response.data);
            })
            .catch(error => {
                console.error('Error fetching pets:', error);
            });
    };
    const [selectedDog, setSelectedDog] = useState(null);
    const [contactInfo, setContactInfo] = useState(null);

    const handleLearnMore = (dog) => {
        setSelectedDog(dog);
    };

    const handleCloseModal = () => {
        setSelectedDog(null);
        setContactInfo(null);
    };

    const handleAdopt = (dog) => {
        setContactInfo({
            owner: 'John Doe',
            phone: '123-456-7890'
        });
    };

    return (
        <div className='bg-gradient-to-br from-blue-200 to-green-200 min-h-screen'>
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold mb-8 text-center text-black/80 ">Available Dogs for Adoption</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dogs.map(dog => (
                        <div key={dog.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <img src={dog.pic} alt={dog.name} className="w-full h-64 object-cover rounded-t-lg" />
                            <div className="mt-4">
                                <h2 className="text-2xl font-semibold text-gray-800">{dog.name}</h2>
                                <p className="text-gray-600 mt-2">{dog.description}</p>
                                <button
                                    className="mt-4 bg-black/80 text-white px-4 py-2 rounded-md hover:bg-black transition-colors duration-300"
                                    onClick={() => handleLearnMore(dog)}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedDog && (
                    <DogModal
                        dog={selectedDog}
                        onClose={handleCloseModal}
                        onAdopt={handleAdopt}
                    />
                )}
                {contactInfo && (
                    <ContactModal
                        contactInfo={contactInfo}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </div>
    );
};

export default Adopt;
