import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

const storage = {
  user: localStorage.getItem('user'),
  token: localStorage.getItem('token'),
};

const user = storage.user ? JSON.parse(storage.user) : null;
const token = storage.token ? JSON.parse(storage.token) : null;

const slice = createSlice({
  name: 'auth',
  initialState: { user, token },
  reducers: {
    setCredentials: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(user));
    },
    removeCredentials: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
});

export const selectUser = (state: RootState) => state.auth.user;

export const { setCredentials, removeCredentials } = slice.actions;

export default slice.reducer;
