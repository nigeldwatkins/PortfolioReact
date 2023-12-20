import React from "react";
import { Link } from "react-router-dom";
import picturedrocks from "../assets/picturedrocks.mp4";
import "../index.css";

function Welcome() {
  return (
    <div>
      <section>
        <div className="overlay"></div>
        <video src={picturedrocks} autoPlay loop muted />
        <div className="welcome-content">
          <h1>Nigel Watkins</h1>
          <h2>Portfolio</h2>
          <p>Full-stack Developer</p>
          <Link to="/home" className="click-me">Learn About Me</Link>
        </div>
      </section>
    </div>
  );
}

export default Welcome;