import { faCoffee, faRubleSign } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headshot from "../../images/redsweater.jpeg";
import UnderLine from "../UnderLine";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGithubSquare, faHtml5, faJs, faNode, faReact, faSwift } from '@fortawesome/free-brands-svg-icons';



function Home() {
  return (
    <div>
      <Container fluid>
          <Row className="homeCard">
            <div class="col-lg-4" >
                <img id="headshot" src={headshot} alt="Headshot" class="rounded-circle" />
            </div>
            <div class="col-lg-8 p-5">
              <div>
                <h2 class="card-title cursive-font navy">Richard Walter - Full Stack Developer</h2>
                <hr></hr>
                <p class="card-text">Leveraging a background in merchandise design in conjunction with strong knowledge of HTML, CSS, Javascript, React, JQuery, nodeJS, express, REST Apis, MySQL, noSQL, MongoDB, among others, my goal is to create an engaging user experience that is both intuitive and visually exciting.  I recently received my certificate in full-stack web development through the University of North Carolina at Chapel Hill, where I've honed several skills including utilizing API data, working with databases, and creating dynamically updated web pages and applications.  In my previous work in both merchandise and public relations, I worked well under pressure and was focused on using consumer engagement to continually update and improve our products, skills I look forward to bringing into my work as a developer.</p>
              </div>
            </div>
          </Row>
          <Row className="skillsCard navy-border">
            <Col>
              <div>
                <h1 class="cursive-font navy" id="text-center">Skills</h1>
                <UnderLine color="white"/>
                <table class="center">
                  <tr>
                    <td><FontAwesomeIcon icon={faHtml5} /> HTML</td>
                    <td><FontAwesomeIcon icon={faNode} /> NodeJS</td>
                    <td><FontAwesomeIcon icon={faReact} /> React</td>
                    <td><FontAwesomeIcon icon={faJs} /> JavaScript</td>
                  </tr>
                  <tr>
                    <td><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</td>
                    <td><FontAwesomeIcon icon={faCss3} /> CSS</td>
                    <td><FontAwesomeIcon icon={faSwift} /> Swift</td>
                    <td><FontAwesomeIcon icon={faGithubSquare} /> GitHub</td>
                  </tr>
                </table>
                <h3 class="text-center">And more...</h3>
              </div>
            </Col>
          </Row>
      </Container>


    <footer class="footer">
      Find me on <a href="https://www.linkedin.com/in/richard-walter-0bb141121/" target="_blank">LinkedIn</a>, and <a href="https://github.com/richardwalter515" target="_blank">GitHub</a>
      <br></br>
      <p class="greyOut">- © Richard Walter -</p>
    </footer>

  </div>
  );
}

export default Home;