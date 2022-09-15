/**
 * DTO's that in update the chat
 */

import { UserRole } from "../entity/User.entity";
import { parseString } from "../utils/Methods.utils";
import { IUserCreate, IUserUpdate } from "../utils/type";

const parseParameter = (object: any): object => {
  const parameter = ["lastName", "firstName", "email", "password", "role"];

  for (const value in object) {
    if (!parameter.includes(value)) {
      throw new Error(
        "This props enabled are: lastName, firstName, email, role"
      );
    }
  }
  return object;
};
const parseRol = (role: any): string => {
  if (
    UserRole.ADMIN !== role &&
    UserRole.AUDITOR !== role &&
    UserRole.USER !== role &&
    UserRole.TREASURER != role
  ) {
    throw new Error("Los roles permitidos son: admin | auditor | tesorero | user");
  } else {
    return role;
  }
};

export const toCreateUser = (object: any): IUserCreate => {
  if (object.email === undefined || object.password === undefined) {
    throw new Error("Debe proporcionar un email o una contraseña");
  }
  parseParameter(object);
  const createUser: IUserCreate = {
    firstName: parseString(object.firstName, "firstName"),
    lastName: parseString(object.lastName, "lastName"),
    email: parseString(object.email, "email"),
    password: parseString(object.password, "password"),
    role: parseRol(object.role),
  };
  return createUser;
};

export const toUpdateUser = (object: any): IUserUpdate => {
  parseParameter(object);
  const updateUser: IUserUpdate = {
    email: parseString(object.email, "email"),
    firstName: object.firsName !== undefined? parseString(object.firstName, "firstName"): undefined,
    lastName: object.lastName !== undefined? parseString(object.lastName, "lastName"): undefined,
  }
  return updateUser
};
