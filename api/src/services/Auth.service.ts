import dotenv from "dotenv";
import jsw from "jsonwebtoken";
import { HttpError } from "routing-controllers";

import { forgotPasswordBody, loginBody } from "../dto's/Auth.dto";
import { newRandomPassword } from "../utils/RandomPassword.utils";
import sendEmailNewPassword from "../utils/InfoEmail.utils";
import { desCryptedPasswotd } from "../utils/Crypted.utils";
import { AccountEntity } from "../entity/Account.entity";

dotenv.config();
const { JWT_EXPIRE_TIME } = process.env;
/**
 *
 * @param user
 * @returns This function compares the user and returns an object with the role and the email with its token.
 */

export const authLogin = async (user: loginBody) => {
  const isUser = await AccountEntity.findBy({ email: user.email });
  if (isUser[0] === undefined) {
    throw new HttpError(404, "El usuario no se encuentra registrado");
  } else {
    if (!isUser[0].isActive) {
      throw new HttpError(404, "La cuenta no esta habilitada!")
    }
    const isPassword = await desCryptedPasswotd(
      user.password,
      isUser[0].password
    );
    if (!isPassword) {
      throw new HttpError(401, "La contraseña o el mail es incorrecto!");
    } else {

      const token = jsw.sign({ user: isUser[0] }, "secretKey", {
        expiresIn: JWT_EXPIRE_TIME,
      });
      return {
        msg: "El usuario esta habilitado",
        email: isUser[0].email,
        role:isUser[0].role,
        token,
      };
    }
  }
}



export const authForgotPassword = async (
  account: forgotPasswordBody
) => {
  const isUser = await AccountEntity.findBy({ email: account.email });
  if (isUser[0] === undefined) {
    throw new HttpError(401, "El usuario no se encuentra registrado");
  } else {
    const password = newRandomPassword();
    await AccountEntity.update({ email: account.email }, { password });
    sendEmailNewPassword(account.email, password);
    return { msg: "Contraseña cambiada con exitos" };
  }
};


