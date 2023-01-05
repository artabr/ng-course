export interface Course {
  id: string;
  title: string;
  creationDate: string;
  duration: number;
  description?: string;
  topRated?: boolean;
}

export type CourseResponse = {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors: {
    id: number;
    name: string;
  };
  isTopRated: boolean;
};

export type LoginResponse = {
  token: string;
};

export type UserInfoResponse = {
  id: number;
  token: string;
  name: {
    first: string;
    last: string;
  };
  login: string;
  password: string;
};

export interface User {
  id: string;
  firstName: string;
  lastName?: string;
}

export type ListOrder = 'ASC' | 'DESC';

export type Breadcrumb = {
  label: string;
  url: string;
};
