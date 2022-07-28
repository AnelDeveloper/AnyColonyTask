import React from 'react'

import './Login.css'

import { useEffect, useState } from 'react'

import { useDispatch } from "react-redux";

import { useSelector } from 'react-redux';

import { setIsLoggedIn } from '../../features/userSlice';

import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState()
    const { users, isLoggedIn } = useSelector((state) => state.users,);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };


    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users);
        console.log("username:", username, "password: ", password);
        const user = users.find((user) => user.username === username);
        if (user) {
            if (user.password === password && user.username === username) {

                dispatch(setIsLoggedIn(true));
                localStorage.setItem("isLoggedIn", JSON.stringify(true));
                console.log("Saved in Local Storage");
                console.log(users);

            } else {
                alert("Invalid login form")
                console.log(user)

            }
        }
    };

    useEffect(() => {
        console.log(isLoggedIn);
        if (isLoggedIn === true) {
            navigate('/ViewPage')
        }

    }, [isLoggedIn])




    return (
        <div>
            <div className='Employers'>
                <p>Welcome to AntColony CardEmployer</p>

            </div>
            <div className="login">
                <div className="form" onSubmit={handleSubmit}>
                    <form className="login-form" >
                        <div className='textAnt'>
                            <span className="material-icons">AntColony</span>
                        </div>
                        <input type="text" name="name" value={username} onChange={onChangeUsername} placeholder="name" />
                        <input type="password" name="pass" value={password} onChange={onChangePassword} placeholder="password" required />

                        <button>login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login