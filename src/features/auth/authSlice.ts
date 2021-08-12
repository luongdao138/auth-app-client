import { SliceType, User } from './interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SliceType = {
  user: {} as User,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login_fulfilled: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    update: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = {} as User;
      localStorage.removeItem('auth_token');
    },
  },
  extraReducers: {},
});

export const { login_fulfilled, logout, update } = authSlice.actions;
export default authSlice.reducer;
