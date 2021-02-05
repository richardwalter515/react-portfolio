import React from "react";
import headshot from "../../images/redsweater.jpeg"

function Home() {
  return (
    <div>
      <div class="card mb-3">
      <div class="row">
        <div class="col-md-4" id="headshotDiv">
            <img id="headshot" src={headshot} alt="Headshot" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title cursive-font">Richard Walter - Full Stack Developer</h3>
            <p class="card-text">Leveraging a background in merchandise design in conjunction with strong knowledge of HTML, CSS, Javascript, JQuery, nodeJS, express, REST Apis, MySQL, noSQL, MongoDB, among others, my goal is to create an engaging user experience that is both intuitive and visually exciting.  I will receive my certificate in full-stack web development through the University of North Carolina at Chapel Hill, where I've honed several skills including utilizing API data, working with databases, and creating dynamically updated web pages.  In my previous work in both merchandise and public relations, I worked well under pressure and was focused on using consumer engagement to continually update and improve our products, skills I look forward to bringing into my work as a developer.</p>
          </div>
        </div>
        </div>
    </div>


    <footer class="footer">
      Find me on <a href="https://twitter.com/richiewalter?lang=en" target="_blank">Twitter</a>, <a href="https://www.linkedin.com/in/richard-walter-0bb141121/" target="_blank">LinkedIn</a>, and <a href="https://github.com/richardwalter515" target="_blank">GitHub</a>
    </footer>

  </div>
  );
}

export default Home;