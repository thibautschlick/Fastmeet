import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { useState } from "react";







function FavoriteEvents() {
    const [events,setEvents] = useState("Parties");

    return(
        <>
        <h1> My favorite event is {events}!</h1>
        <button
            type="button"
            onClick={() => setEvents("museum")}>
            Museum
        </button>
        <button
            type="button"
            onClick={() => setEvents("Parties")}>
            Parties
        </button>
        <button
        type="button"
        onClick={() => setEvents("sports")}>
            Sports
        </button>
        <button
            type="button"
            onClick={() =>setEvents("hiking")}>
                Hiking
        </button>             
        </>
    );
}

export default FavoriteEvents;