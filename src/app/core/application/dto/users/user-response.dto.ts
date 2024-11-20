export interface IResponseUser {
  statusCode: number;
  message: string;
  data: IUser[];
}

export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  role: Role;
  photo: null | string;
}

export enum Role {
  Organizer = "organizer",
}

export interface Data {
  email: string;
  name: string;
  role: string;
  photo: null;
  id: number;
}
