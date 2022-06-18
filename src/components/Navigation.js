import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
function Navigation(setTitleMovie, setRateMovie) {


  return (
    <div>

<Navbar bg="dark" expand="lg" variant ="dark">
      <Container fluid>
        <Navbar.Brand href="#"  style={{fontFamily:" 'Dancing Script',cursive"}}>Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
           
          >
          <Link to ="/" style={{textDecoration:"none"}}> <Nav.Link href="#action1">Home</Nav.Link> </Link> 
          <Link to="/about" style={{textDecoration:"none"}}> <Nav.Link href="#action2">About</Nav.Link></Link> 
          <Link to ="/contact" style={{textDecoration:"none"}}> <Nav.Link href="#action2">Contact</Nav.Link></Link> 
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>


    </Navbar>

    
    </div>
  )
} 

export default Navigation
