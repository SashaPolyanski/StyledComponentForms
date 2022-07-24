import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  loadingApp: false,
  isLoggedIn: false,
  error: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoadingApp(state, action: PayloadAction<{ value: boolean }>) {
      state.loadingApp = action.payload.value;
    },
    setIsLoggedIn(state, action: PayloadAction<{ value: boolean }>) {
      state.isLoggedIn = action.payload.value;
    },
    setError(state, action: PayloadAction<{ value: boolean }>) {
      state.error = action.payload.value;
    },
  },
});

export const { setLoadingApp, setIsLoggedIn, setError } = authSlice.actions;
export const authReducer = authSlice.reducer;
