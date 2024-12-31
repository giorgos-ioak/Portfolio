import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLoggedIn: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setState: (state, action) => {
      state.isLoggedIn = action.payload;
    }
    ,
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    }
  } 
});


export const { login, logout, setState } = authSlice.actions; 
export default authSlice.reducer;