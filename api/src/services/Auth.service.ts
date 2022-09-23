import { UserEntity } from "../entity/User.entity";
import { desCryptedPasswotd, encryptedPassword } from "../utils/Crypted.utils";
import { IAuthLogin, INewPassword } from "../utils/type";
import jsw from "jsonwebtoken";
import dotenv from "dotenv";
import sendEmailNewPassword from "../utils/InfoEmail.utils";

dotenv.config();
const { JWT_EXPIRE_TIME } = process.env;
/**
 *
 * @param user
 * @returns This function compares the user and returns an object with the role and the email with its token.
 */

export const authLogin = async (user: IAuthLogin): Promise<object | string> => {
  const isUser = await UserEntity.findBy({ email: user.email });
  if (isUser[0] === undefined) {
    throw new Error("El usuario no se encuentra registrado");
  } else {
    const isPassword = await desCryptedPasswotd(
      user.password,
      isUser[0].password
    );
    if (!isPassword) {
      throw new Error("La contraseña o el mail es incorrecto!");
    } else {
      const token = jsw.sign({ user: isUser[0] }, "secretKey", {
        expiresIn: JWT_EXPIRE_TIME,
      });
      return {
        msg: "El usuario esta habilitado",
        email: isUser[0].email,
        token,
      };
    }
  }
};

export const authForgotPassword = async (
  user: INewPassword
): Promise<string | object> => {
  const isUser = await UserEntity.findBy({ email: user.email });
  if (isUser[0] === undefined) {
    throw new Error("El usuario no se encuentra registrado");
  } else {
    if (!user.code) {
      const password = newRandomPass();
      await UserEntity.update({ email: user.email }, { password });
      sendEmailNewPassword(user.email, password);
      return { msg: "Contraseña cambiada con exitos" };
    } else {
      const isUser = await UserEntity.findBy({ email: user.email });
      if (isUser[0].password === user.code) {
        const isPassword = encryptedPassword(user.password);
        await UserEntity.update(
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

const newRandomPass = () => {
  var password = "";
  var str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random() * str.length + 1);
    password += str.charAt(char);
  }

  return password;
};
