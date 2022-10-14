import axios from 'axios';
import { Dispatch } from 'redux';

import { UsersActionType, UsersActions } from '..';

const baseUsersURL = 'http://localhost:3004/users';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersActions>) => {
    const { data } = await axios.get(baseUsersURL);

    // console.log(data, 'response');

    dispatch({
      type: UsersActionType.FETCH_USERS,
      payload: data,
    });
  };
};
