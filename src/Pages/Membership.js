import React from 'react'
import ReactDOM from "react-dom";
import { useState } from "react";


class Membership extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type:  ['test'],
            year: [2022],
            month:['January','February'],
            day:['Monday']
        };
    }
    changeYear =() => {
        this.setState({year:2023});
    }
    changeMonth =() => {
        this.setState({month: 'March'});
    }


render () {
    return (
        <div>
            <h1> Choose {'My membership' } </h1>
            <p>
                It is {this.state.year}
                {/* {this.state.month} */}
                from {this.state.day}.
            </p>
            <p>Choose the month {this.state.month} you want to use the App</p>
            <p></p>
            <button 
                type="button"
                onClick={this.changeYear}>
                Change membership
            </button>
            <button 
                type="button"
                onClick={this.changeMonth}>
                Change membership month
            </button>
            
        </div>
    );
    }
}



export default Membership;