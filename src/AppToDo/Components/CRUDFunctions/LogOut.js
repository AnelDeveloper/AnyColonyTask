import React from 'react'
import { deleteUser } from "../../features/userSlice";

import { useDispatch, useSelector } from 'react-redux';

import { setIsLoggedIn } from '../../features/userSlice';
import { useNavigate } from "react-router-dom";

import './Card.css'


export const LogOut = () => {

    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.users);
    const navigate = useNavigate();

    const handleLogout = () => {
        if (isLoggedIn === true) {
            localStorage.setItem("isLoggedIn", JSON.stringify(false));
            dispatch(setIsLoggedIn(false))
            navigate('/')

        }
    }


    return (
        <button
            class="LogOut-Btn"
            onClick={handleLogout}
        >                                <div className='text-createdCard'>Logout</div>
        </button>
    )
}

