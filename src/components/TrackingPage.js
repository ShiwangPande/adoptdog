import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import Timeline from './Timeline';
import News from './News';
import PieChart from './PieChart';
const TrackingPage = () => {
    const [pets, setPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState(null);
    const [loading, setLoading] = useState(true);
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

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get('https://apdoptdogserver.onrender.com/api/pets');
                setPets(response.data);
            } catch (error) {
                console.error('Error fetching pets:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

    const handlePetClick = (pet) => {
        setSelectedPet(pet);
        setPetInfo({
            name: pet.name,
            pic: pet.pic,
            gender: pet.gender,
            breed: pet.breed,
            age: pet.age,
            weight: pet.weight,
            location: pet.location,
            description: pet.description,
            diseases: pet.diseases
        });
    };

    const handleClearSelection = () => {
        setSelectedPet(null);
        setPetInfo({
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
    };

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
            } else {
                console.error('Failed to update pet info:', response.data);
            }
        } catch (error) {
            console.error('Error updating pet info:', error);
        }
    };

    return (
        <div className='bg-gray-100		 min-h-screen'>
            <div className="lg:container  mx-auto ">
                <h1 className="text-3xl underline font-bold mb-4 text-center p-4">Pet Tracking</h1>
                {loading ? (
                    <LoadingSpinner />
                ) : selectedPet ? (
                    <div className='p-4'>
                        <button onClick={handleClearSelection} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Back to List</button>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h1 className="text-3xl font-bold mb-8 text-center">Edit Pet Information</h1>
                            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">

                                {selectedPet && (
                                    <>
                                        <div className='flex flex-col lg:flex-row justify-between  p-4'>
                                            <div>
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
                                            </div>
                                            <div>
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


                                                <button type="submit" className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                                    Update Pet
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className='p-4'>
                        <h2 className="text-3xl  font-semibold mb-4">Pets in Shelter</h2>
                        <ul className='border-dotted  border-2 border-gray-500 p-2'>
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
                                {pets.map((pet) => (
                                    <li key={pet.id} onClick={() => handlePetClick(pet)} className="cursor-pointer  py-2  border-gray-200 hover:bg-gray-50 transition-colors" style={{ background: "transparent" }}>
                                        <div key={pet.id} className="bg-white p-2 rounded-lg w-36 h-48 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                            <img src={pet.pic} alt={pet.name} className="w-36 h-36 object-cover rounded-t-lg" />
                                            <div className="mt-0">
                                                <h2 className="text-2xl text-center font-semibold text-gray-800">{pet.name}</h2>
                                                {/* <p className="text-gray-600 mt-2">{pet.description}</p> */}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </div>
                        </ul>
                    </div>
                )}
                <div className='mt-10 flex flex-col lg:flex-row justify-between lg:w-[85vw]'>
                    <div className=' mx-auto lg:w-[50%]'>
                        <Timeline />
                        <div className=''>
                            <h1 className="text-3xl p-4 font-semibold ">Euthanasia Totals by Date</h1>
                            <div className="flex justify-center mx-0 mt-8">
                                <PieChart />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[50%] p-2 '>
                        <News />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackingPage;
