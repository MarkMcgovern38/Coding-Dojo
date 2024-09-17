import React, {useState} from "react";
import { useParams } from "react-router-dom";

const Number = (props) => {
    const {stackId} = useParams();
    return(
        <div className="d-flex justify-content-center align-items-start">
            <h1>The number is: {stackId}</h1>
        </div>
    )
}

export default Number