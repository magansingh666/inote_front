import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notes1 = [{"_id":"sssss",
     "user":"456",
     "title":"title1", 
     "description": "dddddd", 
     "tag":"ddddd", 
     "detail":"dddddd"}, 
     {"_id":"88888",
     "user":"ssss",
     "title":"title2", 
     "description": "dddddd", 
     "tag":"ddddd", 
     "detail":"dddddd"}];


    const [notes, setNotes] = useState(notes1);

   
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
         {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;


/*
an imp reference 
https://stackoverflow.com/questions/57175248/how-props-children-works-on-a-react-component
*/
