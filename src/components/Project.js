import React from "react";
import "./pages/project.css";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project4 from "../img/project4.png";

export default function Project() {
  return (
    <div className="content_project">
      <h1 className="title_project">My Project</h1>
      <div>
        <a href="https://rayhan-portfolio.netlify.app/">
          <img class="img" src={project1}></img>
        </a>
        <a href="https://quiz-app4.netlify.app/">
          <img class="img" src={project2}></img>
        </a>
        <a href="https://ryhann.github.io/Countdown-timer/">
          <img class="img" src={project3}></img>
        </a>
        <a href="https://wrapper-01.netlify.app/">
          <img class="img" src={project4}></img>
        </a>
      </div>
    </div>
  );
}
