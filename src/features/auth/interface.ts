export interface AuthFormState {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  email: string;
  photo?: string;
  display_name?: string;
  bio?: string;
  phone?: string;
  social_id?: string;
}

export interface SliceType {
  user: User;
}
