import { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg">
          <Navbar.Brand>
            <div>Books</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbar;
