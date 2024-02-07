import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userLogin = createAsyncThunk(
  'user/loginUser',
  async (userCredentials, {rejectWithValue}) => {
    try {
      const request = await api.post('/api/users/login', userCredentials);
      const response = await request.data;

      return response;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log('Login failed with error:', error.response.data.message);
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);
export const logOut = createAsyncThunk('user/logOut', async () => {
  await AsyncStorage.removeItem('token');
});
export const getUserInfo = createAsyncThunk('user/getUserInfo', async () => {
  try {
    const request = await api.get('/api/users/me');
    const response = await request.data;
    // console.log('User Info : ', response);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.log('Error getting user:', error.response.data.message);
    }
    return error.response.data.message;
  }
});

export const getAllUsers = createAsyncThunk(
  'user/getAllUsers',
  async (_, {rejectWithValue}) => {
    try {
      const request = await api.get('/api/users');
      const response = await request.data;
      // console.log('Users : ', response);
      return response;
    } catch (error) {
      console.error('Error during login:', error);
      return rejectWithValue(error.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    isSignedIn: false,
    isSuccess: false,
    user: null,
    users: [],
    isError: false,
    errorMessage: null,
  },
  reducers: {
    auth_reset: state => {
      state.isLoading = false;
      state.isSignedIn = false;
      state.isSuccess = false;
      state.user = null;
      state.users = [];
      state.isError = false;
      state.errorMessage = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.isError = false;

        state.user = action.payload;
        // console.log('Login State', state);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getAllUsers.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;

        state.user = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = action.payload;
      })
      .addCase(getUserInfo.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log('GetUser Payload', action.payload);
        state.user = action.payload;
        // console.log('State User', state);
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = action.payload;
      });
  },
});

export const {auth_reset} = userSlice.actions;
export default userSlice.reducer;
