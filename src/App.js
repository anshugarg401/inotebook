import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/About";
import Alert from "./components/Alert";
import Notestate from "./context/note/NoteState";
import Login from "./components/login";
import Signup from "./components/signup";
function App() {
  return (
    <>
   <Notestate>
      <Router >
        <Navbar />
        <Alert message ="this is an alert"/>
        <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        </div>
      </Router>
      </Notestate>
    </>
  );
}

export default App;
