import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ReactForm01 from './ReactForm01';

function App() {
  // //const for fields
  // const [name, setName] = useState("");
  // const [num, setNum] = useState();
  // const [msg, setMsg] = useState("");
  // const [role, setRole] = useState();


  // const [final, setFinal] = useState("");

  // // handleSubmit
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setFinal(`Hello ${role} ${name} Your Form Submitted Successfully!!`)
  //   setName("");
  //   setNum("");
  //   setMsg("");
  //   setRole("");
  // }

  return (
    // <div>
    //   <form>

    //     {/* Name */}
    //     <lable>Enter your Name: </lable>
    //     <input type="text" value={name} onChange={(event) => { setName(event.target.value) }} />
    //     <br /><br />
    //     {/* Phone No */}
    //     <lable>Enter your Phone No: </lable>
    //     <input type="number" value={num} onChange={(event) => { setNum(event.target.value) }} />
    //     <br /><br />
    //     {/* Message */}
    //     <lable>Feedback : </lable>
    //     <textarea value={msg} onChange={(event) => { setMsg(event.target.value) }} placeholder="Enter your feedback" />
    //     <br /><br />
    //     {/* select */}
    //     <lable>Role : </lable>
    //     <select value={role} onChange={(event) => { setRole(event.target.value) }}>
    //       <option value="none">--Select--</option>
    //       <option value="Developer">Developer</option>
    //       <option value="Designer">Designer</option>
    //       <option value="Manager">Manager</option>
    //     </select>
    //     <br /><br />

    //     <button type="submit" onClick={handleSubmit}>Submit</button>
    //   </form>

    //   <p>{final}</p>
    //   <p>Name: {name}</p>
    //   <p>Phone No: {num}</p>
    //   <p>Rple: {role}</p>
    // </div>
    <ReactForm01/>
  );  
}

export default App;
