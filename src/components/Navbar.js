import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";


import { MdDeveloperMode,MdLogin,MdLogout } from "react-icons/md";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    
      <div className="row">
        <div className="col" >
        <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="https://faiqfarooq.live/" target="_blank" style={{fontFamily:"'Exo', sans-serif"}}>
          <MdDeveloperMode style={{ marginBottom: "2px"  }} /> faiqfarooq.live
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} style={{fontFamily:"'Exo', sans-serif"}}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)} style={{fontFamily:"'Exo', sans-serif"}}  >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)} style={{fontFamily:"'Exo', sans-serif"}}   >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}    />{" "}
                Projects
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)} style={{fontFamily:"'Exo', sans-serif"}}  >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://faiqfarooq.github.io/profolio/"
                target="_blank"
                rel="noreferrer" style={{fontFamily:"'Exo', sans-serif"}}   >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/signin"
                onClick={() => updateExpanded(false)} style={{fontFamily:"'Exo', sans-serif"}}  >
                <MdLogin style={{ marginBottom: "2px" }} /> Signin
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/signup"
                onClick={() => updateExpanded(false)} style={{fontFamily:"'Exo', sans-serif"}}  >
                <MdLogout style={{ marginBottom: "2px" }} /> Register
              </Nav.Link>
            </Nav.Item>

        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
      </div>
      
  );
}

export default NavBar;
