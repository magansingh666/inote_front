import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import noteContext from "../context/noteContext";
import Loading from "./Loading";

const host = process.env.REACT_APP_HOST;
let url = `${host}/api/auth/createuser`;

const Signup = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
  });
  let history = useHistory();
  const { setAlertMessage } = useContext(noteContext);

  const fetchData = async () => {
    setIsLoading(true);
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const json = await response.json();
    console.log(json);
    try {
      const authtoken = json.authtoken;
      if (!authtoken) {
        setIsLoading(false);
        setAlertMessage("Invalid Credential or may be user already exist");
        return;
      }
      console.log(authtoken);
      setIsLoading(false);
      setAlertMessage("Sign Up Success. Now you  can login with your credentials");
      history.push("/login");
    } catch (e) {
      setIsLoading(false);
      setAlertMessage("Invalid Credential or may be user already exist");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    fetchData();
  };

  const onChange = (e) => {
    e.preventDefault();
    setCredentials();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={{"width": "400px", "margin": "10px auto"}}>
      <h3>Register here...</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={credentials.name}
            onChange={onChange}
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-secondary">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </div>
        <div style={{"textAlign": "right"}}>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        </div>

        
      </form>

      {isLoading && <Loading />}
    </div>
  );
};

export default Signup;
