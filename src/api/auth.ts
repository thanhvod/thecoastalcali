import { post } from '../config/restful-method';

interface ISignInApi {
  provider: string;
  accessToken: string;
  name: string;
  uid: string;
  email: string;
  emailVerified: string;
  avatar: string;
  phoneNumber: string;
  type: string;
}

export const signInApi = ({
  provider,
  accessToken,
  name,
  uid,
  email,
  emailVerified,
  avatar,
  phoneNumber,
  type,
}: ISignInApi) =>
  post({
    path: `/auth/sign-in`,
    data: {
      provider,
      accessToken,
      name,
      uid,
      email,
      emailVerified,
      avatar,
      phoneNumber,
      type,
    },
  });
