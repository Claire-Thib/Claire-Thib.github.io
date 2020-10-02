import React from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import experience from "./sections/experience"
import projects from "./sections/projects"
import contact from "./sections/contact"
import pastelBackground from './pastelback.jpg';
import
import './App.css';


function App() {
  return (
   
      <div className="App">
        <Navbar />
        <Home />
        <About />
        {/* <experience />
        <projects />
        <contact /> */}


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
