import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/faiq.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import "../Home/Home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name" style={{fontFamily:"'Exo', sans-serif", color:"orange"}}> Faiq Farooq</strong>
              </h1>

              <p className="heading-description blockquote">
                I am passionate about using Javascript, react js and Animation Libraries
                to create awesome user experiences. With the
                experience developing web applications using the latest
                front-end and back-end technologies.I have developed few
                application with react js and MERN technology.
              </p>

              <div className="heading-type" style={{fontFamily:"'Exo', sans-serif" }}>
                {"  "}
                <TypeWriter  />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-picture" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1 style={{fontFamily:"'Exo', sans-serif", color:"#105099"}}>Get in Touch</h1>
              <p style={{fontFamily:"'Exo', sans-serif"}}>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong style={{fontFamily:"'Exo', sans-serif"}}>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;