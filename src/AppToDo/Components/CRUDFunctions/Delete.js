import React from 'react'
import { deleteUser } from "../../features/userSlice";

import { useDispatch } from 'react-redux';


export const Delete = ({ user }) => {

    const dispatch = useDispatch();

    return (
        <button
            class="btn draw-border"
            onClick={() => {
                dispatch(deleteUser({ id: user.id }));
            }}
        >Delete</button>
    )
}

