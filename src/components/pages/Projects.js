import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import noteTaker from '../../images/noteTaker.png';
import soundtrackify from '../../images/project1.png';
import weatherApp from '../../images/weather.png';
import gameKnightImage from '../../images/gameKnight.png';
import passwordGenerator from '../../images/passwordGenerator.png';
import upstaged from '../../images/upstaged.png';

function Projects() {
  return (
    <div>
      <Container>
        <Row>
          <Col><h1 id="contact-me" class="display-4 cursive-font">Select Projects</h1><hr></hr></Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: '20rem', height: '90%' }}>
              <Card.Img variant="top" src={noteTaker} width="250" height="170"/>
              <Card.Body>
                <Card.Title id="highlightGreen">Note Taker App</Card.Title>
                <Card.Text>
                The Note Taker is built for a user who wants to write and save notes, 
                which will persist in the application until the user decides to delete them.  
                This application uses HTML, CSS, JavaScript, JQuery, nodeJS, and express.
                </Card.Text>
                <br></br>
              </Card.Body>
                <a href="https://boiling-temple-90514.herokuapp.com/" target="_blank" class="btn btn-primary">See App</a> 
                <a href="https://github.com/richardwalter515/noteTaker" target="_blank" class="btn btn-primary">See Code</a>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem', height: '90%' }}>
              <Card.Img variant="top" src={gameKnightImage} width="250" height="170"/>
              <Card.Body>
                <Card.Title id="highlightPurple">GameKnight</Card.Title>
                <Card.Text>
                Welcome to GameKnight! Built with React, JavaScript, and CSS, this application is continually updated to provide 
                the tools you need to make your Game Night a success. Current features 
                include game night essentials like scorekeeping and dice rolling. Have fun!
                </Card.Text>
              </Card.Body>
                <a href="https://game-knight-app.herokuapp.com/" target="_blank" class="btn btn-primary">See App</a> 
                <a href="https://github.com/richardwalter515/game-knight" target="_blank" class="btn btn-primary">See Code</a>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem', height: '90%' }}>
              <Card.Img variant="top" src={weatherApp} width="250" height="170"/>
              <Card.Body>
                <Card.Title id="highlightBlue">Weather Dashboard</Card.Title>
                <Card.Text>
                This weather dashboard is designed to display the local weather conditions 
                and five day forecast of any city you enter. The application uses the 
                Open Weather Map API to provide accurate weather data. Technologies 
                used include HTML, CSS, JavaScript, JQuery, momentJS, and Bootstrap.
                </Card.Text>
                <br></br>
              </Card.Body>
                <a href="https://richardwalter515.github.io/weatherDashboard/" target="_blank" class="btn btn-primary">See App</a> 
                <a href="https://github.com/richardwalter515/weatherDashboard" target="_blank" class="btn btn-primary">See Code</a>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: '20rem', height: '90%' }}>
              <Card.Img variant="top" src={passwordGenerator} width="250" height="170"/>
              <Card.Body>
                <Card.Title id="highlightGreen">Password Generator</Card.Title>
                <Card.Text>
                This password generator, built with HTML, CSS, and JavaScript, uses prompts to determine what type of characters 
                should be included as well as how long the password should be, thereby 
                tailoring the password to the user's needs. The questions must be answered 
                with 'yes' or 'no' in order for the information to trigger the code.
                </Card.Text>
                <br></br>
              </Card.Body>
                <a href="https://richardwalter515.github.io/PasswordGenerator/" target="_blank" class="btn btn-primary">See App</a> 
                <a href="https://github.com/richardwalter515/PasswordGenerator" target="_blank" class="btn btn-primary">See Code</a>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem', height: '90%' }}>
              <Card.Img variant="top" src={upstaged} width="250" height="170"/>
              <Card.Body>
                <Card.Title id="highlightYellow">Upstaged</Card.Title>
                <Card.Text>
                Welcome to Upstaged! The interactive app for theatre enthusiasts.  
                This application was developed using: React.js, User Authentication, 
                Material-Table, Axios, Bootstrap, JavaScript, Node.js, APIs, and more!  To explore, feel free to use "guest" as both email and password.
                Have fun exploring our app, gain points to climb the cast ranks, and try not to be Upstaged!
                </Card.Text>
                <br></br>
              </Card.Body>
                <a href="https://upstaged.herokuapp.com/" target="_blank" class="btn btn-primary">See App</a> 
                <a href="https://github.com/MichaelWitt/Upstaged" target="_blank" class="btn btn-primary">See Code</a>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem', height: '90%' }}>
              <Card.Img variant="top" src={soundtrackify} width="250" height="170"/>
              <Card.Body>
                <Card.Title id="highlightPink">Soundtrackify</Card.Title>
                <Card.Text>
                Soundtrackify interacts with Spotify's API to provide a sountrack of songs 
                based on a keyword entered by the user.  The lyrics will be displayed to the 
                right of the songs.  Note that this app requires the user to sign into their 
                Spotify account. Technologies used include HTML, CSS, JavaScript, JQuery, and Bootstrap.
                </Card.Text>
              </Card.Body>
                <a href="https://samuelbaetz.github.io/soundtrackbuilder/#" target="_blank" class="btn btn-primary">See App</a> 
                <a href="https://github.com/samuelbaetz/soundtrackbuilder" target="_blank" class="btn btn-primary">See Code</a>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer class="footer">
      See more on <a href="https://github.com/richardwalter515" target="_blank">GitHub</a>
      <br></br>
      <p class="greyOut">- © Richard Walter -</p>
    </footer>
    </div>
    
  );
}

export default Projects;