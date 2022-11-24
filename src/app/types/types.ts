export interface Course {
  id: string;
  title: string;
  creationDate: string;
  duration: number;
  description?: string;
  topRated?: boolean;
}

export interface User {
  id: string;
  firstName: string;
  lastName?: string;
}

export type ListOrder = 'ASC' | 'DESC';
