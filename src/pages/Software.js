import React from "react";
import { Helmet } from "react-helmet-async";
import software from "../assets/software.svg";

export default function Software() {
  return (
    <main className="">
      <Helmet>
        <title>Software Engineering</title>
        <meta name="description" content="Leverage your tech career" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="track-container">
        <img src={software} alt="codingr" className="track-image"></img>
        <p className="track-details">
          Software engineering is the branch of computer science that deals with
          the design, development, testing, and maintenance of software
          applications. Software engineers apply engineering principles and
          knowledge of programming languages to build software solutions for end
          users.
        </p>
      </div>
    </main>
  );
}
