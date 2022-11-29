import React, { useContext, useEffect } from "react";
import noteContext from "../context/noteContext";

function Alert(props) {
  

  const context = useContext(noteContext);
  const {alertMessage, setAlertMessage} = context;
  useEffect(() => {
    setTimeout(() => {
      setAlertMessage(null);
    }, 2000);


  }, []);
  
  return (
    <div className={alertMessage ? "d-block" : "d-none"} style={{"zIndex" : 2, "position" : "fixed", "bottom": "0"}}>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {alertMessage}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}

export default Alert;
