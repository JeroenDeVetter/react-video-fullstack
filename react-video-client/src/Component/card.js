import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

const card = (props) => {
    return (
        <Card style={{width: '18rem'}}>
            <Link to="/movie">
                <Card.Img variant="top" src={props.src}/>
            </Link>
            <Card.Body style={{display: 'block'}}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.overview}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default card;