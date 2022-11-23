import { AccountEntity } from "../entity/Account.entity";
import { desCryptedPasswotd, encryptedPassword } from "../utils/Crypted.utils";
import { IAuthLogin, INewPassword } from "../utils/type";
import jsw from "jsonwebtoken";
import dotenv from "dotenv";
import sendEmailNewPassword from "../utils/InfoEmail.utils";
import { HttpError } from "routing-controllers";
import { loginBody } from "../dto's/Auth.dto";
import { newRandomPassword } from "../utils/RandomPassword.utils";

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
        // role:isUser[0].role,
        token,
      };
    }
  }
};

export const authForgotPassword = async (
  user: INewPassword
) => {
  const isUser = await AccountEntity.findBy({ email: user.email });
  if (isUser[0] === undefined) {
    throw new Error("El usuario no se encuentra registrado");
  } else {
    if (!user.code) {
      const password = newRandomPassword();
      await AccountEntity.update({ email: user.email }, { password });
      sendEmailNewPassword(user.email, password);
      return { msg: "Contraseña cambiada con exitos" };
    } else {
      const isUser = await AccountEntity.findBy({ email: user.email });
      if (isUser[0].password === user.code) {
        const isPassword = encryptedPassword(user.password);
        await AccountEntity.update(
          { email: user.email },
          { password: isPassword }
        );
        return { msg: "Contraseña cambiada con exitos" };
      } else {
        throw new Error("Error, el codigo o el email no es el correcto");
      }
    }
  }
};


