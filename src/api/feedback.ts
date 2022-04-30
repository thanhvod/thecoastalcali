import { post } from '../config/restful-method';

interface FeedbackService {
  question: any;
  note: String;
  userId: String;
  userEmail: String;
}

export const feedbackService = (data: FeedbackService) =>
  post({
    path: `/feedbacks/services`,
    data,
  });
