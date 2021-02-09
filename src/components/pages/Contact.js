import React from "react";
import resume from "../../images/resume-pic.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 id="contact-me" class="display-4 cursive-font">Contact Me!</h1>
        </Col>
      </Row>
      <Row>
        <Col class="div-border">
          <Card class="homeCardBody p-2">
            <h5 class="navy cursive-font highlightText">Email</h5>
            <p>richardwalter515@gmail.com</p>
            <br></br>
            <h5 class="navy cursive-font highlightText">Phone</h5>
            <p>(336) 264-4558</p>
          </Card>

          <h5 class="navy cursive-font highlightText">Social Media Links</h5>
          <a href="https://www.linkedin.com/in/richard-walter-0bb141121/" target="_blank" class="fa fa-linkedin "></a> 
          <a href="https://twitter.com/richiewalter?lang=en" target="_blank" class="fa fa-twitter"></a>
          <a href="https://github.com/richardwalter515" target="_blank" class="fa fa-github"></a> 
        </Col>
      <Col>
        <Card className="bg-dark text-white">
          <Card.Img src={resume} alt="Card image" href="./assets/Resume-coding.pdf" download="Resume" />
           <Card.ImgOverlay>
              <Card.Title>Click to Download My Resume</Card.Title>
          </Card.ImgOverlay>
        </Card>
        <a href="./assets/Resume-coding.pdf" download="Resume" class="btn btn-outline-primary">PDF</a>
      </Col>
    </Row>
  </Container>
  );
}

export default Contact;