import React, { useContext, useState } from "react";
import noteContext from '../context/noteContext';

export default function NoteViewModal(props) {

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
        "backdrop-filter": "blur(3px)",
      }}
    >
      <div
        style={{
          zIndex: 2,
          margin: "10px auto",
          width: "450px",
          background: "white",
          border: "2px solid blue",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "stretch",
          borderRadius: "15px",
          height: "500px",         
          padding: "15px",
        }}
      >

        <div>
        <div style={{"textAlign": "right"}}>
        <button type="button" onClick={() => {props.setVisible(false)}} 
        class="btn btn-secondary btn-sm">Close</button>  
        </div>

        <h1>{props.note.title}</h1>
        <div style={{"overflow": "scroll", "height": "300px"}}
         dangerouslySetInnerHTML={{"__html": props.note.description}}></div>

        </div>

       
       
       
      </div>
    </div>
  );
}



/*




*/