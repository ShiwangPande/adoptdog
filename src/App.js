import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import AddPet from './components/AddPet';
import UpdatePet from './components/UpdatePet';
import DeletePet from './components/DeletePet';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add" element={<AddPet />} />
        <Route path="/admin/update" element={<UpdatePet />} />
        <Route path="/admin/delete" element={<DeletePet />} /> {/* Ensure the path includes the ID parameter */}

      </Routes>
    </Router>
  );
}

export default App;
