import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

export default function Header(){
    return(
        <Navbar bg="light">
            <Container>
                <Nav className='m-auto'>
                    <Navbar.Brand href="#home"> Todo list - IPSSI </Navbar.Brand>
                    <Nav.Link href="/">Accueil</Nav.Link>
                </Nav>
          </Container>
      </Navbar>
    )
}