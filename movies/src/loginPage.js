import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from './authContext';
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const LoginPage = props => {
  const context = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  let location = useLocation();

  // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
  const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

  if (context.isAuthenticated === true) {
    return <Navigate to={from} />;
  }

  return (
    <>
      <h1 className="h1">Login page</h1>
     
      <p className="p">You must log in to view the protected pages </p>
      <input className="input" id="username" placeholder="Username" onChange={e => {
        setUserName(e.target.value);
      }}></input><br /> <div>&nbsp;</div>
      <input className="input" id="password" type="password" placeholder="Password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button className="button" onClick={login}>Log in</button>
      <p className="p">Not Registered? {" "}
      <Link to="/signup">Sign Up!</Link></p>
    </>
  );
};

export default LoginPage;