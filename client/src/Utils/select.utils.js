import { nameSpace } from "./name.utils";

export const selectOptionProvince = (provinceNotPrice) => {
  let options = [];
  if (provinceNotPrice[0]) {
    for (var i = 0; i < provinceNotPrice.length; i++) {
      options.push({
        value: provinceNotPrice[i].id,
        label:nameSpace(provinceNotPrice[i].nameProvince).toUpperCase(),
      });
    }
  }
  return options;
};