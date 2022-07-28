import React from "react";
import { Routes, Route } from "react-router-dom";
import ViewPage from "./AppToDo/Pages/ViewPage.jsx";
import CreateNewCard from "./AppToDo/Pages/CreateNewCard.jsx";
import LoginPage from "./AppToDo/Pages/LoginPage.jsx";

import { useSelector } from "react-redux";

import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { setIsLoggedIn } from "./AppToDo/features/userSlice.js";

const App = () => {


  const { isLoggedIn } = useSelector((state) => state.users);

  const dispatch = useDispatch()


  useEffect(() => {
    const data = window.localStorage.getItem("isLoggedIn");
    if (data !== null) dispatch(setIsLoggedIn(JSON.parse(data)))

    console.log(data);

  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        {isLoggedIn === true ?
          <Route path="/ViewPage" element={<ViewPage />} exact />
          : null
        }
        {isLoggedIn === true ?
          <Route path="/CreateUser" element={< CreateNewCard />} exact />
          : null
        }
      </Routes>
    </div>
  );
};


export default App;
