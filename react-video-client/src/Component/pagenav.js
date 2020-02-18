import React from "react";
import Pagination from  "react-bootstrap/Pagination";


function pagenav(props) {
    let count = props.count;
    return (
        <Pagination>
            <Pagination.Prev onClick={() => {
                if (count > 1) {
                    props.setCount(count - 1);
                    window.scrollTo({
                        top: 0
                    });

                }
            }} />
            <Pagination.Item>{count}</Pagination.Item>
            <Pagination.Next onClick={() => {
                if (count >= 1) {
                    props.setCount(count + 1);
                    window.scrollTo({
                        top: 0
                    });
                }
            }} />
        </Pagination>
    )
}
export default pagenav;