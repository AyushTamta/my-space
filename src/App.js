import React from 'react';
import './App.css'; 

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ExtraCurricular from './components/ExtraCurricular';
import Contact from './components/Footer';

import Skills from './components/Skills'; 

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Skills /> 
            <Projects />
            <ExtraCurricular />
            <Contact />
            
        </div>
    );
}

export default App;
