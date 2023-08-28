import React from 'react';
import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ContactList from './components/contacts/ContactList';

function App() {

  return (
    <React.Fragment>
      <Navbar/>
      <ContactList/>
      <Routes>
        <Route path='/' element={<Navigate to='/contacts/list'/>}/>
        <Route path='/contacts/list' element={<ContactList/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
