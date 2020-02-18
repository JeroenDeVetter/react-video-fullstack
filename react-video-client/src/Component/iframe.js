import React from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

const iframe = (props) => {
    let url = `https://www.youtube.com/embed/${props.trailer}`;
    return(

        <div style={{ width: 660, height: 'auto' }}>
            <ResponsiveEmbed aspectRatio="16by9">
                <embed type="video/webm" src={url} />
            </ResponsiveEmbed>
        </div>

    )

};

export default iframe;