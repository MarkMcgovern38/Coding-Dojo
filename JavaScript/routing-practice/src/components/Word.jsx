import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Word = (props) => {

    const { stackId, color, bgcolor } = useParams();
    const wordColor = {
        color: color,
        backgroundColor: bgcolor,
    }

    return (
        <div className="d-flex justify-content-center align-items-start">
            <h1 style={wordColor}>The word is: {stackId}</h1>
        </div>
    )
}

export default Word