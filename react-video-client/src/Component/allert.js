import React from "react";
import Alert from "react-bootstrap/Alert";

const Allert = (props) => {
    return(
        <Alert style={{display: props.display}} show={props.success} variant={props.variant}>
            <Alert.Heading>
                {props.message}
            </Alert.Heading>
            <div className="close">&#x274C;</div>
        </Alert>
    )

};
export default Allert;