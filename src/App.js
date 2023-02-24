import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/home/HomePage';
import Publications from './components/publications/Publications';
import Photos from './components/photos/Photos';
import ContactsBook from "./components/contacts/ContactsBook";
import ContactDetails from './components/contacts/ContactDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="publications" element={<Publications />} />
          <Route path="photos" element={<Photos />} />
          <Route path="contacts" element={<ContactsBook />} />
          <Route path="contacts/:username" element={<ContactDetails />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
