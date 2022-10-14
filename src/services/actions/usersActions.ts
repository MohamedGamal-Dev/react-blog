import { UserType, UsersActionType } from '..';

export interface FetchUsersAction {
  type: UsersActionType.FETCH_USERS;
  payload: UserType[];
}

export type UsersActions = FetchUsersAction;
