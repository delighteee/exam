import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Heroimage from "/Users/tolulopeadelye/exam/src/assets/Heroimage.png";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";
import icon from "../assets/icon.svg"
import iconn from "../assets/iconn.svg"
import iconnn from "../assets/iconnn.svg"

export default function Home() {
  return (
    <main id="home">
      <Helmet>
        <title>Hauxano Africa</title>
        <meta name="description" content="Welcome to Hauxano" />
        <link rel="canonical" href="/" />
      </Helmet>
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">Master the Skills for the Future!</h1>
          <p className="supporting-text">
            {" "}
            Join the next billion Africa workforce with relevant human
            development skills for Jobs of today and tomorrow.{" "}
          </p>
          <button className="login-button">
            <HashLink
              to="/login"
              smooth
              scroll={(el) =>
                el.scrollIntoView({ behavior: "auto", block: "end" })
              }
            >
              Create Account
            </HashLink>
          </button>
        </div>
        <img className="hero-image" src={Heroimage} alt="students"></img>
      </section>

      <section className="section-2">
        <div className="cards">
          <div className="card-container">
            <img src={iconn} alt="users" width="10%" height="auto"></img>
            <h3>Work in an real team</h3>
            <p>
              Collaborate with cross-discipline team members, in a real
              technical work environment.
            </p>
          </div>
          <div className="card-container">
            <img src={icon} alt="house" width="10%" height="auto"></img>
            <h3>Build something tangible</h3>
            <p>
              Go beyond boilerplate projects and case studies. Show that you can
              solve real problems.
            </p>
          </div>
          <div className="card-container">
            <img src={iconnn} alt="check-list" width="10%" height="auto"></img>
            <h3>Prove your experience</h3>
            <p>
              Follow agile best practices, and gain experience you can
              confidently speak to.
            </p>
          </div>
        </div>
      </section>
      <section className="section-3">
        <h2 className="title-text">
          Acquire the job-ready skills in a cross-functional team
        </h2>
        <p className="section3-text">
          The Hauxano Platform provides a tool to design, implement, deliver and
          assess digital courses across the continent. The mission is to ensure
          every African to be successful in the global workplace. African youth,
          students and adults can access and enroll in personal and customised
          training courses online.
        </p>
        <div className="row1-container">
          <div className="box box-down cyan">
            <h3>Undergraduates</h3>
            <p>
              We help undergraduates acquire skills they need to start their
              careers in any industry of their choice.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-supervisor.svg"
              alt=""
            />
          </div>

          <div className="box red">
            <h3>Transitionals</h3>
            <p>
              We provide all the learning resources you need to transition
              seamlessly from one role or industry to the other.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-team-builder.svg"
              alt=""
            />
          </div>

          <div className="box box-down blue">
            <h3>Entry-level</h3>
            <p>
              We provide an outside of the job learning experience for entry
              level professionals across industries.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-calculator.svg"
              alt=""
            />
          </div>
        </div>
        <div className="row2-container">
          <div className="box orange">
            <h3>Tech Enthusiast</h3>
            <p>
              We are particular about helping you become a fully functional tech
              professional.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-karma.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />

      <Outlet />
    </main>
  );
}
