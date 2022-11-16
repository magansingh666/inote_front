import React, { useContext } from 'react';
import noteContext from '../context/noteContext';

export default function Noteitem(props) {
    const {_id,title, description} = props.note;
    const {deleteNote } = useContext(noteContext);
  return (

    <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text"> {description}</p>
      <a href="/" className="btn btn-primary"> Go somewhere </a>
      <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(_id)}}></i>
      <i className="far fa-edit mx-2"></i>
    </div>
  </div>      

  );
}
