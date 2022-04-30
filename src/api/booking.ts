import { get, post, del } from '../config/restful-method';

/* ADMIN */
interface BookingInfo {
  orderId: string;
  writerName: string;
  numberOfArticle: number;
  note: string;
}
export const createBookingByAdmin = (data: BookingInfo) =>
  post({
    path: `/bookings/create`,
    data,
  });
