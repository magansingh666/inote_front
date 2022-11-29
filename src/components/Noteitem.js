import React, { useContext, useState } from 'react';
import noteContext from '../context/noteContext';
import NoteViewModal from './NoteViewModal';

export default function Noteitem(props) {
    const {_id,title, description} = props.note;
    const [showViewModal, setShowViewModal] = useState(false);
    const {deleteNote, updating ,setUpdating } = useContext(noteContext);
  return (

    <div className="card" >
    <div className="card-body">
      <div style={{"backgroundColor": "#F4FF81", "height": "30px", "overflow": "hidden", "textAlign": "center",
      "borderRadius": "10px", "color": "blue"}}>
       <h3 className='card-title'>{title}</h3>
      </div>          
      <div className='my-2' dangerouslySetInnerHTML={{"__html": description}} 
      style={{"height" : "100px", "overflow": "hidden"}}/>
      <button type="button" onClick={() => {setShowViewModal(true)}}
      className="btn btn-outline-info">View</button>
      <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(_id)}}></i>
      <i className="far fa-edit mx-2" onClick={()=>{ props.update(props.note)}}></i>
    </div>
    {showViewModal && <NoteViewModal note={props.note} setVisible={setShowViewModal}/>}
  </div>      

  );
}
