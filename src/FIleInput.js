import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { useState } from "react";


class FileInput extends React.Component {
    constructor(props) {
      // highlight-range{3}
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
    }
    handleSubmit(e) {
      // highlight-range{3}
      e.preventDefault();
      alert(
        `Fichier sélectionné - ${
          this.fileInput.current.files[0].name
        }`
      );
    }


render () {
    return (
        <form onSubmit=
        {this.handleSubmit}>
        <label>
            Send a file:
            <input type="file" ref={this.fileInput}/>
        </label>
        <br/>
        <button type="submit">Send</button>
        </form>
        );
    }
}




export default FileInput;