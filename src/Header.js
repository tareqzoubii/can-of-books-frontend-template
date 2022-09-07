import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogutButton';
import Profile from './Profile';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem style={{color:"white", paddingLeft:"15px"}}><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem style={{color:"white", paddingLeft:"25px"}}><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
        <NavItem style={{color:"white", paddingLeft:"25px"}}><Link to="/About" className="nav-link">About</Link></NavItem>
        <NavItem style={{color:"white", paddingLeft:"25px"}}><LoginButton /></NavItem>
        <NavItem style={{color:"white", paddingLeft:"25px"}}><LogoutButton /></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
