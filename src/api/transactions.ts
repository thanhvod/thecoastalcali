import { get, post } from '../config/restful-method';

interface RechargeTransaction {
  type: string;
  from: any;
  to: any;
  value: string;
  note: string;
  image: any;
  cashOutInfo: any;
  articles: any;
  transactionIds: any;
}
/* ADMIN */
export const getTransactionByAdmin = () =>
  get({
    path: `/transactions`,
  });

export const creactRechargeTransaction = (data: RechargeTransaction) =>
  post({
    path: `/transactions/create`,
    data,
  });

export const getTransactionDetailByAdmin = ({ _id }) =>
  get({
    path: `/transactions/${_id}`,
  });

export const approveTransactionByAdmin = ({ _id }) =>
  post({
    path: `/transactions/${_id}/approve`,
    data: {},
  });

export const getTransactionInOrderByAdmin = ({ _id }) =>
  get({
    path: `/orders/${_id}/transaction`,
  });
export const getWithdrawRequetsListByAdmin = () =>
  get({
    path: `/transactions/withdraw-request`,
  });
export const getWithdrawRequestDetailByAdmin = ({ _id }) =>
  get({
    path: `/transactions/withdraw-request/${_id}`,
  });
export const appoveWithdrawRequestByAdmin = ({ _id, transactionId }) =>
  post({
    path: `/transactions/withdraw-request/${_id}/approve`,
    data: { transactionId },
  });
export const paidConfirmTransacitonByAdmin = ({ _id }) =>
  post({
    path: `/transactions/${_id}/paid-confirm`,
    data: {},
  });
export const getPayTransacitonOfWriterByAdmin = ({ _id }) =>
  get({
    path: `/transactions/pay/${_id}`,
  });
export const getWaitingPayTransactionByAdmin = () =>
  get({
    path: `/transactions/pay`,
  });

/* WRITER */
export const getTransactionByWriter = () =>
  get({
    path: `/writer/transactions`,
  });
export const requestWithdrawByWriter = () =>
  post({
    path: `/writer/withdraw-request`,
    data: {},
  });
