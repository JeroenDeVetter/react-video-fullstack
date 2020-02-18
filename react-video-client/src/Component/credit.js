import React from 'react';
import Card from 'react-bootstrap/Card';
import NoImg from "../img/noimg.jpg";


const credit = (props) => {
    let gender = "";
    if (props.gender === 0) {
        gender = "Unspecified";
    }if(props.gender === 1) {
        gender = "Female";
    }else {
        gender = "Male"
    }
    let img  = '';

    if (props.src === null) {
        img = NoImg;
    }
    else {
        img = `http://image.tmdb.org/t/p/w185//${props.src}`;
    }

    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={img}/>
            <Card.Body style={{display: 'block'}}>
                <Card.Title>{props.character}</Card.Title>
                <Card.Text>
                    {props.name}
                </Card.Text>
                <Card.Text>
                    {gender}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default credit;