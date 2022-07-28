import React from 'react'
import { useDispatch } from 'react-redux';

import { addUser } from '../../features/userSlice';

import { useState } from 'react';

import './Card.css'

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Add = () => {


    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const userList = useSelector((state) => state.users.cards.value);

    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleAdd = () => {
        if (username && name.trim().length !== 0) {
            dispatch(
                addUser({
                    id: userList[userList.length - 1].id + 1,
                    name: name,
                    username: username,
                })
            );
            navigate('/ViewPage')
        } else {
            alert('input value is empty');
        }
    };





    console.log(userList)



    return (
        <div className='CardC'>
            <div className='CreateCard'>
                <a className='CreateYourCardText'>Create Your Card</a>
                <div className='Input-Create1'>
                    <input
                        required
                        type="text"
                        placeholder="name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>

                <div className='Input-Create2'>
                    <input
                        required
                        type="text"
                        placeholder="username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>

                <button
                    className='Create-Button'
                    value="Create"

                    onClick={handleAdd}>


                    Create</button>

            </div>
        </div>
    )
}


