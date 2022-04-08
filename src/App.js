
import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Presentation from "./Pages/Presentation";
import Reviews from "./Pages/Reviews";
import Navbar from "./Pages/Navbar";


function App() {
  return (
    <Router>
      <Navbar/>
      {/* <nav>
        <Link to="/"> Home </Link>
        <Link to="/events"> Events </Link>
        <Link to="/presentation"> Presentation </Link>
        <Link to="/reviews">Reviews</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/reviews" element={<Reviews />} />
        
        <Route path="/profile/:username" element={<Events />} />
        <Route path="/profile/:username" element={<Presentation />} />
        <Route path="/profile/:username" element={<Reviews />} />     
      </Routes>  
    </Router>
  );
}

export default App;
