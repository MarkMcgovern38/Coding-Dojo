import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const EditBookForm = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState(0);
    const [isAvailable, setIsAvailable] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/books/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setAuthor(res.data.author);
                setPages(res.data.pages);
                setIsAvailable(res.data.isAvailable)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])


    const submitHandler = (e) => {
        e.preventDefault();
        const updatedBook = {
            title,
            author,
            pages,
            isAvailable
        }
        axios.put(`http://localhost:8000/api/v1/books/${id}`, updatedBook)

            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <h1>Update {title}</h1>
            <form onSubmit={submitHandler}>
                <div className="p-2">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title..." />
                    {
                        errors.title ?
                            <p className="text-danger"> {errors.title.message} </p> :
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
                <button className="m-2">Update Book!</button>
            </form>
        </div>
    )
}

export default EditBookForm