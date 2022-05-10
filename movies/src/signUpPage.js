import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from './authContext';

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1 className="h1">SignUp page</h1>
      <p className="p">You must register a username and password to log in </p>
      <input className="input" value={userName} placeholder="Username" onChange={e => {
        setUserName(e.target.value);
      }}></input><br /> <div>&nbsp;</div>
      <input className="input" value={password} type="password" placeholder="Password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br /><div>&nbsp;</div>
      <input className="input" value={passwordAgain} type="password" placeholder="Password again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button className="button" onClick={register}>Register</button>
    </>
  );
};

export default SignUpPage;