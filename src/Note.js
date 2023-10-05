import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button } from 'react-native';
import { useState } from "react";


function Note(props) {
  const { header, text } = props;
  const [toggleValue, setToggleValue] = useState(false)

  const handleClick = (event, text) => {
    setToggleValue(!toggleValue);
  };

  return (
    <div className="Note">
      <header className="Note-header">
        <div className="Note-toggle">
          <div className="Note-heading" onClick={handleClick}>
            <i className={toggleValue ? "fa fa-solid fa-chevron-down" : "fa fa-solid fa-chevron-right"} aria-hidden="true"></i>
            <div className="Note-title">Note #{header} </div>
          </div>
          <div className="Note-text" hidden={!toggleValue}>{text}</div>
        </div>
      </header>
    </div>
  );
}

export default Note;