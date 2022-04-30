import { get, post } from '../config/restful-method';

export const getFullCVApi = () =>
  get({
    path: `/cvs`,
    data: {},
  });

export const createNewCVApi = () =>
  post({
    path: `/cvs/create`,
    data: {},
  });

export const getCVByIdApi = (_id: string) =>
  get({
    path: `/cvs/${_id}`,
  });

export const postCVByIdApi = (_id: string, data: Profile) =>
  post({
    path: `/cvs/${_id}`,
    data: {
      cv: data,
    },
  });

export const getCVByCustomer = () =>
  get({
    path: `/customer/cvs`,
    data: {},
  });

export const assignWriterForCV = ({ _id, writerId }) =>
  post({
    path: `/cvs/${_id}/assign-writer`,
    data: { writerId },
  });

export const getCVByWriter = () =>
  get({
    path: `/writer/cvs`,
    data: {},
  });
export const updateCVByWriter = (data: Profile) =>
  post({
    path: `/writer/cvs`,
    data: {
      cv: data,
    },
  });

// Guest User
export const getPublicWriterForGuestUser = () =>
  get({
    path: `/writer`,
    data: {},
  });

export const getPublicWriterDetailForGuestUser = ({ _id }) =>
  get({
    path: `/writer/public-detail/${_id}`,
    data: {},
  });
