import { Link } from "react-router-dom";
import error from "../assets/error.png"

const ErrorPage = () => {
    return (
      <div className="ErrorPage">
        <img src={error} alt="error" width="20%"></img>
        <p>This page is outside of the universe</p>
       <button className="login-button">
            <Link to="/">
              Go back Home
            </Link>
            </button>
        </div>
    );
  };
  
  export default ErrorPage;
  