/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom';
import Fade from '@mui/material/Fade';

//components
import Header from './Components/Header.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';


function App() {









  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
