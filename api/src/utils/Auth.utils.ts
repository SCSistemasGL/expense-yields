import { User } from "../entity/User.entity";
import { desCryptedPasswotd } from "./Crypted.utils";
import { IAuthLogin } from "./type";
import jsw from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const { JWT_SECRET, JWT_EXPIRE_TIME, JWT_COOKIE_EXPIRE } = process.env;
/**
 *
 * @param user
 * @returns This function compares the user and returns an object with the role and the email with its token.
 */

export const authLogin = async (user: IAuthLogin): Promise<object | string> => {
  const isUser = await User.findBy({ email: user.email });
  if (isUser[0] === null) {
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
