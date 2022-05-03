export interface ListUsersInterface {
  id: number;
  name: string;
  username: string;
  firstName: string;
  lastName: string;
}
export interface ListUsersForm {
  listUsers: ListUsersInterface[];
}