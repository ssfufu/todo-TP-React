import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
export default function Footer(){
    return(
        <Navbar bg="light" style={
            {
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000
            }}>
            <Container>
                <Nav className='m-auto'>
                    <Navbar.Brand href="#home"> Todo list - IPSSI </Navbar.Brand>
                    <Nav.Link href="https://www.github.com/ssfufu">Mathieu MEDINAS</Nav.Link>
                </Nav>
          </Container>
      </Navbar>
    )
}