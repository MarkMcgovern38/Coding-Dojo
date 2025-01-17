import axios from 'axios'
import React, {useContext, useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../context/userContext';

const Home = (props) => {
    const {user, setUser} = useContext(userContext)
    const navigate = useNavigate()
    const logout = () => {
        axios.post('http://localhost:8000/api/v1/logout', {}, {withCredentials:true})
            .then(() => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const [rounds, setRounds] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/rounds', { withCredentials: true })
            .then((res) => {
                setRounds(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    const deleteRound = (id) => {
        axios.delete(`http://localhost:8000/api/v1/rounds/${id}`, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            console.log("Round deleted:", res.data);
            setRounds((prevRounds) => prevRounds.filter((round) => round._id !== id));
        })
        .catch((err) => {
            console.error("Error deleting round:", err.response?.data?.message || err.message);
        });
    };


    return (
        <div className='container-fluid'>

            {/* Header */}
            <div className='row mt-3 align-items-center'>
                <div className='col-3'>
                    <button className='ml-4'><Link to={'/round/new'}> Add a Round </Link></button>
                </div>
                <div className='col-6 text-center'>
                    <h1>Golf Tracker</h1>
                </div>

                <div className='col-3 d-flex justify-content-end'>
                    <button onClick={logout} className='mr-4'>Logout</button>
                </div>
            </div>
            <div className='row align-items-center mt-4'>
                <div className='col-12 text-center'>
                    <h2>{user?.firstName ? `${user.firstName}'s Rounds` : "Your Rounds"}</h2>
                </div>
            </div>
            {/* Golf Rounds */}
            <div className='row'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Course</th>
                            <th scope="col">Scores</th>
                            <th scope="col">Notes</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rounds.map((round) => (
                            <tr key={round._id}>
                                <td>{round.courseName}</td>
                                <td>{round.scores.join(', ')}</td>
                                <td>{round.notes}</td>
                                <td>
                                    <Link to={`/round/edit/${round._id}`} className="btn btn-warning btn-sm">
                                        Edit
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => deleteRound(round._id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home;