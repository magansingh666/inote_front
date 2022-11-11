import React, { useContext } from "react";
import noteContext from "../context/noteContext";

function Home() {
  const context = useContext(noteContext);
  const {notes, setNotes} = context;
  return (
    <div>
      <h1>add a note </h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
       
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
      <div className="container">
       <h1>Your Notes are</h1>
       { notes.map((e) => <div key={e.title}>{e.title}</div>)}


      </div>





    </div>
  );
}

export default Home;
