import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../Home/Home.css"
// import Particle from "../Particle";
import pdf from "../../Assets/FAIQ+FAROOQ+Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Footer from "../Footer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
    <div className="secttion">
      <Container fluid className="resume-section">
        <Row className="resume">
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <a href="https://griap.link/resources/hit/1470/HvEMyfy39v"><img src="https://griap.link/resources/view/1470/HvEMyfy39v" alt="Get leads. Get sales. Get growing."/></a>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <a href="https://griap.link/resources/hit/1472/HvEMyfy39v"><img src="https://griap.link/resources/view/1472/HvEMyfy39v" alt="Get leads. Get sales. Get growing. [2]"/></a>
        <a href="https://griap.link/resources/hit/1524/HvEMyfy39v"><img src="https://griap.link/resources/view/1524/HvEMyfy39v" alt="Convert website traffic with signup forms (en)"/></a>
        <a href="https://griap.link/resources/hit/1121/HvEMyfy39v"><img src="https://griap.link/resources/view/1121/HvEMyfy39v" alt="Responsive Landing Page Templates"/></a>
        <a href="https://griap.link/resources/hit/565/HvEMyfy39v"><img src="https://griap.link/resources/view/565/HvEMyfy39v" alt="Pricing: Save 18% with an annual plan"/></a>
        
   
      
      </Container>
    </div>
    <Footer/>
    </div>
  );
}

export default ResumeNew;
