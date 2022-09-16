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
       {/* Put this code anywhere in the body of your page where you want the badge to show up. */}
       <div itemScope itemType="http://schema.org/Person" className="fiverr-seller-widget" style={{display: 'inline-block'}}>
        <a itemProp="url" href="https://www.fiverr.com/faiqfarooq" rel="nofollow" target="_blank" style={{display: 'inline-block'}}>
          <div className="fiverr-seller-content" id="fiverr-seller-widget-content-0c3ad6d3-9690-4f00-b5e3-3ddb6027a3e4" itemProp="contentURL" style={{display: 'none'}} />
          <div id="fiverr-widget-seller-data" style={{display: 'none'}}>
            <div itemProp="name">faiqfarooq</div>
            <div itemScope itemType="http://schema.org/Organization"><span itemProp="name">Fiverr</span></div>
            <div itemProp="jobtitle">Seller</div>
            <div itemProp="description">Hello my name is Faiq! I will complete 
              my Bachelor of Science in Computer Engineering. Besides having my degree, I also have 1-years’ experience of extensive web development. I will develop any kind of website from scratch according to your requirement. Also, I have experience in creating ecommerce websites. I have experience in php, html, java script, ajex, bootstrap, css. My ultimately goal is to provide you with 100% customer satisfaction guaranteed.
            </div>
          </div>
        </a>
      </div>






      <Projects/>
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
    </section>
    <Footer/>
    </div>
  );
}

export default Home;
