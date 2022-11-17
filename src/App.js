
import './App.css';
import React from 'react';
// import Login from './components/login/Login'
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Services from './components/services/Services';
import Register from './components/register/Register';
import ServiceDetails from './components/serviceDetails/ServiceDetails';
import ServiceCard from './components/serviceCard/ServiceCard';
import NewForm from './components/newForm/NewForm';

function App() {
  return (
    <div className="App">
   <Navbar/>
 <Routes>
  <Route path="/" element={<Main/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/register" element={<Register/>}></Route>
  <Route path="/services" element={<Services/>}></Route>
  <Route path="/add" element={<NewForm />}></Route>
  <Route path="/services/:id" element={<ServiceDetails/>}></Route>
  <Route path="/servicecard" element={<ServiceCard/>}></Route>
 </Routes>
    </div>
  );
}

export default App;
