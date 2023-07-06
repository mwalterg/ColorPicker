import React from 'react';
import './index.css'
import { useState } from 'react'
// Write your Color component here
const Color = ({color}) => {
  return <div className={color}></div>
  
}
const App = () => {
  return (
    
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">
        <Color color="blue" />
        <Color color="orange" />
        <Color color="green" />
        </div>
    </div>
  );
};

export default App;
