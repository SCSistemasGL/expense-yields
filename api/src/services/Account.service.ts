import { toCreateUser, toUpdateUser } from "../dto's/User.dto";
import { AccountEntity } from "../entity/Account.entity";
import { IUser, IUserUpdate } from "../utils/type";
import { encryptedPassword } from "../utils/Crypted.utils";
import { accountBody, accountNotPasswordBody, enableAccountBody, updateAccountBody } from "../dto's/Account.dto";
import { HttpError, NotFoundError } from "routing-controllers";
import { newRandomPassword } from "../utils/RandomPassword.utils";
import sendEmailNewPassword from "../utils/InfoEmail.utils";

/**
 * 
 * @returns CRUD the USER
 */

export const findAccount = async ( idAccount: number | undefined) => {
  if (idAccount) {
    const isAccount = await AccountEntity.findOne({ where: { id: idAccount }, relations: { register: true } });
    if (!isAccount) {
      throw new HttpError(404, "No existe usuario con ese id!");
    } else {
      return isAccount;
    }
  } else {
    const accounts = await AccountEntity.find({ relations: { register: true } });
    if (!accounts[0]) {
      throw new Error("No hay datos cargados!");
    } else {
      return accounts;
    }
  }
};

export const registerAccount = async (user: accountBody): Promise<object | string> => {
  const isUser = await AccountEntity.findOneBy({ email: user.email });
  if (isUser) {
    throw new HttpError(401, 'Ya existe una cuenta con este email.')
  } else {
    const { email, firstName, lastName, role, password } = user;
    const newCryptPassword = encryptedPassword(password)
    const newUser = new AccountEntity();
    newUser.email = email;
    newUser.firstName = firstName.toLowerCase();
    newUser.lastName = lastName.toLowerCase();
    newUser.role = role;
    newUser.password = newCryptPassword;
    newUser.save();
    return { msg: "Usuario creado con exitos!" };
  }
};

export const updateAccountEmail = async (
  user: updateAccountBody
): Promise<object | string> => {

  const isUser = await AccountEntity.findOneBy({ email: user.email });
  if (!isUser) {
    throw new HttpError(404, "No existe usuario con ese email");
  } else {
    await AccountEntity.update({ email: user.email }, user);
    return { msg: "Usuario actualizado con exitos!" };
  }
};

export const notActiveAccount = async (
  idUser: number | undefined
): Promise<string | object> => {
  if (!idUser) {
    throw new HttpError(401, "Debe proporcionar un id para poder eliminar un usuario");
  } else {
    const isUser = await AccountEntity.findOneBy({ id: idUser });
    if (!isUser) {
      throw new HttpError(404, "No existe usuario con ese id!");
    } else {
      await AccountEntity.update({ id: idUser }, { isActive: false });
      return { msg: "Usuario eliminado con exitos!" };
    }
  }
};

export const newAccountNotPassword = async (account: accountNotPasswordBody) => {
  const isAccount = await AccountEntity.findOneBy({ email: account.email });
  if (isAccount) {
    throw new HttpError(401, 'Ya existe una cuenta con este email.')
  } else {
    const { email, firstName, lastName, role } = account;
    const passwordRandom = newRandomPassword()
    const newAccount = new AccountEntity();
    newAccount.email = email;
    newAccount.firstName = firstName.toLowerCase();
    newAccount.lastName = lastName.toLowerCase();
    newAccount.role = role;
    newAccount.password = passwordRandom;
    newAccount.isActive = false
    await newAccount.save();
    sendEmailNewPassword(account.email, passwordRandom);

    return { msg: 'Cuenta creada con éxito!' }
  }
}


export const enableAccount = async (account: enableAccountBody) => {
  const isAccount = await AccountEntity.findBy({ email: account.email });
  if (isAccount[0] === undefined) {
    throw new HttpError(401, "El usuario no se encuentra registrado");
  };
  if (isAccount[0].password === account.code) {
    const isPassword = encryptedPassword(account.password);
    await AccountEntity.update(
      { email: account.email },
      {
        password: isPassword,
        isActive: true
      }
    );
    return { msg: "Contraseña cambiada con exitos" };
  } else {
    throw new HttpError(401, "Error, el codigo no coincide");
  };
};