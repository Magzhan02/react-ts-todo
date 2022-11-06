export interface TodoState {
  todo: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  GET_TODO = 'GET_TODO',
  GET_TODO_ERROR = 'GET_TODO_ERROR',
  GET_TODO_SUCCESS = 'GET_TODO_SUCCESS',
  SET_TODO_PAGES = 'SET_TODO_PAGES',
}

export interface GetTodoAction {
  type: TodoActionTypes.GET_TODO;
}
export interface GetTodoErrorAction {
  type: TodoActionTypes.GET_TODO_ERROR;
  payload: string;
}
export interface GetTodoSuccessAction {
  type: TodoActionTypes.GET_TODO_SUCCESS;
  payload: any[];
}
export interface SetTodoPagesAction {
  type: TodoActionTypes.SET_TODO_PAGES;
  payload: number;
}

export type ActionType =
  | GetTodoAction
  | GetTodoErrorAction
  | GetTodoSuccessAction
  | SetTodoPagesAction;
