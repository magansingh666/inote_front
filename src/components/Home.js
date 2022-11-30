import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import noteContext from "../context/noteContext";
import Login from "./Login";
import Notes from "./Notes";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  const context = useContext(noteContext);
  const {setUserToken}  = context;
   useEffect( () => {
    const token = localStorage.getItem("token");
   
    if(token !== null){
      setUserToken(token);
      setIsLoggedIn(true);      
    }
    else {
      setIsLoggedIn(false);
      history.push("/login");
    }
  }, []);

  return (   
    <div>
      {isLoggedIn && <Notes /> }
    </div>
  );
}

export default Home;
