import React from 'react';
import { useContext, useEffect } from 'react';
import noteContext from '../context/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';

function Notes() {
    const context = useContext(noteContext);
    const {notes,  getNotes} = context;
    useEffect(() => {
      getNotes();

    }, []);


  return (
    <>
    <AddNote />
    <div className="container">
    <div className="row my-3">
        {notes.map(e => <div className="col-sm-4" key={e._id}><Noteitem note={e}/></div>)}
        
    </div>
    </div>
    
    </>
    
  )
}

export default Notes
