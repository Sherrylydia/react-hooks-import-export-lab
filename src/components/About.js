import React from "react";
import { image } from "../data/user"; // named import

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <img src={image} alt="Profile" />
    </div>
  );
}

export default About; // default export
