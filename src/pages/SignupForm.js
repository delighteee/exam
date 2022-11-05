import React, { useState } from "react";
import { useUserAuth } from "../context/userContext";
import { Helmet } from "react-helmet-async";
import { HashLink } from "react-router-hash-link";

export default function SignupForm() {
  const { logIn } = useUserAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    logIn(username);
  }

  return (
    <>
      <Helmet>
        <title>Sign up</title>
        <meta name="description" content="Leverage your tech career" />
        <link rel="canonical" href="/" />
      </Helmet>
      <main className="form-container">
        <div className="card">
          <h1 className="card-title">Create your account</h1>
          <form onSubmit={onSubmit} className="card-form">
            <div className="input">
              <input
                type="text"
                className="input-field"
                name="username"
                onChange={(e) => setUsername(e.currentTarget.value)}
                required
              />
              <label class="input-label">Username</label>
            </div>

            <div className="input">
              <input
                type="password"
                className="input-field"
                onChange={(e) => setPassword(e.currentTarget.value)}
                required
              />
              <label className="input-label">Password</label>
            </div>

            <button className="card-button"><HashLink
              to="/auth"
              smooth
              scroll={(el) =>
                el.scrollIntoView({ behavior: "auto", block: "end" })
              }
            >
             Create account
            </HashLink></button>
            <p>Already have an account? <HashLink
              to="/auth"
              smooth
              scroll={(el) =>
                el.scrollIntoView({ behavior: "auto", block: "end" })
              }
            >
             Log in
            </HashLink></p>
          </form>
          <div className="card-info"></div>
        </div>
      </main>
    </>
  );
}
