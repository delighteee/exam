import React from "react";
import LoginForm from "../LoginForm";
import { useUserAuth } from "/Users/tolulopeadelye/exam/src/context/userContext.js";

const Auth = () => {
  const { user, logOut } = useUserAuth();

  if (user.isGuestUser) {
    return(<LoginForm />)
    
  }

  function onClick(e) {
    e.preventDefault();
    logOut();
  }
  return (
    <div id="logout">
      <h2 className="welcome-message"> Welcome 👋🏼, {user.displayName}</h2>
      <p>You're logged in {user.username}</p>
      <button className="logout-button" onClick={onClick}>
        Log Out
      </button>
    </div>
  );
};

export default Auth;
