import { ActionType, UserActionTypes, UsersState } from '../../types/user';

const initState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initState, action: ActionType): UsersState => {
  switch (action.type) {
    case UserActionTypes.GET_USERS:
      return {
        loading: true,
        error: null,
        users: [],
      };
    case UserActionTypes.GET_USERS_ERROR:
      return {
        loading: false,
        error: action.payload,
        users: [],
      };
    case UserActionTypes.GET_USERS_SUCCESS:
      return {
        loading: false,
        error: null,
        users: action.payload,
      };

    default:
      return state;
  }
};
