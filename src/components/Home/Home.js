import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/faiq.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import "../Home/Home.css";
import Footer from "../Footer";
import Projects from "../Projects/Projects";
import About from "../About/About";

function Home() {
  return (
    <div>
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} sm={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave " role="img" aria-labelledby="wave">
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
            <Col md={2}>
            </Col>

            <Col md={4} sm={12}>
              <img src={myImg} className="profile-picture" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      

      <a href="https://griap.link/resources/hit/1543/HvEMyfy39v"><img src="https://griap.link/resources/view/1543/HvEMyfy39v" alt="Be known by your own web domain (en)"/></a>




      <Projects/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ZhZlo8YT-gU" frameborder="0" allowfullscreen></iframe><br/><br/><a href="https://griap.link/resources/hit/1611/HvEMyfy39v"><img src="https://griap.link/resources/view/1611/HvEMyfy39v" alt="Conversion funnels for freelancers"/></a>
      <About/>
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
   
      
      <a href="https://griap.link/resources/hit/1488/HvEMyfy39v"><img src="https://griap.link/resources/view/1488/HvEMyfy39v" alt="Live Web Chats [en]"/></a>
    <Footer/>
    </section>
    </div>
  );
}

export default Home;
