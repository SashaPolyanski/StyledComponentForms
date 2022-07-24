import { RootState } from '../store';

export const SelectIsLogin = (state: RootState) => state.auth.isLoggedIn;
export const SelectIsLoading = (state: RootState) => state.auth.loadingApp;
export const SelectUserLogin = (state: RootState) => state.user.userLogin;
export const SelectError = (state: RootState) => state.auth.error;
