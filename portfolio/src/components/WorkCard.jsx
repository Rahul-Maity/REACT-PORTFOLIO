import React from "react";
import { NavLink } from "react-router-dom";
import imdb from "../assets/imdb.png";
import realestate from "../assets/realestate.png";
import weather from "../assets/weather.png";
import "./WorkCard.css";
const WorkCard = () => {
  return (
    <div className="work-container">
      <h3 className="project-heading">WEB-PROJECTS</h3>
      <div className="pproject-container">
        <div className="project-card">
          <img src={weather} alt="image" />
          <h2 className="project-title">ClimateCompass</h2>
          <div className="pro-details">
            <p>
              ClimateCompass is a Node.js-based weather status checking
              application that leverages a powerful weather API to provide
              real-time weather updates. With a user-friendly interface and
              robust functionality, it helps users stay informed about weather
              conditions in locations...
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://node-weather-nine.vercel.app/"
                className="btn"
              >
                View
              </NavLink>
              <NavLink
                to="https://github.com/Rahul-Maity/node-weather"
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={imdb} alt="image" />
          <h2 className="project-title">Imdb-Clone</h2>
          <div className="pro-details">
            <p>
              MovieWatch is a React.js-powered IMDb replica, utilizing the
              MovieDB API to fetch comprehensive film details. Featuring an
              intuitive UI and extensive functionalities, it empowers users to
              access up-to-date movie information effortlessly, enhancing their
              cinematic experience...
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://neon-tapioca-e4bf3c.netlify.app/"
                className="btn"
              >
                View
              </NavLink>
              <NavLink
                to="https://github.com/Rahul-Maity/IMDB-CLONE"
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={realestate} alt="image" />
          <h2 className="project-title">PropertyPortal</h2>
          <div className="pro-details">
          <p>PropertyPortal is a React.js-driven real estate platform, connecting users with properties seamlessly through a user-friendly interface. Leveraging cutting-edge technology, it simplifies property searches and empowers and sellers with the tools to make informed decisions...</p>
            <div className="pro-btns">
              <NavLink
                to="https://rahul-maity-real-estate.pages.dev/"
                className="btn"
              >
                View
              </NavLink>
              <NavLink
                to="https://github.com/Rahul-Maity/RealEstate"
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
