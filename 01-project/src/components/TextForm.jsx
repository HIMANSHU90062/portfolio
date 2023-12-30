// import React from 'react'
import React, { useState } from 'react';
const TextForm = (props) => {
// function on click
 const handleUpclick = ()=>{
 let newText = text.toUpperCase();
 setText(newText);
}

const handleLoclick = () => {
  let newText = text.toLowerCase();
  setText(newText);
}

const handleSelect = ()=>{
  let newText = text.Select;
  setText(newText);
}

const handleClearclick = () => {
  let newText ="";
  setText(newText);
}

 const handleOnchage = (event)=>{
 setText(event.target.value);
 }
  // usestate is called arry destructuring
  const [text ,setText] = useState('');
  return (
    <>
    <div className="container">
    <h2 className='my-2'>{props.heading}</h2>
      <div className="input-group my-4">
        <textarea className="form-control" id="mybox" onChange={handleOnchage} rows="8" value={text} aria-label="With textarea"></textarea>
      </div>
      <button  onClick={handleUpclick} className="btn btn-primary mx-2">Convert to uppercase</button>
      <button onClick={handleLoclick} className="btn btn-primary mx-2">Convert to LowerCase</button>
      <button onClick={handleClearclick} className="btn btn-primary mx-2">Clear Text</button>
      <button onClick={handleSelect} className="btn btn-primary mx-2">Select text</button>

      </div>

      <div className="container">
        <h1>your text summery </h1>
        <p>{text.split(" ").length} WEORDS and {text.length} character</p>
        <p>{(0.008) * text.split(" ").length} min to read</p>
        <h4>preview</h4>
        <p>{text}</p>
      </div>
    </>

  )
}

export default TextForm