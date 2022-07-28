import React from "react";

import Cards from "../Components/CRUDFunctions/Cards";
import SideBar from "../Components/SIdeBar/SideBar";

const ToDoPage = () => {

    return (
        <div className="SideB">
            <SideBar />
            <div className="CardP">
                <Cards />
            </div>
        </div>
    )
}

export default ToDoPage;

