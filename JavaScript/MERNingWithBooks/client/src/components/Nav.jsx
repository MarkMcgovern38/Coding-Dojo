import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <header>
            <nav className='bg-secondary pb-2 border border-dark'>
                <div className="row pl-4">
                    <button className='m-1 bg-primary'><Link to={'/'} className='text-light'>Catalog</Link></button>
                </div>
                <div className="row pl-4">
                    <button className='m-1 bg-primary'><Link to={'/new/book'} className='text-light'>Add A Book</Link></button>
                </div>
            </nav>
        </header>
)}

export default Nav;