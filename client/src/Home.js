
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react'

const Home = () => {
    return (
        <div>
            <p className="font-medium leading-tight text-5xl mt-0 mb-2 text-back-600" >Welcome!</p>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Home