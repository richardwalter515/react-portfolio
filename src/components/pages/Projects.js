import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import noteTaker from "../../images/noteTaker.png";
import soundtrackify from "../../images/project1.png";
import weatherApp from "../../images/weather.png";
import gameKnightImage from "../../images/gameKnight.png";
import passwordGenerator from "../../images/passwordGenerator.png";
import upstaged from "../../images/upstaged.png";

function Projects() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 id="contact-me" class="display-4 cursive-font">
              Select Projects
            </h1>
            <hr></hr>
          </Col>
        </Row>
        <Row id="contact-me">
          <Col>
            <h2 id="contact-me opaqueBackground" class="navy project-header">
              Web Development
            </h2>
            <Row>
              <Col>
                <Card style={{ width: "15rem", height: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={gameKnightImage}
                    width="220"
                    height="130"
                  />
                  <Card.Body>
                    <Card.Title id="highlightPurple">GameKnight</Card.Title>
                    <Card.Text class="cardText">
                      Welcome to GameKnight! Built with React, JavaScript, and
                      CSS, this application is continually updated to provide
                      the tools you need to make your Game Night a success.
                      Current features include game night essentials like
                      scorekeeping and dice rolling. Have fun!
                    </Card.Text>
                  </Card.Body>
                  <a
                    href="https://game-knight-app.herokuapp.com/"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    See App
                  </a>
                  <a
                    href="https://github.com/richardwalter515/game-knight"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    See Code
                  </a>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "15rem", height: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={weatherApp}
                    width="220"
                    height="130"
                  />
                  <Card.Body>
                    <Card.Title id="highlightBlue">
                      Weather Dashboard
                    </Card.Title>
                    <Card.Text class="cardText">
                      This weather dashboard is designed to display the local
                      weather conditions and five day forecast of any city you
                      enter. The application uses the Open Weather Map API to
                      provide accurate weather data. Technologies used include
                      HTML, CSS, JavaScript, JQuery, momentJS, and Bootstrap.
                    </Card.Text>
                    <br></br>
                  </Card.Body>
                  <a
                    href="https://richardwalter515.github.io/weatherDashboard/"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    See App
                  </a>
                  <a
                    href="https://github.com/richardwalter515/weatherDashboard"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    See Code
                  </a>
                </Card>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Card style={{ width: "15rem", height: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={passwordGenerator}
                    width="220"
                    height="130"
                  />
                  <Card.Body>
                    <Card.Title id="highlightGreen">
                      Password Generator
                    </Card.Title>
                    <Card.Text class="cardText">
                      This password generator, built with HTML, CSS, and
                      JavaScript, uses prompts to determine what type of
                      characters should be included as well as how long the
                      password should be, thereby tailoring the password to the
                      user's needs. The questions must be answered with 'yes' or
                      'no' in order for the information to trigger the code.
                    </Card.Text>
                    <br></br>
                  </Card.Body>
                  <a
                    href="https://richardwalter515.github.io/PasswordGenerator/"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    See App
                  </a>
                  <a
                    href="https://github.com/richardwalter515/PasswordGenerator"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    See Code
                  </a>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "15rem", height: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={soundtrackify}
                    width="220"
                    height="130"
                  />
                  <Card.Body>
                    <Card.Title id="highlightPink">Soundtrackify</Card.Title>
                    <Card.Text class="cardText">
                      Soundtrackify interacts with Spotify's API to provide a
                      sountrack of songs based on a keyword entered by the user.
                      The lyrics will be displayed to the right of the songs.
                      Note that this app requires the user to sign into their
                      Spotify account. Technologies used include HTML, CSS,
                      JavaScript, JQuery, and Bootstrap.
                    </Card.Text>
                  </Card.Body>
                  <a
                    href="https://samuelbaetz.github.io/soundtrackbuilder/#"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    See App
                  </a>
                  <a
                    href="https://github.com/samuelbaetz/soundtrackbuilder"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    See Code
                  </a>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col>
            <h2 id="contact-me opaqueBackground" class="navy project-header">
              Recent Professional Initiatives
            </h2>
            <Row>
              <Col>
                <div class="initiativeText">
                  <h5 class="cursive-font initiativeHeader">
                    Onboarding Leader
                  </h5>
                  <hr class="initiativeHeader"></hr>
                  <p class="card-text initiativeText">
                    I joined the onboarding leadership team as a content editor
                    and mentor, focused on guiding new TAMs through the
                    onboarding process. This includes conducting regular check
                    ins, running technical knowlege assessments, and updating
                    the content as needed.
                  </p>
                </div>
                <br></br>
                <div class="bioDiv initiativeText">
                  <h5 class="cursive-font initiativeHeader">
                    Documentation Editor
                  </h5>
                  <hr class="initiativeHeader"></hr>
                  <p class="card-text initiativeText">
                    I was a founding member of our documentation team which was
                    focused on creating and updating documentation, with a
                    particular focus on best practices and troubleshooting. I
                    worked with the team to refine the process for identifying
                    documentation needs and then served as an editor for the
                    documentation created to ensure that it was ready to be
                    published.
                  </p>
                </div>
                <br></br>
                <div class="initiativeText">
                  <h5 class="cursive-font initiativeHeader">
                    TAM Playbooks Coordinator
                  </h5>
                  <hr class="initiativeHeader"></hr>
                  <p class="card-text initiativeText">
                    I'm leading an effort to create, update, and organize the
                    way we approach common TAM initiatives on our team. This
                    includes identifying and documenting best pracices in
                    playbook form with a goal of standardizing the TAM
                    experience to ensure we are consistently driving success
                    with our customers.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <footer class="footer">
        See more on{" "}
        <a href="https://github.com/richardwalter515" target="_blank">
          GitHub
        </a>
        <br></br>
        <p class="greyOut">- © Richard Walter -</p>
      </footer>
    </div>
  );
}

export default Projects;
