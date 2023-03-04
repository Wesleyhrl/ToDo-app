import React from "react";
import './menu.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


export default function Menu(props) {
    const linkActive = "link-active";
    return (
        <Navbar  collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand><NavLink className="text-light" to="/todos">React ToDo</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-lg-5 d-flex align-items-center links">
            <NavLink className={({isActive})=> isActive ? linkActive: undefined} to="/todos">Tarefas</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}