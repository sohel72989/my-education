import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    const navStyle = {
        textDecoration: "none",
        fontWeight: "bold",
        color: "darkolivegreen",
        padding: "10px"
    }
    return (
        <Navbar bg="dark" variant="dark" >
            <Container className="bg-color">
                <h1><span className="headline">Edu Bizzzz</span> </h1>
                <Nav className="me-auto" >
                    <NavLink style={navStyle} activeStyle={{
                        fontWeight: "bold",
                        color: "orange"
                    }} to="/home">Home</NavLink>
                    <NavLink style={navStyle} activeStyle={{
                        fontWeight: "bold",
                        color: "orange"
                    }} to="/service">Service</NavLink>
                    <NavLink style={navStyle} activeStyle={{
                        fontWeight: "bold",
                        color: "orange"
                    }} to="/training">Training</NavLink>
                    <NavLink style={navStyle} activeStyle={{
                        fontWeight: "bold",
                        color: "orange"
                    }} to="/about">About Us</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;