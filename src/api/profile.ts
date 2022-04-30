import { get, post } from '../config/restful-method';

//Customer
export const getCustomerProfileApi = () =>
  get({
    path: `/customer/profile`,
  });

export const updateCustomerProfileApi = (user) =>
  post({
    path: `/customer/profile`,
    data: { user },
  });
// Writer

export const getWriterProfileApi = () =>
  get({
    path: `/writer/profile`,
  });

export const updateWriterProfileApi = (user) =>
  post({
    path: `/writer/profile`,
    data: { user },
  });
