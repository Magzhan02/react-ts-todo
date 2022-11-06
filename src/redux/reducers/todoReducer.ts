import { TodoState, ActionType, TodoActionTypes } from '../../types/todo';

const initState: TodoState = {
  todo: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
};

export const todoReducer = (state = initState, action: ActionType): TodoState => {
  switch (action.type) {
    case TodoActionTypes.GET_TODO:
      return {
        ...state,
        loading: true,
      };

    case TodoActionTypes.GET_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TodoActionTypes.GET_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: action.payload,
      };

    case TodoActionTypes.SET_TODO_PAGES:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};
