import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button, TextInput } from 'react-native';
import AddNote from './AddNote.js'
import Note from './Note.js'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { useState } from "react";



function App() {
  var initNotes = []

  const [notes, setNotes] = useState(initNotes)
  const [textValue, onChangeText] = React.useState("Placeholder");


  const onSubmit = (event) => {
    event.preventDefault();
    const updatedNotes = [
      ...notes,
      <Note header={notes.length + 1} text={textValue} />
    ];
    setNotes(updatedNotes);
  };

  const handleChange = (event) => {
    onChangeText(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="SavedNotes" id="savedNotes">
          {notes}
        </div>
        <textarea
          editable
          multiline
          onChange={handleChange}
          class="Note-input"
        />
        <Button title="Submit" onPress={onSubmit} />
      </header>
    </div>
  );


}

export default App;