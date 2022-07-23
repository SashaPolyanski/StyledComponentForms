import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
