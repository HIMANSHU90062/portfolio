import propTypes from 'prop-types';
import React, { useState } from 'react';

const Navbar = (props) => {
// use state for button

 const[btn, setBtn] = useState("Enable light mode");
 const changeTxt = ()=>{
  if (btn ==="Enable light mode"){
    setBtn('light mode');
  }
  else{
    setBtn('Enble dark mode');
  }
 }
 
 
  return (
    <>
     <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode ==='light'? 'dark': 'light'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item text-${props.mode ==='light'? 'dark': 'light'}`">
          <a className={`nav-link active text-${props.mode ==='light'? 'dark': 'light'}` } aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} onChange={changeTxt} id="flexSwitchCheckDefault  " />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btn}</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
Navbar.propTypes ={
  title: propTypes.string,
}
Navbar.defaulpropTypes = {
  title:"Navbar",
  home : "about",
 }