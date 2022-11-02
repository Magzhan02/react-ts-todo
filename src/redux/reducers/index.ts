import { userReducer } from './userReducer';
import { combineReducers } from 'redux';

export const root = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof root>;
