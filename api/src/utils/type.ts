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

export interface IRegister {
  imageData: Buffer
  auto: number;
  remis: number;
  moto: number;
  parking: number;
  housing: number;
  breakfast: number;
  lunch: number;
  dinner: number;
  tip: number;
  bookstore: number;
  seamstress: number;
  encomienda: number;
  correo: number;
  supermarket: number;
  cleaning: number;
  other: number;
  previousBalance: number;
  advancePayment: number;
  reintegrationServicom: number;
  reintegrationUser: number;
  totalSpent: number;
  email: string;
}
