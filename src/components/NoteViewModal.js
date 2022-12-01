import React, { useContext, useState } from "react";
import noteContext from '../context/noteContext';

export default function NoteViewModal(props) {

  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        right: "0",
        width: "100vw",
        height: "100vh",
        top: "0",
        bottom: "0",
        zIndex: "1",
        background: "rgba(0, 0, 0, 0.2)",
        "backdrop-filter": "blur(3px)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{       
        
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "15px",
          height: "90vh",
          maxWidth: "500px" ,
          backgroundColor : "white",
          border: "2px solid blue",        
          borderRadius: "2px",            
          padding: "0px",
          boxSizing: "border-box",
          overflow: "auto auto",
          padding: "15px"
        
        }}
      >       

        <div style={{"textAlign": "right", "position": "absolute", "right": "30px"}}>
        <button type="button" onClick={() => {props.setVisible(false)}} 
        class="btn btn-secondary btn-sm">Close</button>  
        </div>

        <h1>{props.note.title}</h1>
        <div style={{ "height": "85%", "boxSizing": "border-box", "paddingLeft": "10px" }}
         dangerouslySetInnerHTML={{"__html": props.note.description}}></div>

       
       
       
      </div>
    </div>
  );
}



/*




*/