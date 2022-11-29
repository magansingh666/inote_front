import React, { useContext, useEffect, useState } from "react";
import Login from "./Login";
import Notes from "./Notes";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect( () => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  return (   
    <div>
      {isLoggedIn ? <Notes /> : <Login />}
    </div>
  );
}

export default Home;
