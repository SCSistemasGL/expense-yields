import { RegisterEntity } from "../entity/Register.entity";
import { AccountEntity } from "../entity/Account.entity";
import { IRegister } from "../utils/type";

export const createNewRegisterUser = async (
  register: IRegister
): Promise<object> => {
  const isUser = await AccountEntity.find({ where: { email: register.email } });
  if (!isUser[0]) {
    throw new Error("No existe usuario con ese email");
  } else {
    const newRegister = new RegisterEntity();
    newRegister.auto = register.auto;
    newRegister.advancePayment = register.advancePayment;
    newRegister.bookstore = register.bookstore;
    newRegister.breakfast = register.breakfast;
    newRegister.cleaning = register.cleaning;
    newRegister.correo = register.correo;
    newRegister.dinner = register.dinner;
    newRegister.encomienda = register.encomienda;
    newRegister.housing = register.housing;
    newRegister.lunch = register.lunch;
    newRegister.moto = register.moto;
    newRegister.other = register.other;
    newRegister.parking = register.parking;
    newRegister.previousBalance = register.previousBalance;
    newRegister.reintegrationServicom = register.reintegrationServicom;
    newRegister.reintegrationUser = register.reintegrationUser;
    newRegister.remis = register.remis;
    newRegister.seamstress = register.seamstress;
    newRegister.supermarket = register.supermarket;
    newRegister.tip = register.tip;
    newRegister.totalSpent = register.totalSpent;
    newRegister.user = isUser[0];
    // newRegister.imageData = register.image;
    await newRegister.save();
    return { msg: "Registo creado con exitos!" };
  }
};

export const searchRegister = async (
  email: string | undefined
): Promise<object> => {
  console.log(email);
  if (email === undefined) {
    const isRegister = await RegisterEntity.find({ relations: { user: true } });
    return isRegister;
  } else {
    const isUser = await AccountEntity.find({
      where: { email },
      relations: { register: true },
    });

    if (!isUser[0]) {
      throw new Error("El usuario no existe, debe registarse!");
    } else {
      if (!isUser[0].register[0]) {
        throw new Error(
          "El usuario no tiene registros cargados por el momento!"
        );
      } else {
        const imgRegister = isUser[0].register;
        // const newImgRegister = imgRegister.map((e) => {
        //   if (e.imageData) {
        //     e.imageData.toString("base64");
        //   }
        // });

        return { register: isUser[0].register, };
      }
    }
  }
};
