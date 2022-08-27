import "./App.css";
import React from 'react'
import Principal from "./Pages/Principal";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Components/Skills";
import Contacto from "./Pages/Contacto";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="App">
      <Principal />
      <AboutMe />
      <Skills />
      <Contacto />
      <Footer/>
    </div>
  );
}

export default App;
