
import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './NavBar.css'

const NavBar = () => {
  return (
    <div><Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">HomeArch</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1" id="navstyle">Get Ideas</Nav.Link>
          <Nav.Link href="#action2" id="navstyle1">Sign In</Nav.Link>
          <NavDropdown title="Find Professionals" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3" >Architecs</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Interior Designer
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Other Services
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Join us as Pro
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default NavBar



