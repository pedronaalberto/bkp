import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LineIcon from "react-lineicons"

import './TopMenu.css'

export default class TopMenu extends React.Component {
  render() {
    function openFacebook(){
      window.open('https://www.facebook.com', '_blank');
    }
    function openInstagram(){
      window.open('https://www.instagram.com', '_blank');
    }
    function openTwitter(){
      window.open('https://www.twitter.com', '_blank');
    }
    function openTelegram(){
      window.open('https://www.telegram.com', '_blank');
    }
    function openDiscord(){
      window.open('https://www.discord.com', '_blank');
    }

    return <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className='top-menu sticky-top'>
      <Container className='px-0'>
      <Navbar.Brand href="#home">
      <img
        className="site-logo"
        src="/Img/Logo.png"
        alt="BonkPark"
      />
        BonkPark!</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">The Project</Nav.Link>
          <Nav.Link href="#pricing">The Arcade</Nav.Link>
          <Nav.Link href="#pricing">The Attractions</Nav.Link>
          <Nav.Link href="#pricing">The Bar</Nav.Link>
          <Nav.Link href="#pricing">Contacts</Nav.Link>
        </Nav>
        <Nav>
        <Button as="a" className='connect-wallet-button' onClick={ openFacebook }>
          <LineIcon name="facebook" />
          </Button>
          <Button as="a" className='connect-wallet-button' onClick={ openInstagram }>
          <LineIcon name="instagram" />
          </Button>
          <Button as="a" className='connect-wallet-button' onClick={ openTwitter }>
          <LineIcon name="twitter" />
          </Button>
          <Button as="a" className='connect-wallet-button' onClick={ openTelegram }>
          <LineIcon name="telegram" />
          </Button>
          <Button as="a" className='connect-wallet-button' onClick={ openDiscord }>
          <LineIcon name="discord" />
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
  }
}