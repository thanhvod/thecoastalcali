//////////////////////
// COMMON TYPE
//////////////////////
type Unix = number;
interface PersonalWriterField {
  name?: string;
  birthday?: number;
  email: string;
  phoneNumber: string;
  address?: string;
}
interface PersonalCustomerField {
  name?: string;
  avatar?: string;
  email: string;
  phoneNumber: string;
}
interface PersonalInformation
  extends PersonalWriterField,
    PersonalCustomerField {}

//////////////////////
// CV
//////////////////////
interface SocialInformation {
  name: string;
  url: string;
}
interface ExtraInfo {
  name: string;
  value: string;
}
interface JobInformation {
  services: number[];
  categories: number[];
  experience: number;
  level: Level;
  note: string;
  adminNote: string;
}
interface FileInformation {
  path: string; // path: "1-cv.pdf"
  name: string;
}

type TargetFileUploadType =
  | 'general'
  | 'cv'
  | 'user'
  | 'message'
  | 'transaction'
  | 'article';
type ProfileFiles = 'avatar' | 'document';
interface FileUploadType {
  file: any; // "1628074951305.png";
  target: TargetFileUploadType; // "cv";
}
interface ProfileFileType {
  avatar?: string;
  document?: FileInformation[];
}
interface TransactionFileType {
  image?: FileInformation[];
}

interface FileUploadResponseType extends FileUploadType {
  success: boolean; // true;
}
interface ProfileFileUploadResponseType {
  type: ProfileFiles;
  file: any;
}
interface Level {
  id: number;
  type: number;
  title: string;
}
interface Service {
  id: number;
  type: string;
  title: string;
}
interface Category {
  id: number;
  type: string;
  title: string;
}
interface Experience {
  id: number;
  title: string;
}
interface Profile {
  name: string;
  avatar: string;
  birthday: string;
  document: FileInformation[];
  email: string;
  phoneNumber: string;
  address: string;
  social: SocialInformation[];
  services: Service[];
  categories: Category[];
  level: number;
  experience: number;
  note: string;
  adminNote: string;
  _id: string;
  uid: number;
  status: 1 | 0;
}

//////////////////////
// CUSTOMER
//////////////////////
interface ProfilePostField {
  phoneNumber: Unix | null;
  avatar: string;
  name: string;
}
interface User extends ProfilePostField {
  role: number;
  email: string;
  uid: string;
}
//////////////////////
// ROLE TYPE
//////////////////////
type RoleName = 'ADMIN' | 'CUSTOMER' | 'WRITER';
interface RoleProps {}
interface AdminProps extends RoleProps {}
interface CustomerProps extends RoleProps, PersonalCustomerField {}
interface WriterProps extends RoleProps {}
interface Role {
  ADMIN: AdminProps;
  CUSTOMER: CustomerProps;
  WRITER: WriterProps;
}
//////////////////////
// SEARCH USER TYPE
//////////////////////
interface UserSearchByKeywordRoleType {
  keyword: string;
  role: number;
}
interface UserSearchByKeywordRolePayloadType {
  emailVerified: string; // true;
  role: number; // 2;
  name: string; // 'Võ Đức Thành';
  phoneNumber: string; // '0909012165';
  email: string; // 'email@voducthanh.com';
  provider: string; // 'google.com';
  uid: string; // 'DbYs56RcsoS9fqupFcZGbTmObQ92';
  avatar: string; // 'https://lh3.googleusercontent.com/a-/AOh14GgDfLrCCuqN_Ayk4Xoi86wlrg_56J97P2KYJz_ypg=s96-c';
  _id: string; // 'Ej5mMoglXHJGFdxlFUbu';
}
