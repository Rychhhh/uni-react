import React from "react";
import "./pages/wrapper.css";

export default function TopWrapper() {
  return (
    // Introduction my self
    <div className="intro">
      <section class="jumbotron text-center mt-5" style={{ padding: "20vh", fontSize: "50" }}>
        <h1 class="display-4 mt-2">Rayhan</h1>
        <div class="content ms-5">
          <h1>Hi | I'm </h1>
        </div>
        <svg classMate="jumbotron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="black"
            fill-opacity="1"
            d="M0,128L48,154.7C96,181,192,235,288,250.7C384,267,480,245,576,218.7C672,192,768,160,864,170.7C960,181,1056,235,1152,261.3C1248,288,1344,288,1392,288L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>

      {/* Social Media */}
    </div>
  );
}
