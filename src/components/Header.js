import React from "react";

import { useSelector,useDispatch } from "react-redux";

import actionTypes from "../redux/actions/actionTypes";

import {Container,Nav,Navbar} from "react-bootstrap"

import "../assets/styles/header.css";

import logo from "../assets/images/logo.png";
import logout from "../assets/images/logout.png";


const Header = () => {
    const {loginState}= useSelector(state=>state)

    const dispatch = useDispatch()

    return (
    <>
      <Navbar bg="primary" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} style={{width:"90px"}}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="navLinks">Home</Nav.Link> 
            <Nav.Link href="/about-us" className="navLinks">About us</Nav.Link>
            <Nav.Link href="/#" className="navLinks">All posts</Nav.Link>
            <Nav.Link href="/#" className="navLinks">Contacts</Nav.Link>
          </Nav>
          {
                !loginState.success ? (
                    <Nav.Link href="/login" className="navLinks">Login</Nav.Link>
                ):(
                    <>
                    <Nav.Link href="/admin-home" className="adminLink">Admin</Nav.Link>
                    <Nav.Link onClick={()=>{
                      dispatch({type:actionTypes.loginActions.LOGOUT})
                    }} href="/" className="logoutLink" style={{marginRight:"0px"}}>{loginState.user.username} logout <img src={logout} /></Nav.Link>
                    </>
                )
            }
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

/*   

<header>
        <div id="menuIcon" className="menuBars">
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>

        <div className="logoContainer">
          <img src={logo} width="100px" alt="logo" />
        </div>

        <nav id="menuNavbar">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>About us</Link>
            </li>
            <li>
              <Link to={"/"}>All posts</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

*/
