import React, {useContext, useState} from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import noteContext from "../context/noteContext"
import Edit4 from './Edit4';


const ShowNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title: "", description: "", tag: "default"})
    

    const handleClick = (e)=>{
        e.preventDefault();      
        addNote(note.title, note.description, note.tag);
    }


    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    const onQuillEditorChange = (v)=>{
        setNote({...note, "description": v})
    }

 


    return (
        <div className="container my-3">
            <h2>Add New Note</h2>  
            
            <form className="my-3">
                <div className="mb-3">                    
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" 
                    onChange={onChange} placeholder="Title goes here..." /> 
                </div>

                <div className="mb-3">                    
                    <Edit4 onChange={onQuillEditorChange}/>                       
                </div>


               
                         
                <button type="submit" className="btn btn-primary" onClick={handleClick}>SAVE</button>
            </form>
        </div>
    )
}

export default ShowNote



/*
  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" className="form-control" id="description" name="description" rows={10}
                    onChange={onChange} />
                </div> 




                <label htmlFor="title" className="form-label">Title</label>
                <label htmlFor="description" className="form-label">Description</label>

*/