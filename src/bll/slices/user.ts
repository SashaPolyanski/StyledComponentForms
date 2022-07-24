import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  userLogin: '',
};
const authSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    setUserLogin(state, action: PayloadAction<{ value: string }>) {
      state.userLogin = action.payload.value;
    },
  },
});

export const { setUserLogin } = authSlice.actions;
export const userLoginReducer = authSlice.reducer;
