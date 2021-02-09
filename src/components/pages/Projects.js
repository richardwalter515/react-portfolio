import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import noteTaker from '../../images/noteTaker.png';
import soundtrackify from '../../images/project1.png';
import weatherApp from '../../images/weather.png';

function Projects() {
  return (
    <div>
      <Container>
        <Row>
          <Col><h1 id="contact-me" class="display-4 cursive-font">Select Projects</h1></Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={noteTaker} width="250" height="170"/>
              <Card.Body>
                <Card.Title>Note Taker App</Card.Title>
                <Card.Text>
                The Note Taker is built for a user who wants to write and save notes, 
                which will persist in the application until the user decides to delete them.  
                This application uses HTML, CSS, JavaScript, JQuery, nodeJS, and express.
                </Card.Text>
              </Card.Body>
                <a href="https://boiling-temple-90514.herokuapp.com/" target="_blank" class="btn btn-primary">See App</a> 
                <a href="https://github.com/richardwalter515/noteTaker" target="_blank" class="btn btn-primary">See Code</a>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={soundtrackify} width="250" height="170"/>
              <Card.Body>
                <Card.Title>Soundtrackify</Card.Title>
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
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={weatherApp} width="250" height="170"/>
              <Card.Body>
                <Card.Title>Weather Dashboard</Card.Title>
                <Card.Text>
                This weather dashboard is designed to display the local weather conditions 
                and five day forecast of any city you enter. The application uses the 
                Open Weather Map API to provide accurate weather data. Technologies 
                used include HTML, CSS, JavaScript, JQuery, momentJS, and Bootstrap.
                </Card.Text>
              </Card.Body>
                <a href="https://richardwalter515.github.io/weatherDashboard/" target="_blank" class="btn btn-primary">See App</a> 
                <a href="https://github.com/richardwalter515/weatherDashboard" target="_blank" class="btn btn-primary">See Code</a>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;