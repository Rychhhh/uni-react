import React, { Component } from "react";
import LoginBtn from "./LoginBtn";
import logo from "../img/logo.jpg";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ opacity: "0,4" }}>
      <div className="container mt-1">
        <a className="navbar-brand" href="#">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav container ms-auto">
            <li className="nav-item" style={{ paddingLeft: "40px" }}>
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item" style={{ paddingLeft: "40px" }}>
              <a className="nav-link " href="Project">
                Project
              </a>
            </li>
            <li className="nav-item" style={{ paddingLeft: "40px" }}>
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item text-center" style={{ paddingLeft: "550px" }}>
              <LoginBtn />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
