import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './SideBar.css'
import { LogOut } from '../CRUDFunctions/LogOut'

const SideBar = () => {

    const [createdCard, setCreatedCard] = useState(false);
    const [goBack, setGoBack] = useState(false)


    const navigate = useNavigate()



    const GoBack = (e) => {


        if (createdCard === false) {
            setCreatedCard(true);
            navigate('/ViewPage')
        }

    }

    const CreateUser = (e) => {
        if (goBack === false) {
            setGoBack(true);



            navigate('/CreateUser')
        }

    }









    return (
        <>
            <div className='navbarWrapper'>
                <div className="sidenav">
                    <div className='navPages'>


                        <div className='ViewPageGoBack'>
                            <button onClick={GoBack} className='btn-side'>
                                <div className='text-createdCard'>ViewPage</div>                            </button>
                        </div>
                        <div className='CreateCardEmployer'>
                            <button onClick={CreateUser} className='btn-side'>
                                <div className='text-createdCard'>CreateCard</div>
                            </button>
                        </div>
                        <div className='LogOutSideBar'>
                            <LogOut />
                        </div>

                    </div>


                </div >
            </div>
        </>
    )
}

export default SideBar