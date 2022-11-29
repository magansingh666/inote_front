import React from "react";
import {useState, useEffect , useContext} from "react";
import noteContext from "../context/noteContext";

function EditNote(props) {
    const context = useContext(noteContext);
    const {editNote} = context;  

    const [note, setNote] = useState(props.note)   
    

    const handleClick = (e)=>{
        e.preventDefault();
        console.log("clicked on save button  "); 
        editNote(note._id, note.title, note.description);   
        
    }


    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }


  return (

    <div className="container my-3">
    <h2>Update Note</h2>
    
    <form className="my-3">
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" 
            name="title" aria-describedby="emailHelp"
            value={props.note ? note.title : ""}
            onChange={onChange} /> 
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" 
            name="description" 
            value={props.note ? note.description : ""}
            onChange={onChange} />
        </div>             
        <button type="submit" className="btn btn-primary" onClick={handleClick}>SAVE</button>
    </form>
</div>
    
    
  );
}

export default EditNote;
