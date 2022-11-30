import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import noteContext from '../context/noteContext';
import Loading from './Loading';

const host = process.env.REACT_APP_HOST;
let url = `${host}/api/auth/login`;
//http://localhost:5001/api/auth/login

const Login = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [credentials, setCredentials] = useState({email:"robertkmerton@gmail.com", password: "robertkmerton"});
    let history = useHistory();
    
    const fetchData = async () => {
        setIsLoading(true);
        let response = await fetch(url , {
            'method' : 'POST',
            'headers' : {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(credentials)
        });
        const json = await response.json()

        console.log(response.status);
        try{
            if(response.status === 200){
            setIsLoading(false);
            const authtoken = json.authtoken;
            localStorage.setItem("token", authtoken);
            history.push("/");

            console.log(localStorage.getItem("token"));
            }  
            else{
                alert("Error. request is not suceessful");
                setIsLoading(false);
            }        

        }catch(e){
            alert("Error"); 
            setIsLoading(false);

        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
        fetchData();

    }

    const onChange = (e) => {
        e.preventDefault();
        setCredentials({...credentials, [e.target.name] : e.target.value});

    }

  return (
    <div style={{"maxWidth": "400px", "margin": "10px auto"}}>
      <h5 style={{"textAlign": "center"}}>Login</h5>
      {isLoading && <Loading />}
      <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} 
                    id="email" name="email" placeholder='Email' aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <div style={{"textAlign": "right"}}>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
               
            </form>
    </div>
  )
}



export default Login
