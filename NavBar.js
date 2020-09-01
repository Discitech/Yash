import React from "react";
import "../css/Navbar.css";
import logo from '../images/logo.jpeg';
import { Navbar, Nav, Button, Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhoneAlt, faAt, faCode } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      scrollbar: "scroll"
    };
  }  

  listenScrollEvent = (e) => {
    if (window.scrollY > 66) {
      this.setState({ scrollbar: "scrolled" });
    } else {
      this.setState({ scrollbar: "scroll" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Container>
        <Navbar bg="light" expand="lg" fixed="top" className={this.state.scrollbar}>
            <Navbar.Brand className="logo-left">
              <Link to="/">
                <Image src={logo}  />
              </Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end right"
            >
            <Nav>
              <NavLink exact to="/"  activeStyle={{fontWeight: "bold",color: "red"}} className="nav-link">
                <FontAwesomeIcon icon={faHome} />Home</NavLink>
              <NavLink exact to="/Blogs" activeStyle={{fontWeight: "bold",color: "red"}} className="nav-link">
                <FontAwesomeIcon icon={faCode} />Blogs</NavLink>
              <NavLink exact to="/Quizzes" activeStyle={{fontWeight: "bold",color: "red"}} className="nav-link">
                <FontAwesomeIcon icon={faHome} />Quizzes</NavLink>
              {/* <NavLink to="/Programming" activeStyle={{fontWeight: "bold",color: "red"}} className="nav-link">
                <FontAwesomeIcon icon={faHome} />Programmming</NavLink> */}
              <NavLink exact to='/About' activeStyle={{fontWeight: "bold",color: "red"}} className="nav-link">
                <FontAwesomeIcon icon={faAt} />About Us</NavLink>
              <NavLink to="/Contact" activeStyle={{fontWeight: "bold",color: "red"}} className="nav-link">
                <FontAwesomeIcon icon={faPhoneAlt} />Contact</NavLink>
              <Nav.Item className="ml-auto">
                <Button className="ml-3 mr-2" variant="outline-danger">
                  <Link to="/Signup">Sign Up</Link>
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default NavBar;