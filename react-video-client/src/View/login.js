import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Nav from '../Component/nav'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sucsses from '../Component/allert';
import Axios from "axios";
import {Link} from "react-router-dom";

const Login = (props) => {

    const login = (event) => {
        const email = document.getElementById('formBasicEmail').value;
        const password = document.getElementById('formBasicPassword').value;
        Axios.post('http://localhost:3001/login', {
            email: `${email}`,
            password: `${password}`,
        }).then(res => {
            props.setUsers(res.data[0]);
            if (res.data[0].status === true) {
                props.setDisplay('block');
                props.setVariant('success');
                props.setMassage(`welcome ${res.data[0].firstName} ${res.data[0].lastName}`)
                props.setLogout('');
                return;
            }
            if (res.data[0].status === 'noFound') {
                props.setDisplay('block');
                props.setVariant('danger');
                props.setMassage(`No known user found with this email please register first`);
                return;
            } else {
                props.setDisplay('block');
                props.setVariant('danger');
                props.setMassage(`Email and or password is incorrect`);
                return;
            }
        }).catch(err => console.log(err));
        event.preventDefault();
    };

    useEffect(() => {
        document.querySelector('.logout').addEventListener("click", () => {
            props.setUsers('');
            props.setDisplay('block');
            props.setVariant('success');
            props.setLogout('none');
            props.setMassage('You are logged out')
        });

        document.querySelector('.close').addEventListener("click", () => {
            props.setDisplay('none');
            props.setUsers('');
            props.setVariant('');
            props.setLogout('');
            props.setMassage('');
        });

    }, []);


    return (
        <div className="App">
            <div className="Navbar">
                <header>
                    <Nav/>
                </header>
            </div>
            <Sucsses variant={props.variant} display={props.display} message={props.message} name={props.users}/>
            <div className="Card">
                <Form method="POST" onSubmit={(event) => {
                    login(event);
                }}>
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
                        <Link to="/register">
                            <span>No account make one here</span>
                        </Link>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
            <Button className="logout" style={{display: props.logout}} variant="primary">
                Login out
            </Button>
        </div>
    )

};

export default Login;