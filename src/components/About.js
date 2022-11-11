import React from 'react';
import {useContext} from 'react';
import noteContext from '../context/noteContext';


function About() {
  const a = useContext(noteContext);
  return (
    <div>
      <h1>this is About component {a.state.name}</h1>
    </div>
  )
}

export default About
