import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Hobbies from './Pages/Hobbies';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Qualification from './Pages/Qualification'; 
import Cerification from './Pages/Cerification';
import ContactMe from './Pages/ContactMe';
import Workshop from './Pages/Workshop';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ="About" element={<About/>}/> 
        <Route path ="Hobbies" element={<Hobbies/>}/>
        <Route path ="Skills" element={<Skills/>}/>
        <Route path ="Experience" element={<Experience/>}/>
        <Route path ="Qualification" element={<Qualification/>}/>
        <Route path ="Cerification" element={<Cerification/>}/> 
        <Route path ="ContactMe" element={<ContactMe/>}/>
        <Route path ="Workshop" element={<Workshop/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
