// src/components/PetList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from './PetCard';

const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('/api/pets')
            .then(response => setPets(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pets.map(pet => <PetCard key={pet.id} pet={pet} />)}
        </div>
    );
};

export default PetList;
