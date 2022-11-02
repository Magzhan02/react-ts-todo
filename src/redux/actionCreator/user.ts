import axios from 'axios';

import { UserActionTypes, ActionType } from './../../types/user';
import { Dispatch } from 'redux';

export const getUsers = (): any => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({ type: UserActionTypes.GET_USERS });
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({ type: UserActionTypes.GET_USERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UserActionTypes.GET_USERS_ERROR,
        payload: 'Ошибка при загрузке пользователей',
      });
    }
  };
};
