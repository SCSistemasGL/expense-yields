const optionSelectRol = () => {
  const rol = [
    { name: "ADMIN", value: "admin" },
    { name: "AUDITOR", value: "auditor" },
    { name: "USUARIO", value: "user" },
    { name: "TESORERO", value: "treasurer" },
  ];
  let options = [];

  for (var i = 0; i < rol.length; i++) {
    options.push({
      value: rol[i].value,
      label: rol[i].name,
    });
  }

  return options;
};

export default optionSelectRol;
