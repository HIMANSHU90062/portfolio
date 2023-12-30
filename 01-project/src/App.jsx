import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
const App = () => {

  const [mode , setMode] = useState('dark');
  const toggleMode = ()=>{
    if (mode ==='dark'){
      setMode('light');
    }
    else{
      setMode('dark');
    }
  }
  return (
    <>
   <Navbar title="text game" mode={mode} toggleMode ={toggleMode}/>

   <div className="container">
    <TextForm heading ="Enter the text below"/>
   </div>
    </>
  )
}

export default App