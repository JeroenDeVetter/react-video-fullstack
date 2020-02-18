import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import {Link} from "react-router-dom";

function nav(props) {

    return (
        <Navbar bg="dark" variant="dark">
            <Link to="/">
                <Navbar.Brand >Movie Hub</Navbar.Brand>
            </Link>
            <Nav className="mr-auto">
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link className="ml-2" to="/login">
                    <span>Login</span>
                </Link>
            </Nav>

            <FormControl onKeyPress={(event) => {
                if (event.key === "Enter") {
                    props.event(document.getElementById('movieName').value)
                }
            }} type="text" placeholder="Search" id='movieName' className="mr-sm-2"/>

        </Navbar>
    )

}

export default nav;