import React, { useState } from 'react';
import { useContext, useEffect} from 'react';
import noteContext from '../context/noteContext';
import ShowNote from './ShowNote';
import Noteitem from './Noteitem';
import EditNote from './EditNote';
import Edit1 from './Edit1';
import Edit3 from './Edit3';
import Edit4 from './Edit4';

function Notes() {
    const context = useContext(noteContext);
    const {notes,  getNotes} = context;
    const [update, setUpdate] = useState(null);

    useEffect(() => {
      getNotes();
    }, []);

    function ShowUpdateUi(note) {      
      
      setUpdate(note);

    }


  return (
    <>    
    <ShowNote />   
    {update && <Edit1 note={update} open={setUpdate}/>} 

  
  
   
    <div className="container">
    <div className="row my-3">
      {notes.map(e => <div className="col-sm-4" key={e._id}><Noteitem note={e} update={ShowUpdateUi}/></div>)}        
    </div> 
    </div>    
    </>
    
  )
}

export default Notes
