import { CarBrand, carBrandImageMap } from "./types";

export function getImageForBrand(brand: CarBrand) {
  return carBrandImageMap[brand];
}