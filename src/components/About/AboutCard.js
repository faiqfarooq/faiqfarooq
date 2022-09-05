import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Faiq Farooq </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            Computer Engineer who loves to transform ideas into reality using
            code.
            <br />
            Motivated designer and developer with experience creating
            custom websites with ReactJs, JavaScript, HTML5, CSS3.
            We are here to digitalize your idea into complete app not just by frontend, but also with backend with help of MERN technology.
            <br />
            Few servises i can provide you
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Front End App
            </li>
            <li className="about-activity">
              <ImPointRight /> Back End App
            </li>
            <li className="about-activity">
              <ImPointRight /> API integration
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Base Managment
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
