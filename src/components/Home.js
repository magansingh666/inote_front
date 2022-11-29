import React, { useContext, useEffect, useState } from "react";
import Notes from "./Notes";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect( () => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  return (   
    <div>
      {isLoggedIn && <Notes />}
    </div>
  );
}

export default Home;
