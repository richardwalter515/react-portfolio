import React from "react";
import { Container, Row, Col, Image, Jumbotron, Table } from "react-bootstrap";
import headshot from "../../images/redsweater.jpeg";
import UnderLine from "../UnderLine";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGithubSquare, faHtml5, faJs, faNode, faReact, faSwift } from '@fortawesome/free-brands-svg-icons';


function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col className="skillsCard">
              <Image src={headshot} className="headshotDiv" width="350px" height="350px"/>
            <div class="bioDiv">
              <h2 class="cursive-font navy skillsCard bioDiv">Richard Walter - Full Stack Developer</h2>
              <hr></hr>
              <p class="card-text bioDiv">Leveraging a background in merchandise design in conjunction with strong knowledge of many front-end and back-end development technologies and frameworks, my goal is to create an engaging user experience that is both intuitive and visually exciting.  I recently received my certificate in full-stack web development through the University of North Carolina at Chapel Hill, where I've honed several skills including utilizing API data, working with databases, and creating dynamically updated web pages and applications.  In my previous work in both merchandise and public relations, I worked well under pressure and relished opportunities to think outside the box and find creative solutions that exceed client expectations, skills I look forward to bringing into my work as a developer.</p>
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <h1 className="cursive-font navy text-center shadow-text" id="text-center">Skills</h1>
            <UnderLine color="white"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <table className="center">
              <tbody>
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
              </tbody>
            </table>
            <h3 class="text-center shadow-text">And more...</h3>
          </Col>
        </Row> */}
            
      </Container>
        <footer class="footer">
          Find me on <a href="https://www.linkedin.com/in/richard-walter-0bb141121/" target="_blank">LinkedIn</a>, and <a href="https://github.com/richardwalter515" target="_blank">GitHub</a>
          <br></br>
          <p class="greyOut">- © Richard Walter -</p>
        </footer>
  </>
  );
}

export default Home;