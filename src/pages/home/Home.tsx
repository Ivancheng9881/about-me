import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import  portfolioPic from "../../images/portfolioPic.png";

const Home = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="card">
          <div className="title">
            Full-Stack React Developer <span className="wave">👋</span>
          </div>
          <div className="sub-heading">
            Hi, I'm Ivan Cheng. A passionate Full-stack React Developer based in
            Hong Kong. 📍
          </div>
          <div className="link-buttons">
            <div className="buttons">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </div>
            <div className="buttons">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={portfolioPic} alt="portfoliopic" className="hero-img"></img>
        </div>
      </div>
      <div className="card">
        <div>bottom</div>
      </div>
    </div>
  );
};

export default Home;
