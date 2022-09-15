import bcrypt from "bcrypt";
const SALTROUNDS = 10;

/**
 * 
 * @param password 
 * @returns function that return a password encrypted and compare the password user with password DB
 */

export const encryptedPassword = (password: string): string => {
  password = bcrypt.hashSync(password, SALTROUNDS);
  return password;
};

export const desCryptedPasswotd = async (password: string, enctypted: string): Promise<boolean> => {
  const isPassword = await bcrypt.compare(password, enctypted)
  return isPassword
}