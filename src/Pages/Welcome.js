import React from 'react'
import ReactDOM from "react-dom";


// function Welcome(props) {
//     return (
//       <div>
//         <h1>Hello, {props.name}</h1>
//         <h2>Bye, {props.familyname}</h2>
//         <h3>HI my name is</h3>
//       </div>
//     );
//   }
  
//   const element = <Welcome name="Sara" familyname="tibo" />;
  
//   ReactDOM.render(document.getElementById("root"));


function Welcome(props) {
    return <h1>Join Parties {props.title}</h1>;
  }
  
  // ReactDOM.render(<Welcome color="red"/>, document.getElementById('root'));

  
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }





  export default Welcome;