import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';

const Login = props => {
    const [credentials, setCredentials] = useState({email:"meenakshimahakal@gmail.com", password: "iamsanyonigaitaagni"});
    let history = useHistory();
    
    const fetchData = async () => {
        let response = await fetch("http://localhost:5001/api/auth/login" , {
            'method' : 'POST',
            'headers' : {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(credentials)
        });
        const json = await response.json()
        console.log("status is ---");
        console.log(response.status);
        try{
            if(response.status === 200){
            const authtoken = json.authtoken;
            localStorage.setItem("token", authtoken);
            history.push("/");
            console.log(localStorage.getItem("token"));
            }  
            else{
                alert("some Error");
            }        

        }catch(e){
            alert("Some Error"); 

        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
        fetchData();

    }

    const onChange = (e) => {
        e.preventDefault();
        setCredentials();
        setCredentials({...credentials, [e.target.name] : e.target.value});

    }

  return (
    <div>
      <h1>I am Login component</h1>
      <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}



export default Login
