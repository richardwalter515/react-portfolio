import React from "react";
import { Container, Row, Col, Image, Jumbotron, Table } from "react-bootstrap";
import pendoLogo from "../../images/pendo_io_logo.jpeg";
import stilettoLogo from "../../images/stiletto_entertainment_logo.jpeg";
import UnderLine from "../UnderLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faGithubSquare,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";

function Experience() {
  return (
    <>
      <Container>
        <Row id="homeText" className="skillsCard">
          <Col lg={3}>
            <Image src={pendoLogo} className="imgBorder" rounded />
          </Col>
          <Col lg={8}>
            <h2 class="cursive-font navy  bioDiv">
              Pendo.io - Sr. Technical Account Manager
            </h2>
            <hr></hr>
            <p class="card-text bioDiv">APRIL 2022 - PRESENT</p>
            <p>
              <ul>
                <li>
                  Provides technical guidance to our strategic and enterprise
                  customers, including implementing our low code solution,
                  creating custom aggregations with our API, writing bespoke
                  code solutions, and documenting success.
                </li>
                <li>
                  Regularly travels onsite to work directly with customers
                  leading technical enablement sessions, implementations, and
                  strategic initiative consultations.
                </li>
                <li>Mentors and trains newer team members.</li>
                <li>
                  Promoted to Senior TAM for my consistently strong customer
                  relationships and cross-department collaboration resulting in
                  significant contract growth and expansion of TAM spend on
                  renewals.
                </li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row id="homeText" className="skillsCard">
          <Col lg={3}>
            <Image src={pendoLogo} className="imgBorder" rounded />
          </Col>
          <Col lg={8}>
            <h2 class="cursive-font navy  bioDiv">
              Pendo.io - Technical Success Engineer
            </h2>
            <hr></hr>
            <p class="card-text bioDiv">MAY 2021 - APRIL 2022</p>
            <p>
              <ul>
                <li>
                  100% Customer Satisfaction (CSAT) rating for the entire tenure
                  on the team.
                </li>

                <li>Salesforce Integration SME</li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row id="homeText" className="skillsCard">
          <Col lg={3}>
            <Image src={stilettoLogo} className="imgBorder" rounded />
          </Col>
          <Col lg={8}>
            <h2 class="cursive-font navy  bioDiv">
              Stiletto Entertainment - Merchandise Manager
            </h2>
            <hr></hr>
            <p class="card-text bioDiv">JUNE 2014 - JULY 2016</p>
            <p>
              Managed the merchandise team for the Barry Manilow One Last Time!
              Tour, completing 67 concerts across the US.
            </p>
          </Col>
        </Row>
      </Container>

      <footer class="footer">
        Find me on{" "}
        <a
          href="https://www.linkedin.com/in/richard-walter-0bb141121/"
          target="_blank"
        >
          LinkedIn
        </a>
        , and{" "}
        <a href="https://github.com/richardwalter515" target="_blank">
          GitHub
        </a>
        <br></br>
        <p class="greyOut">- © Richard Walter -</p>
      </footer>
    </>
  );
}

export default Experience;
