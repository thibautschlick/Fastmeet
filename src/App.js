import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
// import Header from './components/Header';
import Events from './components/Events/Events';
import Date from './components/Date/Date';
import Accueil from './components/Accueil/Accueil';
import { BrowserRouter, Route, Routes, Link,useParams } from 'react-router-dom';




function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/date">Date</Link></li>
        <li><Link to="/accueil">Accueil</Link></li>
        <li><Link to="/events/Category_events">Category Events</Link></li>
        <li><Link to="/events/Notations">Notations</Link></li>

      </ul>
    </nav>
    
      <Routes> 
        <Route path="/Date"> 
        {/* <Date/>  */}
        </Route> 
    
        <Route exact path="/events"> 
        {/* <Events/>  */}
        </Route> 
        
        {/* <Route path="/events/:type"> 
        <Events/> 
        
        </Route> */}
        

        <Route path="/events" element={<Events/>}/>
    
          
        </Routes>
    </BrowserRouter>


    </div>
  );
}



export default App;
