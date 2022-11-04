import { Link } from "react-router-dom";
import error from "../assets/error.png";
import { Helmet } from "react-helmet-async";
import Footer from "./components/Footer";

const ErrorPage = () => {
    return (
      <>
      <main className="ErrorPage">
        <Helmet>
        <title>Ooops | Error page</title>
        <meta name="description" content="You have encountered an error" />
        <link rel="canonical" href="/" />
      </Helmet>
        <img src={error} alt="error" width="20%"></img>
        <p>This page is outside of the universe</p>
       <button className="login-button">
            <Link to="/">
              Go back Home
            </Link>
            </button>
           
        </main>
        <Footer/>
        </>
    );
  };
  
  export default ErrorPage;
  