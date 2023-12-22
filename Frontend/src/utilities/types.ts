import BMWimage from "../assets/images/BMW.jpg";
import MERCEDESimage from "../assets/images/Mercedes.jpg";
import TESLAimage from "../assets/images/Tesla.jpg";
import AUDIimage from "../assets/images/Audi.jpg";
import VOLKSWAGENimage from "../assets/images/Volkswagen.jpg";
import FIATimage from "../assets/images/Fiat.jpg";

export type AddCarFormProps = {
  show: boolean;
  onHide: () => void;
  onAdd: (newCar: CarAttributes) => void;
  onCancel: () => void;
};

export type UpdateFormProps = {
  onUpdate: (name: string, price: number) => void;
  onCancel: () => void;
};

export type UpdateCarFormProps = {
  show: boolean;
  onHide: () => void;
  onUpdate: (name: string, price: number) => void;
  onCancel: () => void;
};

export type StoreProps = {
  storeItems: CarAttributes[];
  onDelete: (id: number) => void;
  onAddCar: (newCar: CarAttributes) => void;
};

export interface Buyer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phonenumber: string;
}

export type CarAttributes = {
  id: number;
  name: string;
  brand: CarBrand;
  type: string;
  price: number;
  buyerId: number;
};

export type CarBrand =
  | "BMW"
  | "Tesla"
  | "Mercedes"
  | "Audi"
  | "Volkswagen"
  | "Fiat";

export const carBrandImageMap: Record<CarBrand, string> = {
  BMW: BMWimage,
  Tesla: TESLAimage,
  Mercedes: MERCEDESimage,
  Audi: AUDIimage,
  Volkswagen: VOLKSWAGENimage,
  Fiat: FIATimage,
};
