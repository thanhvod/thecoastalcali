import { get, post, del } from '../config/restful-method';

/* ADMIN */
export const getContentInAricleByAdmin = ({ articleId }) =>
  get({
    path: `/articles/${articleId}/content`,
  });

/* CUSTOMER */
export const getApproveContentInArticleByCustomer = ({ articleId }) =>
  get({
    path: `/customer/articles/${articleId}/content`,
  });

/* WRITERS */
export const createContentByWriter = ({ articleId, content }) =>
  post({
    path: `/writer/contents/create`,
    data: { articleId, content },
  });

export const getContentInAricleByWriter = ({ articleId }) =>
  get({
    path: `/writer/articles/${articleId}/contents`,
  });
