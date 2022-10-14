export interface UsersState {
  users: UserType[];
}

export type UserType = {
  id: string;
  name: string;
};

export interface UserProps {
  user?: UserType;
  userId?: string;
  children?: React.ReactNode;
}
