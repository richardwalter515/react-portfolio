import React from "react";
import headshot from "../../images/redsweater.jpeg";
import resume from "../../images/resume-pic.png"

function Contact() {
  return (
    <div class="container">
      <div class="row pt-3">
        <div class="col">
          <h1 id="contact-me" class="display-4 cursive-font">Contact Me!</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src={headshot} alt="headshot" width="400" height="400"></img>
        </div>
        <div class="col div-border">
          <h5 class="navy cursive-font">Email</h5>
          <p>richardwalter515@gmail.com</p>
          <h5 class="navy cursive-font">Phone</h5>
          <p>(336) 264-4558</p>
          <h5 class="navy cursive-font">Social Media Links</h5>
          <a href="https://www.linkedin.com/in/richard-walter-0bb141121/" target="_blank" class="fa fa-linkedin "></a> 
          <a href="https://twitter.com/richiewalter?lang=en" target="_blank" class="fa fa-twitter"></a>
          <a href="https://github.com/richardwalter515" target="_blank" class="fa fa-github"></a> 
        </div>
      <div class="col div-border">
        <h5 class="navy cursive-font">Downloadable Resume</h5>
        <img src={resume} alt="resume" width="250" height="300"></img>
        <a href="./assets/Resume-coding.pdf" download="Resume" class="btn btn-outline-primary">PDF</a>
      </div>
    </div>
  </div>
  );
}

export default Contact;