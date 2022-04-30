import { get } from '../config/restful-method';

export const getUserReportApi = ({ startDate, endDate }) =>
  get({
    path: `/report/user?startDate=${startDate}&endDate=${endDate}`,
  });
export const getOrderReportApi = ({ startDate, endDate }) =>
  get({
    path: `/report/order?startDate=${startDate}&endDate=${endDate}`,
  });

export const getArticleReportApi = ({ startDate, endDate }) =>
  get({
    path: `/report/article?startDate=${startDate}&endDate=${endDate}`,
  });

export const getTransactionReportApi = ({ startDate, endDate }) =>
  get({
    path: `/report/transaction?startDate=${startDate}&endDate=${endDate}`,
  });
