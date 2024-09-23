import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBookForm = (props) => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState(0)
    const [isAvailable, setIsAvailable] = useState(false)
    const [errors, setErrors] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        const newBook = {
            title,
            author,
            pages,
            isAvailable
        }
        axios.post('http://localhost:8000/api/v1/books', newBook)
            
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            })
    }

    return(
        <div>
            <h1>Add a Book</h1>
            <form onSubmit={submitHandler}>
                <div className="p-2">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title..."/>
                    {
                        errors.title?
                        <p className="text-danger"> {errors.title.message} </p>:
                        null
                    }
                </div>
                <div className="p-2">
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Book Author..." />
                    {
                        errors.author ?
                            <p className="text-danger"> {errors.author.message} </p> :
                            null
                    }
                </div>
                <div className="p-2">
                    <input type="text" value={pages} onChange={(e) => setPages(e.target.value)} placeholder="Number of Pages..." />
                    {
                        errors.pages ?
                            <p className="text-danger"> {errors.pages.message} </p> :
                            null
                    }
                </div>
                <div className="p-2">
                    <label >Is It Available?</label>
                    <input type="checkbox" checked={isAvailable} value={isAvailable} onChange={() => setIsAvailable(!isAvailable)} placeholder="Number of Pages..." />
                    {
                        errors.isAvailable ?
                            <p className="text-danger"> {errors.isAvailable.message} </p> :
                            null
                    }
                </div>
                <button className="m-2">Add Book!</button>
            </form>
        </div>
    )
}

export default NewBookForm;