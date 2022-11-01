export interface UsersState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  GET_USERS = 'GET_USERS',
  GET_USERS_ERROR = 'GET_USERS_ERROR',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
}

export interface GetUsersAction {
  type: UserActionTypes.GET_USERS;
}
export interface GetUsersErrorAction {
  type: UserActionTypes.GET_USERS_ERROR;
  payload: string;
}
export interface GetUsersSuccessAction {
  type: UserActionTypes.GET_USERS_SUCCESS;
  payload: any[];
}

export type ActionType = GetUsersAction | GetUsersErrorAction | GetUsersSuccessAction;
