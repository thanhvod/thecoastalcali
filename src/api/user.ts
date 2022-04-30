import { get, post } from '../config/restful-method';

export const getUsersApi = () =>
  get({
    path: `/users`,
    data: {},
  });

export const postUsersApi = (
  _id: string,
  data: {
    user: {
      role: number;
      phoneNumber: string;
      avatar?: number;
      name: string;
    };
  }
) =>
  post({
    path: `/users/${_id}`,
    data,
  });

export const updateUserInfoByAdmin = ({ _id, user }) =>
  post({
    path: `/users/${_id}/update`,
    data: { user },
  });

export const getUserInfoByAdmin = ({ _id }) =>
  get({
    path: `/users/${_id}`,
  });

export const getUserByKeywordRoleApi = ({ keyword, role }: UserSearchByKeywordRoleType) =>
  get({
    path: `/users/search/${keyword}?role=${role}`,
    data: {},
  });

export const approveUserByAdmin = ({ _id }) =>
  post({
    path: `/users/${_id}/approve-writer`,
    data: {},
  });
