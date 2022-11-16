import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
  const host = "http://localhost:5001"
  const user_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2OWQ5OWYwNTYxZDdkZjVkM2VhODEyIn0sImlhdCI6MTY2Nzk5MzE4Mn0.zK35KQO0VXajh706GblFUjMpatASLewMHiFkEEac4po";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)  
  //http://localhost:5001/api/note/fetchallnotes
  
  const getNotes = async () => {
    console.log("making api call to fetch all notes");
    const response = await fetch(`${host}/api/note/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": user_token,
    }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }



    

      const deleteNote = (id)=>{
        
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }

      const addNote = async (title, description, tag) => {
        
        const response = await fetch(`${host}/api/note/addnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": user_token
        
        },
          body: JSON.stringify({title, description, tag})
        });

        console.log("Adding a new note")
        let a = await response.json();
        console.log(a);
        setNotes(notes.concat(a))

    }



      // Edit a Note
      const editNote = (id, title, description, tag)=>{

      }

   
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
         {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


/*
an imp reference 
https://stackoverflow.com/questions/57175248/how-props-children-works-on-a-react-component
*/
