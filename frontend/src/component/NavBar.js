import React from 'react'
import { Navbar , Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/contacts'>contacts</Nav.Link>
      <Nav.Link as={Link} to='/addContact'>add contact</Nav.Link>
    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-secondary">Search</Button>
      </Form>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavBar