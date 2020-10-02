import React from "react";
// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
// import logo from './logo.svg';
import "./App.css";
// import "./Home.css";

function App() {
  return (
    <div className="App">
      <div className="backgroundImage"></div>
      <Navbar />
      <Home />
      <About />
      <Experiences />
      <Projects />
      <Contact />

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
