import { Consts } from "./consts";

export const checkValidCountry = (country: string): boolean => {
  country = country.toUpperCase();

  if (!Consts.validCountries.includes(country)) return false;

  return true;
};
