import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Nav from '../Component/nav'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from "axios";
import {Link} from "react-router-dom";


const Login = (props) => {

    console.log(props.users);
    const Login = (event) => {
        const email = document.getElementById('formBasicEmail').value;
        const password = document.getElementById('formBasicPassword').value;
        const passwordTwo = document.getElementById('formBasicPasswordTwo').value;
        Axios.post('http://localhost:3001/login', {
            email: `${email}`,
            password: `${password}`
        }).then(res => {
            props.setUsers(res.data);
        }).catch(err => console.log(err));
        event.preventDefault();
    };

    return (
        <div className="App">
            <div className="Navbar">
                <header>
                    <Nav/>
                </header>
            </div>
            <div className="Card">
                <Form method="POST" onSubmit={Login}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="Email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Link to="/register">
                            <span>No account make one here</span>
                        </Link>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )

};

export default Login;