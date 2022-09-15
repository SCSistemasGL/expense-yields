import { UserRole } from "../entity/User.entity";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  password: string;
}

export interface IUserCreate {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string | undefined;
}

export interface IUserUpdate {
  email: string;
  firstName: string | undefined;
  lastName: string | undefined;
}

export type IAuthLogin = Omit<
  IUser,
  "id" | "firstName" | "lastName" | "role" | "isActive"
>;
