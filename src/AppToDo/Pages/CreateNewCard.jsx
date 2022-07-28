import React from 'react'
import { Add } from '../Components/CRUDFunctions/Add'
import SideBar from '../Components/SIdeBar/SideBar'

const CreateNewCard = () => {
    return (
        <div className="container">
            <SideBar />
            <Add />
        </div>

    )
}

export default CreateNewCard