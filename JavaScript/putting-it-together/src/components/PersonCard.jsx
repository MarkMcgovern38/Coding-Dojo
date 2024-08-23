import { useState } from "react";
import style from "../css/PersonCard.module.css"

const PersonCard = (props) => {

    const { name, hair_color, age: initialAge } = props;
    const [age, setAge] = useState(Number(initialAge));

    return (
        <div className="text-center border border-dark mt-2">
            <label htmlFor="name"></label>
            <h1 id="name">{name}</h1>

            <p id="age">Age: {age}</p>

            <p id="hair_color">Hair Color: {hair_color}</p>

            <button className="mb-2" onClick={ () => setAge(age + 1)}> Birthday Button for {name} </button>


        </div>

    )


}

export default PersonCard