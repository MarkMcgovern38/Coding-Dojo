import axios from 'axios'
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../context/userContext';

const NewRound = (props) => {
    const { user, setUser } = useContext(userContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [scores, setScores] = useState(Array(18).fill(0));
    const [notes, setNotes] = useState('');
    const [rounds, setRounds] = useState([]);
    const [formErrors, setFormErrors] = useState({
        name: "Name is required",
    });
    


    const logout = () => {
        axios.post('http://localhost:8000/api/v1/logout', {}, { withCredentials: true })
            .then(() => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    
    const nameHandler = (e) => {
        setName(e.target.value);
        let errorMsg = "";
        if (e.target.value === "") {
            errorMsg = "Course name is required";
        } 
        else {
            errorMsg = "";
        }
        setFormErrors({ ...formErrors, name: errorMsg });
    };

    const scoreHandler = (index, value) => {
        const updatedScores = [...scores];
        updatedScores[index] = value === '' ? '' : parseInt(value, 10);
        setScores(updatedScores);
    };

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/rounds', {
            withCredentials: true, 
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => {
            setRounds(res.data);
            })
        .catch((err) => {
            console.log(err)
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const newRound = {
            courseName: name,
            scores: scores.map((score) => parseInt(score, 10) || 0),
            notes,
            userId: user._id,
            date: new Date().toISOString(),
        }
        axios.post('http://localhost:8000/api/v1/rounds', newRound, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",  
        }
    })

            .then((res) => {
                navigate(`/home`);
            })
            .catch((err) => {
                console.error("Error saving round:", err.response?.data?.errors || err.message);
            })
    }



    return (
        <div className='container-fluid'>

            {/* Header */}
            <div className='row mt-3 align-items-center'>
                <div className='col-3'>
                    <button className='ml-4'><Link to={'/home'}> Home </Link></button>
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
                    <h2>Add a Course</h2>
                </div>
            </div>
            {/* Golf Rounds */}
            <form onSubmit={submitHandler} className="m-4">
                <div className='row'>
                    
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <div className='row'>
                            <h3 className='mr-3'>Course Name:</h3>
                            <input type="text" value={name} onChange={nameHandler} placeholder="Name..." />
                        </div>
                        <div className='row mt-4'>
                            <h3 className='mr-3'>Holes:</h3>
                            <table className="table table-bordered text-center">
                                <thead className="table-dark">
                                    <tr>
                                        <th colSpan="10">Front 9</th>
                                    </tr>
                                    <tr>{Array.from({ length: 9 }, (_, index) => (
                                            <th key={index + 1}>{index + 1}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>{scores.slice(0, 9).map((score, index) => (
                                            <td key={index}>
                                                <input
                                                    type="number"
                                                    value={score}
                                                    onChange={(e) => scoreHandler(index, e.target.value)}
                                                    className="form-control"
                                                    min="0"
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                                <thead className="table-dark">
                                    <tr>
                                        <th colSpan="10">Back 9</th> 
                                    </tr>
                                    <tr>
                                        {Array.from({ length: 9 }, (_, index) => (
                                            <th key={index + 10}>{index + 10}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>{scores.slice(9, 18).map((score, index) => (
                                            <td key={index + 9}>
                                                <input
                                                    type="number"
                                                    value={score}
                                                    onChange={(e) => scoreHandler(index + 9, e.target.value)}
                                                    className="form-control"
                                                    min="0"
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                />
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6 offset-md-3">
                                <label htmlFor="notes" className="form-label">
                                    Notes
                                </label>
                                <textarea
                                    id="notes"
                                    className="form-control"
                                    rows="4"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Notes about this round..."
                                ></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-4">Save Round</button>
                    </div>
                    <div className='col-2'></div>
                </div>
            </form>

        </div>
    )
}

export default NewRound;

