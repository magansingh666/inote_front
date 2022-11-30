import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  let host = process.env.REACT_APP_HOST;
  const user_token1 =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2OWQ5OWYwNTYxZDdkZjVkM2VhODEyIn0sImlhdCI6MTY2Nzk5MzE4Mn0.zK35KQO0VXajh706GblFUjMpatASLewMHiFkEEac4po";

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const [updating, setUpdating] = useState(null);
  const [alertMessage, setAlertMessage] = useState("Alert Message");
  const [user_token, setUserToken] = useState("");

  const getNotes = async () => {
    console.log("making api call to fetch all notes");
    const response = await fetch(`${host}/api/note/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": user_token,
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/note/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": user_token,
      },
    });
    const json = response.json();
    console.log(json);

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/note/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": user_token,
      },
      body: JSON.stringify({ title, description, tag }),
    });

    console.log("Adding a new note");
    let a = await response.json();
    console.log(a);
    setNotes(notes.concat(a));
  };

  // Edit a Note
  const editNote = async (id, title, description) => {
    console.log("Edit note is being called", id, title, description);
    
    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": user_token,
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();

    // Logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes)); 
  

    for (let index = 0; index < newNotes.length; index++) {
      console.log("loop rybbub ");
      if (newNotes[index]._id === id) {
        console.log("match found ");
        newNotes[index].title = title;
        newNotes[index].description = description;
      }
    
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        editNote,
        getNotes,
        setUpdating,
        updating,
        alertMessage,
        setAlertMessage,
        setUserToken,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
