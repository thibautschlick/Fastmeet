import React, { useState } from "react";
import  Calendar from "react-calendar"; 
import { render } from "react-dom";
import Form from "./Form";
import Welcome from "./Welcome";
import Clock from "./Clock";
import Membership from "./Membership";



function Events() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <Form/>
   
   
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
     
    </div>
  );
}


export default Events;
