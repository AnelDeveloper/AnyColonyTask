import { createSlice } from "@reduxjs/toolkit";

import { UsersData } from "../FakeData";


const initialState = {
  isLoggedIn: false,
  cards: { value: UsersData },
  users: [
    {
      username: "admin",
      password: "admin"
    },

  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.cards.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.cards.value = state.cards.value.filter((user) => user.id !== action.payload.id);
    },
    updateUserName: (state, action) => {
      state.cards.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },

    setCreatedEmployer: (state, action) => {
      state.isCreated = action.payload;

    }
  },
});
export const { addUser, deleteUser, updateUserName, setIsLoggedIn, setCreatedEmployer } = userSlice.actions;
export default userSlice.reducer;
