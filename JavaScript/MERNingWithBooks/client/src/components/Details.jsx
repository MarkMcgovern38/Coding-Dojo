import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";


const Details = (props) => {
    const {id} = useParams();
    const [book, setBook] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/books/${id}`)
            .then((res) => {
                setBook(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const deleteBook = (id) => {
        axios.delete(`http://localhost:8000/api/v1/books/${id}`)
            .then(() => navigate('/'))
            .catch((err) => console.log(err))
    }

    return ( 
        <div>
            <h2>{book.title}</h2>
            <h2>By {book.author}</h2>
            <h2>Page Count: {book.pages}</h2>
            {
                book.isAvailable?
                <p>Available for borrowing</p>:
                <p>None left</p>
            }
            <button onClick={() => deleteBook(book._id)}>Borrow</button>
        </div>
    )
}

export default Details;