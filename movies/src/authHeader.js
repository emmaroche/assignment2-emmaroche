import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./authContext";

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  return context.isAuthenticated ? (
    <p className="p2">
      Welcome {context.userName}! <button className="button" onClick={() => context.signout()}>Sign out</button>
    </p>
  ) : (
    <p className="p2" >
      You are not logged in
      <button className="button" onClick={() => navigate('/login')}>Login</button>
    </p>
  );
  
};

export default BaseAuthHeader;