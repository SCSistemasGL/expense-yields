import { toCreateUser, toUpdateUser } from "../dto's/User.dto";
import { User } from "../entity/User.entity";
import { IUser, IUserUpdate } from "./type";
import { encryptedPassword } from "./Crypted.utils";

/**
 * 
 * @returns CRUD the USER
 */

export const findUser = async (
  idUser: number | undefined
): Promise<IUser | string | object> => {
  if (idUser) {
    const isUser = await User.findBy({ id: idUser });
    if (!isUser[0]) {
      throw new Error("No existe usuario con ese id!");
    } else {
      return isUser;
    }
  } else {
    const users = await User.find({});
    if (!users[0]) {
        throw new Error("No hay datos cargados!");
    } else {
      const usersActive = users.filter((e) => e.isActive !== false)
      return usersActive;
    }
  }
};

export const registerUser = async (user: IUser): Promise<object | string> => {
  toCreateUser(user)
  const isUser = await User.findOneBy({ email: user.email });
  if (isUser) {
    throw new Error("Error, existe usuario registrado con ese email");
  } else {
    const { email, firstName, lastName, role, password } = user;
    const newCryptPassword = encryptedPassword(password)
    const newUser = new User();
    newUser.email = email;
    newUser.firstName = firstName.toLowerCase();
    newUser.lastName = lastName.toLowerCase();
    newUser.role = role;
    newUser.password = newCryptPassword;
    newUser.save();
    return { msg: "Usuario creado con exitos!" };
  }
};

export const updateUserEmail = async (
  user: IUserUpdate
): Promise<object | string> => {
  toUpdateUser(user)
  const isUser = await User.findBy({ email: user.email });
  if (!isUser) {
    throw new Error("No existe usuario con ese email");
  } else {
    await User.update({ email: user.email }, user);
    return { msg: "Usuario actualizado con exitos!" };
  }
};

export const notActiveUser = async (
  idUser: number | undefined
): Promise<string | object> => {
  if (!idUser) {
    throw new Error("Debe proporcionar un id para poder eliminar un usuario");
  } else {
    const isUser = await User.findBy({ id: idUser });
    if (!isUser[0]) {
      throw new Error("No existe usuario con ese id!");
    } else {
      await User.update({ id: idUser }, { isActive: false });
      return { msg: "Usuario eliminado con exitos!" };
    }
  }
};
