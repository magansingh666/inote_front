import React, { useContext, useState } from "react";
import noteContext from '../context/noteContext';
import Edit4 from "./Edit4";

export default function Edit1(props) {
    const [data , setData] = useState({"title": props.note.title, "description": props.note.description});
    const context = useContext(noteContext);
    const {editNote} = context;

    const handleDataChange = (e) => {
        console.log(e.target.name);
        setData(data => {return {...data, [e.target.name] : e.target.value}})
        console.log(data);
    }

    const handleDescriptionChange = (value) => {
      setData(data => {return {...data, "description" : value}});

    }

    const handleDoneClick = (e) => {
        e.preventDefault();
        editNote(props.note._id, data.title, data.description);
         props.open(null);
    }


  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        right: "0",
        width: "100%",
        height: "100%",
        top: "0",
        bottom: "0",
        zIndex: "1",
        background: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(3px)",
      }}
    >
      <div
        style={{
        
          margin: "10px auto",
          maxWidth : "450px",
          background: "white",
          border: "2px solid blue",
          borderRadius: "2px",
          maxHeight : "80vh",
          padding: "15px",
          overflow: "auto"
        }}
      >
        <form onChange={handleDataChange}>
          <div className="form-group">
           
            <input 
              type="text"
              name="title"              
              value={data.title}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=""
            />
          </div>
          <div className="form-group">
           
          </div>
          
          <Edit4 onChange={handleDescriptionChange} initial={data.description}/>

          
          
          <div className="text-right">
          <button
            type="submit"
            onClick={handleDoneClick}
            className="btn btn-primary my-2"            
          >
            Done
          </button>

          </div>

         
        </form>
      </div>
    </div>
  );
}



/*

 <label for="exampleInputPassword1">Content</label>
            <textarea 
            name="description" 
            value={data.description}
            className="form-control" 
            id="exampleInputPassword1" />

*/