import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://connections-api.herokuapp.com/"

const token = {
  set(token) {
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers['Authorization']= '';
  },
};


const registerUser = createAsyncThunk('auth/register', async credentials => {
  try {
    const {data} = await axios.post('/users/signup', credentials);
    token.set(data.token)
    return data;
  } catch (error) {
    alert("error")
  }
});

const logInUser = createAsyncThunk('auth/login', async (credentials, rejectWithValue) => {
  try {
    const {data} = await axios.post('/users/login', credentials);
    token.set(data.token)
    if (data && data) {
      return data;
    }

  } catch (error) {
    rejectWithValue(error)
  }
});
const logOutUser = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset()
  } catch (error) {
    alert("error")
  }
});
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      alert("error")
    }
  },
);
const operations = {
  registerUser,
  logInUser,
  logOutUser,
  fetchCurrentUser
};
export default operations;
