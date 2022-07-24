import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/auth';
import { userLoginReducer } from './slices/user';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userLoginReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
