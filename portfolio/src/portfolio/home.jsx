import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../index.css";
import DisplayQuote from "./quote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Header from "./navigation";
import PhpLogo from "../svg/php";
import Post from "../assets/NewPost.png";
import Login from "../assets/LogIn.png";
import Portfolio from "../assets/WelcomePage.gif";
import Overview from "../assets/Overview.png";
import ProfileView from "../assets/ProfileView.png";
import Create from "../assets/Create.png";

function Home() {
  const workData = [
    {
      title: "Portfolio Welcome Page",
      description:
        "A scenic view of a waterfall to welcome you to my portfolio.",
      image: Portfolio,
    },
    {
      title: "Profile Design",
      description:
        "This page shows how a profile could look, its tailored for the user designs and any images posted by them will be displayed here. Also there are other functions included such as editing profile and images or deleting images.",
      image: Overview,
    },
    {
      title: "Create New Post",
      description:
        "This create post form allows users to create a post with a title, description, location, and file which is a image.",
      image: Post,
    },
    {
      title: "Login Form",
      description:
        "This login form is apart of my travel page, the page uses php and MYSQL that stores users information into a database.",
      image: Login,
    },
    {
      title: "Portfolio Welcome Page",
      description:
        "This displays the usage of dropdown menus and what all could be done such ass viewing prrofile, editing profile and logging out.",
      image: ProfileView,
    },
    {
      title: "Create Account Form",
      description:
        "Dont have a account enter some credentials and join the travel page.",
      image: Create,
    },
    // Add more projects as needed
  ];

  const [currentCard, setCurrentCard] = useState(null);
 

  const handleCardClick = (index) => {
    setCurrentCard(index === currentCard ? null : index);
  };

  return (
    <div className="body">
      <section id="home">
        <Header />
      </section>
      <DisplayQuote />

      <section id="aboutme" className="home-about">
        <h1 className="header">About Me</h1>
        <p className="introduction">
          Hello, I am Nigel Watkins and I would like to officially welcome you
          to my web portfolio!
          <br />
          <br />
          I've always been captivatd by the intricate workings of systems,
          whether they're lines of codes powering a website or the complex
          neural networks of the human brain. My journey into web developement
          is driven by this insatiable curiosity. To me, web developement is
          more than just putting code together; its a fascinating exploration of
          how the digital world mirrors the complexity of our minds. The brain
          orchastrates a symphony of neurons to create thoughts and actions, web
          developement brings together various technologies to construct
          seamless online experiences.
          <br />
          <br />
          My journey is still in the early stages, but I've delved into the
          realm of front end web developement, with the goal to decipher the
          logic behind every element of the web. My projects reflects my
          dedication to unraveling the mysteries of web developement, every
          challenge I tackle is an opportunity to gain insight into how these
          intricate systems function as one harmonious whole. I'm a problem
          solver at heart.
          <br />
          <br />
          When Im not immersed in the digital world, you can often find me
          exploring the wonders of the {""}
          <Link to="/travel" className="outside-lifestyle">
            physical world
          </Link>
          . I'm an avid traveler, always seeking new landscapes and cultures to
          broaden my horizens. Nature visits rejuvenate my spirit, whether it's
          hiking in the wilderness or stargazing under clear skies. In the
          winter, I trade my keyboard for a snowboard, carving my way through
          snow with the same percision I use in coding. And when the open road
          calls, you can likely spot me on my motorcycle, embracing the freedom
          and adventure it brings.
        </p>
      </section>

      <section id="work">
        <h1 className="header">Work</h1>
        <p className="introduction">
          Explore some of the projects I've worked on. Hover over a project
          feature to view more details.
        </p>
        <div className="work-cards">
          {workData.map((work, index) => (
            <div
              key={index}
              className={`work-card ${index === currentCard ? "flipped" : ""}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="work-card-front">
                <img
                  src={work.image}
                  alt={work.title}
                  className="work-card-image"
                />
                <p className="work-card-title">{work.title}</p>
              </div>
              <div className="work-card-back">
                <p>{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills">
        <h1 className="header">Technology Experience</h1>
        <ul>
          <li className="html">
            <FontAwesomeIcon icon={faHtml5} className="html-icon" /> {""}
            HTML
          </li>
          <li className="css">
            <FontAwesomeIcon icon={faCss3} className="css-icon" /> {""}
            CSS
          </li>
          <li className="js">
            <FontAwesomeIcon icon={faJs} className="js-icon" /> {""}
            JavaScript
          </li>
          <li className="react">
            <FontAwesomeIcon icon={faReact} className="react-icon" />
            {""}
            React
          </li>
          <li className="php">
            <PhpLogo />
          </li>
          <li className="mysql">MySQL</li>
        </ul>
      </section>

      <section id="contact" className="contact">
        <h1 className="header">Contact Information</h1>
        <p>Email: Nigeldwatkins@gmail.com</p>
        <div className="social-icons">
          Social Accounts: <br />
          <Link to="https://github.com/nigeldwatkins">
            <FontAwesomeIcon icon={faGithub} className="github" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
