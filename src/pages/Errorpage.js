import { Link } from "react-router-dom";
import error from "../assets/error.png"

const ErrorPage = () => {
    return (
      <div className="ErrorPage">
        <img src={error}></img>
        <p>This page doesn't exist</p>
       <button className="login-button">
            <Link to="/">
              Go back Home
            </Link>
            </button>
        </div>
    );
  };
  
  export default ErrorPage;
  