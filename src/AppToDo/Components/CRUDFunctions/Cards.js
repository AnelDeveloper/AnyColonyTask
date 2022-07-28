import React, { useState } from "react";

import './Card.css'
import { useSelector } from "react-redux";



import { UpdateUser } from "./Update";
import { Delete } from "./Delete";
import { updateUserName } from "../../features/userSlice";

const Cards = () => {

  const [newUserName, setNewUsername] = useState();
  const userList = useSelector((state) => state.users.cards.value);
  const isLoggedIn = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState("");



  console.log(isLoggedIn)



  return (
    <div>

      <div className="divSearch">
        <div class="Search">
          <div class="SearchInner">
            <label className="searchText">Search AntColony EmployerCard</label>
            <div class="SearchC">
              <div class="Icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              </div>
              <div class="InputContainer">
                <input
                  type="text"
                  placeholder="Search.."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);

                  }}

                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ContainerMain">
        {userList.filter((val) => {
          if (searchTerm == "") {
            return val
          } else if
            (val.username.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((user, key) => (
          <div className="Cards">
            <div className="card">
              <div >
                {" "}
                <div className="image-card">
                  <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFbkhEi2COwyg/company-logo_200_200/0/1652169112386?e=2147483647&v=beta&t=bjkHQxjmITuVwEXgbxEqBbl1Ir65LPnxcSGQ8pK2t7Y" alt="Person" class="card__image" />
                </div>
                <h1 class="card__name" key={key.name}>{user.name}</h1>
                <p className="card__name" key={key.username}>{user.username}  {console.log(user.username)}</p>
              </div>
              <div className="change">
                <input
                  required
                  className="changeInput"
                  type="text"
                  placeholder="new Username"
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </div>
              <UpdateUser
                newUserName={newUserName}
                user={user}
                updateUserName={updateUserName}
                setNewUsername={setNewUsername}
              />
              <Delete
                user={user}
              />
            </div>
          </div>


        ))}

      </div>
    </div>

  );
};

export default Cards;
