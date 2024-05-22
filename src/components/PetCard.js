// src/components/PetCard.js

import React from 'react';

const PetCard = ({ pet }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 mx-auto">
        <img className="w-full" src={pet.pic} alt={pet.name} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{pet.name}</div>
            <p className="text-gray-700 text-base"><strong>Breed:</strong> {pet.breed}</p>
            <p className="text-gray-700 text-base"><strong>Age:</strong> {pet.age} years</p>
            <p className="text-gray-700 text-base"><strong>Weight:</strong> {pet.weight}</p>
            <p className="text-gray-700 text-base"><strong>Location:</strong> {pet.location}</p>
            <p className="text-gray-700 text-base">{pet.description}</p>
            <p className="text-gray-700 text-base"><strong>Diseases:</strong> {pet.diseases}</p>
        </div>
    </div>
);

export default PetCard;
