import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { useState } from "react";
// import Option from '@mui/material/Option';
// import Label from '@mui/material/Label';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';


class FavoriteEventForm extends React.Component  {
    constructor(props) {
        super(props);
        this.state ={value:'parties'};

        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        alert('Your favorite event is: ' + this.state.value);
        e.preventDefault();
    };


render() {
    return(
        <form onSubmit= {this.handleSubmit}>
            <label>
                Choose your favorite event:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="gamesparties">Games Parties</option>
                    <option value="musicalparties">Musical Parties</option>
                    <option value="sport">Sport</option>
                    <option value="hiking">Hiking</option>
                </select>
                
            </label>
            <input type="submit" value="send"/>
           <br/>
           <br/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />

            
        </form>    

        
    );
}

}

export default FavoriteEventForm;