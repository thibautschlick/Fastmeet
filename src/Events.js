import React, { useState } from "react";
import  Calendar from "react-calendar"; 
import { render } from "react-dom";
import Form from "./Form";
import Welcome from "./Welcome";
import Clock from "./Clock";
import Membership from "./Membership";
import LoginControl from "./LoginControl";
import ListEvents from "./ListEvents";
import NumberList from "./NumberList";
import FavoriteEventForm from "./FavoriteEventForm";
import Reservation from "./Reservation";
import FileInput from "./FIleInput";
import Glossary from "./Glossary";
import Count from"./Count.js";
import FavoriteEvents from "./FavoriteEvents";
// import FriendStatus from "./FriendStatus";
import Counter from "./Counter";
import TodoList from "./TodoList";


function Events() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
   
   
   
      <h1 className='text-center'>React Calendar</h1>
      <div className='react-calendar'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      {/* <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" /> */}
        <Welcome title="Parties"/>
        <Welcome title="Join Events like festivals, sports,cultural"></Welcome>
        <Welcome title="Create your own event"></Welcome>
        {/* <Clock date={new Date()}/> */}
        <Membership/>
        <LoginControl/>
        <ListEvents/>
        <NumberList/>
        <Form/>
        <br/>
        <br/>
        <FavoriteEventForm/>
        <br/>
        <br/>
        <Reservation/>
        <br/>
        <br/>
        <FileInput/>
        <br/>
        <br/>
        <Glossary/>
        <br/>
        <br/>
        <Count/>
        <br/>
        <br/>
        <FavoriteEvents/>
        <br/>
        <br/>
        <br/>
        <Counter/>
        <br/>
        <br/>
        <TodoList/>
    
        
     
    </div>
  );
}


export default Events;
