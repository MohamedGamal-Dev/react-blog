import { UsersState, UsersActions, UsersActionType } from '../../services';

const initialState: UsersState = { users: [] };

const usersReducer = (
  state: UsersState = initialState,
  action: UsersActions
) => {
  switch (action.type) {
    case UsersActionType.FETCH_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default usersReducer;
