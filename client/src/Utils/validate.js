const validateNewPassword = ({ password }) => {
  if (!password) return { error: "Error, You must provider a password" };
  if (password.length < 6)
    return {
      error: "Error, The password must be at least 6 characters",
    };
  return {};
};

const validateLogin = ({ email, password }) => {
  if (!email) return { email: "Error, Debe poner un email" };
  if (email) {
    const validate = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!validate) {
      return { email: "Error, Esto no es un email" };
    }
  }

  if (!password) return { password: "Error, Debe proporcionar una contraseña" };
  if (password.length < 6)
    return {
      password: "Error, La contraseña debe ser mayor a 6 carácteres",
    };
  return {};
};

const validateSignup = ({
  firstName,
  email,
  password,
  lastName,
  role
}) => {
  if (!firstName) return { firstName: "Error, Debe proporcionar un Nombre" };
  if (firstName.length < 4)
    return {
      firstName: "Error, El Nombre debe ser mayor a 4 caracteres",
    };
  if (!lastName) {
    return { lastName: "Error, Debe proporcionar un Apellido" };
  }
  if (lastName.length < 4)
    return {
      lastName: "El Apellido debe ser mayor a 4 caracteres ",
    };
   if (!email) return { email: "Error, Debe proporcionar un email" };
  if (email) {
    const validate = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!validate) {
      return { email: "Error, esto no es un email" };
    }
  }

  if (!password) return { password: "Debe proporcionar una contraseña" };
  if (password.length < 6)
    return {
      password: "La contraseña debe tener mas de 6 caracteres",
    };
  if (!role) return { role: "Debe seleccionar un rol" };

  return {};
};


module.exports = {
  validateNewPassword,
  validateLogin,
  validateSignup,
};
