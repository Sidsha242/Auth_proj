import React from 'react'
import Axios from 'axios';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');   //for login
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginstatus] = useState(false);

    Axios.defaults.withCredentials = true

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username,                              //sending to backend
            password: password,
        }).then((response) => {
            if (!response.data.auth) {
                setLoginstatus(false);
            }
            else {
                localStorage.setItem("token", response.data.token);
                setLoginstatus(true);
            }
        });
    };

    const userAuthenticated = () => {
        Axios.get("http://localhost:3001/isUserAuth", {
            username: username,                              //sending to backend
            password: password,
            headers: {
                "x-access-token": localStorage.getItem("token"),

            },
        }).then((response) => {
            console.log(response);
            window.location.href = 'http://localhost:3000/dashboard';
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();    //prevents refresh on submiting
    }

    return (
        <>
            <div className="login text-center container mx-auto bg-gray-200 rounded-xl shadow border p-6 m-6">
                <h1 className="text-3xl text-gray-700 font-bold mb-5">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username' className='mr-2'>Username :</label>
                        <input type="text" className="rounded-xl box-border h-11 w-150 pl-2 mt-2" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='password' className='mr-2'>Password :</label>
                        <input type="text" className="rounded-xl box-border h-11 w-150 pl-2 mt-2" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="h-12 px-6 mt-3 text-lg bg-sky-500 rounded-lg hover:bg-sky-700" onClick={login}>Login</button>
                </form>

                <Link to="/register" className='font-bold'>Not Registered?</Link>
            </div>

            {console.log(loginStatus)}
            {loginStatus && (
                <button onClick={userAuthenticated}
                    className="h-12 px-6 mt-3 text-lg bg-sky-500 rounded-lg hover:bg-sky-700">
                    Check If Auth
                </button>)}

        </>
    )
}

export default Login