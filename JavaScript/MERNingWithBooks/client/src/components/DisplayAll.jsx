import React, {useEffect, useState} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const DisplayAll = (props) => {
    const[books, setBooks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/books')
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            <h1>Book Catalog</h1>
            {
                books.map((book) => (
                    <div key={book._id}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="col-2" scope="col">Title</th>
                                    <th className="col-2" scope="col">Author</th>
                                    <th className="col-2" scope="col">Page count</th>
                                    <th className="col-2" scope="col">Available</th>
                                    <th className="col-2" scope="col">Book Page</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.pages}</td>
                                    <td>{book.isAvailable ? "Yes" : "No"} / <Link to={`/edit/book/${book._id}`}>Edit</Link></td> 
                                    <td><Link to={`/details/book/${book._id}`}>Book Details</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAll;