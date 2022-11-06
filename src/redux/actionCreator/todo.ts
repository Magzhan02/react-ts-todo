import axios from 'axios';

import { TodoActionTypes, ActionType } from './../../types/todo';
import { Dispatch } from 'redux';

export const getTodo = (page = 1, limit = 10): any => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch({ type: TodoActionTypes.GET_TODO });
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _limit: limit,
          _page: page,
        },
      });
      dispatch({ type: TodoActionTypes.GET_TODO_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: TodoActionTypes.GET_TODO_ERROR,
        payload: 'Ошибка при загрузке списка дел',
      });
    }
  };
};

export const setPageTodo = (page: number): ActionType => {
  return { type: TodoActionTypes.SET_TODO_PAGES, payload: page };
};
