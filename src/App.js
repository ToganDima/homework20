import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/home/HomePage';
import Publications from './components/publications/Publications';
import Photos from './components/photos/Photos';
import ContactsBook from "./components/contacts/ContactsBook";
import ContactDetails from './components/contacts/ContactDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/contacts" element={<ContactsBook />} />
            <Route path="/contacts/:username" element={<ContactDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
