import authOperations from "./AuthOperations"
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: {name: null, email: null},
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.registerUser.fulfilled, (state, action) => {
        state.user = action.payload?.user;
        state.token = action.payload?.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logInUser.fulfilled, (state, action) => {
        state.user = action?.payload?.user;
        state.token = action?.payload?.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logInUser.rejected, () => {
        alert("Incorrect Email or Password")
      })
      .addCase(authOperations.logOutUser.fulfilled, (state, _) => {
        state.user = {name: null, email: null};
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.pending, (state) => {
        state.isFetchingCurrentUser = true
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false
      })
      .addCase(authOperations.fetchCurrentUser.rejected, (state) => {
        state.isFetchingCurrentUser = false
      })

  },
})
export default authSlice.reducer;
