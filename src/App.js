import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteState from "./context/NoteState";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Alert from "./components/Alert";
import { useContext } from "react";
import noteContext from "./context/noteContext";

function App() {
 
  
  return (
    <>
    <NoteState>
    <Router>
    
      <Navbar />
      <Alert/>
      
      <div className="container">
      <Switch>
        <Route exact path="/">   <Home />  </Route>
        <Route exact path="/about">    <About />    </Route>
        <Route exact path="/signin">    <Signup />    </Route>
        <Route exact path="/login">    <Login />    </Route>
      </Switch>
      </div>
      
    </Router>

    </NoteState>
     
    </>
  );
}

export default App;
