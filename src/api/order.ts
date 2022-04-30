import { get, post } from '../config/restful-method';

interface ISignInApi {
  formData: any;
  extraInfoData: any;
  orderPrice: any;
}
interface assignCustomerApi {
  _id: string;
  customerId: string;
}

/* Admin */
export const createNewOrderByAdmin = (order: ISignInApi) =>
  post({
    path: `/orders`,
    data: order,
  });

export const assignCustomerByAdmin = (ID: assignCustomerApi) =>
  post({
    path: `/orders/${ID._id}/assign-customer`,
    data: ID,
  });

export const getOrderByAdmin = () =>
  get({
    path: `/orders`,
  });
export const getOrderWithStatusByAdmin = ({ status }) =>
  get({
    path: `/orders?status=${status}`,
  });

export const getCustomerInfoInOrderByAdmin = ({ _id }) =>
  get({
    path: `/orders/${_id}/customer`,
  });

export const getOrderDetailByAdmin = ({ _id }) =>
  get({
    path: `/orders/${_id}`,
  });

export const assignWriterForOrderByAdmin = ({ _id, writerId }) =>
  post({
    path: `/orders/${_id}/assign-writer`,
    data: { writerId },
  });
export const updateOrderStatusByAdmin = ({ _id, status }) =>
  post({
    path: `/orders/${_id}/update-status`,
    data: { status },
  });
export const updatePaymentStatusByAdmin = ({ _id, status }) =>
  post({
    path: `/orders/${_id}/update-payment-status`,
    data: { status },
  });

export const removeWriterInOrderByAdmin = ({ _id, writerId }) =>
  post({
    path: `/orders/${_id}/remove-writer`,
    data: { writerId },
  });
export const updateCustomIDInOrderByAdmin = ({ _id, customId }) =>
  post({
    path: `/orders/${_id}/update-custom-id`,
    data: { customId },
  });

/* Customer */
export const createNewOrder = (order: ISignInApi) =>
  post({
    path: `/customer/order`,
    data: order,
  });

export const getOrderByCustomer = () =>
  get({
    path: `/customer/orders`,
  });

/* Guest User */
export const getPublicOrderForGuestUser = ({ _id }) =>
  get({
    path: `/orders/${_id}/public`,
  });
export const getOrderDetailByCustomer = ({ _id }) =>
  get({
    path: `/customer/orders/${_id}`,
  });

/* Writer */
export const getOrderByWriter = () =>
  get({
    path: `/writer/orders`,
  });
export const getOrderDetailByWriter = ({ _id }) =>
  get({
    path: `/writer/orders/${_id}`,
  });
