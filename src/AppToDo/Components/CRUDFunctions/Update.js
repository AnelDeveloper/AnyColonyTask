import React from 'react'

import { useDispatch } from 'react-redux';
import './Card.css'

export const UpdateUser = ({ newUserName, user, updateUserName, setNewUsername }) => {

    const dispatch = useDispatch();


    const HandleUpdate = () => {

        if (newUserName.trim().length !== 0) {

            dispatch(
                updateUserName({ id: user.id, username: newUserName })
            );
            setNewUsername(null)


        } else {
            alert('input value is empty');
        }
    };


    return (
        <button
            class="btn draw-border"
            onClick={HandleUpdate}
        >Update</button>
    )
}

