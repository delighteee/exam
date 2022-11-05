import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "./components/Footer";
import img from "../assets/img.webp"

export default function ProgramTracks() {
  return (
    <main id="programtracks">
      <Helmet>
        <title>Program Tracks</title>
        <meta name="description" content="Leverage your tech career" />
        <link rel="canonical" href="/" />
      </Helmet>
      <section className="programtracks">
        <div className="program-section">
        <div className="hero-text">
          <h1 className="hero-title">Our Programs at Hauxano</h1>
          <p >
            The Hauxano Platform provides a tool to design, implement, deliver
            and assess digital courses across the continent. The mission is to
            ensure every African to be successful in the global workplace.
            African youth, students and adults can access and enroll in personal
            and customised master classes online.{" "}
          </p>
        </div>
        <img className="hero-image program-image" src={img} alt="students" height="auto" ></img>
        </div>

        <div className="tracks">
          <div className="track-box design">
            <Link to="productdesign">
              <p>Product Design</p>
            </Link>
          </div>

          <div className="track-box pm">
            <Link to="productmanagement">
              <p>Product Management</p>
            </Link>
          </div>

          <div className="track-box software">
            <Link to="softwareengineering">
              <p>Software Engineering</p>
            </Link>
          </div>

          <div className="track-box data">
            <Link to="dataanalysis">
              <p>Data Analysis</p>
            </Link>
          </div>
        </div>

        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
