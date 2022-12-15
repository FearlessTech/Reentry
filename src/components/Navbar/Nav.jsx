import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";

export const Navbarr = () => {
    const [style, setStyle] = useState("link");
    const user = useSelector(selectUser);
  
    const changeStyle = () => {
      setStyle("afterclick");
    };
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand to="/"><img className="logoimg" src="/images/MaineRRLogo.png" alt="" /></Navbar.Brand>
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/network">Network</Nav.Link>
                  <Nav.Link href="/resource">Resources</Nav.Link>
                  <NavDropdown
                    title="Me"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  > 
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/messaging">Messaging</NavDropdown.Item>
                    <NavDropdown.Item href="/notifications">Notifications</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="login" onClick={(e) => { firebase.auth().signOut();}}>
                        Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarr;