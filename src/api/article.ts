import { get, post, del } from '../config/restful-method';

interface updateArticleApi {
  _id: string;
  article: any;
}
/* ADMIN */
export const getAllArticleByAdmin = () =>
  get({
    path: `/articles`,
  });

export const getArticleDetailByAdmin = ({ _id }) =>
  get({
    path: `/articles/${_id}`,
  });

export const updateArticleInfoByAdmin = (article: updateArticleApi) =>
  post({
    path: `/articles/${article._id}`,
    data: article,
  });

export const getListArticleByAdmin = ({ _id }) =>
  get({
    path: `/orders/${_id}/articles`,
  });

export const createArticle = ({ orderId }) =>
  post({
    path: `/articles/create`,
    data: { orderId },
  });

export const deleteArticle = ({ _id }) =>
  del({
    path: `/articles/${_id}`,
    data: {},
  });

export const assignWriterForArticleByAdmin = ({ _id, writerId }) =>
  post({
    path: `/articles/${_id}/assign-writer`,
    data: { writerId },
  });

export const updateStatusForArticleByAdmin = ({ _id, article }) =>
  post({
    path: `/articles/${_id}/update-status`,
    data: { article },
  });

export const updateContentForArticleByAdmin = ({ articleId, content }) =>
  post({
    path: `/articles/contents/create`,
    data: { articleId, content },
  });

/* CUSTOMER */
export const getListArticleByCustomer = ({ _id }) =>
  get({
    path: `/customer/orders/${_id}/articles`,
  });

export const getArticleDetailByCustomer = ({ _id }) =>
  get({
    path: `/customer/articles/${_id}`,
  });
export const getListAllArticleByCustomer = () =>
  get({
    path: `/customer/articles`,
  });

/* WRITER */
export const getListArticleByWriter = ({ _id }) =>
  get({
    path: `/writer/orders/${_id}/articles`,
  });

export const getArticleDetailByWriter = ({ _id }) =>
  get({
    path: `/writer/articles/${_id}`,
  });

export const getListAllArticleByWriter = () =>
  get({
    path: `/writer/articles`,
  });

export const requestApproveArticleByWriter = ({ articleId }) =>
  post({
    path: `/writer/articles/${articleId}/request-approve`,
    data: {},
  });

/* GUEST */
export const getPublicArticleDetailByGuest = ({ _id }) =>
  get({
    path: `/articles/${_id}/public-content`,
  });
