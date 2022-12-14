import React, { useState, useEffect} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const  modules  = {
  toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script:  "sub" }, { script:  "super" }],
      ["blockquote", "code-block"],
      [{ list:  "ordered" }, { list:  "bullet" }],
      [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
  ],
};

function Edit4(props) {
  const initialValue = props.initial === undefined ? "": props.initial; 
  const [value, setValue] = useState(initialValue);
  useEffect(()=> {
    console.log(value);
  },[value]);

  const handleChange = (v) => {
    setValue(v);
    if(props.onChange !== undefined){props.onChange(v);}
  }

  return <ReactQuill modules={modules}
  value={value} onChange={handleChange} placeholder="Description goes here...." />;
}
export default Edit4;