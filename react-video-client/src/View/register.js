import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Nav from '../Component/nav'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"

const Register = () => {



    const register = (event) => {
        const image = document.getElementById('formBasicProfile').filesé;
        console.log(image);
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
                    <Form method="POST" onSubmit={(event) => register(event)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='Email' placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="Password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPasswordTwo">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control name="PasswordTwo" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Link to="/login">
                                <span>Already a account click here</span>
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

export default Register;