
import './App.css';

import React , {useState}from 'react';
import Main from './components/Main';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Services from './components/services/Services';
import Register from './components/register/Register';
import ServiceDetails from './components/serviceDetails/ServiceDetails';
import ServiceCard from './components/serviceCard/ServiceCard';
import NewForm from './components/newForm/NewForm';




function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [toggleDark, settoggleDark] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: toggleDark ? "dark" : "light",
    },
  });

  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };

  const PrivateRoutes = () => {
return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>
}

const RestrictedRoutes = () => {
  return <>{!isAuth ? <Outlet /> : <Navigate to="/services" />}</>
  }
  return (
    <ThemeProvider theme={darkTheme}>
    

    

    <div className="App">
   <Navbar setIsAuth={setIsAuth} 
   toggleDark={toggleDark} 
   settoggleDark={settoggleDark}
   handleModeChange={handleModeChange}
   />
 <Routes>
  <Route path="/" element={<Main/>}></Route>

  <Route element={<PrivateRoutes />}>
  <Route path="/services" element={<Services/>}/>
   </Route>

   <Route element={<RestrictedRoutes />}>
   <Route path="/add" element={<NewForm />}></Route>
   <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
    </Route>


  
  <Route path="/register" element={<Register/>}></Route>
  
  
  <Route path="/services/:id" element={<ServiceDetails/>}></Route>
  <Route path="/servicecard" element={<ServiceCard/>}></Route>
 </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
