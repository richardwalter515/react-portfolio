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
              <p class="card-text bioDiv">As a passionate and outgoing Technical Account Manager, I have experience managing difficult technical issues and collaborating across departments to advocate for my client.  In my previous work as a Merchandise Manager, I gained strong leadership skills and learned to be creative, empathetic, and thoughtful about solving problems and providing an excellent customer experience while supporting my team however I could.</p>
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