import { db } from "../utils/db.server";
import type { Buyer } from "../buyer/buyer.service";
import { HttpError } from "../error-types";

type Car = {
  id: number;
  name: string;
  type: string;
  price: number;
  owner: Buyer;
  // buyer: Buyer;
  buyerId: number;
  brand: string;
};

//GET ALL CARS FUNCTION
export const listCars = async (): Promise<Car[]> => {
  return db.car.findMany({
    select: {
      id: true,
      name: true,
      type: true,
      price: true,
      owner: true,
      buyerId: true,
      brand: true,
      // buyer: {
      //     select: {
      //         id: true,
      //         firstName: true,
      //         lastName: true
      //     }
      // }
    },
  });
};

//GET SINGLE CAR FUNCTION
export const getCar = async (id: number): Promise<Car | null> => {
  return db.car.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      type: true,
      price: true,
      owner: true,
      buyerId: true,
      brand: true,
    },
  });
};

//CREATE CAR FUNCTION
export const createCar = async (car: {
  name: string;
  type: string;
  price: number;
  buyerId: number;
  brand: string;
}): Promise<Car> => {
  const { name, type, price, buyerId, brand } = car;

  const buyer = await db.buyer.findUnique({
    where: {
      id: buyerId,
    },
  });

  if (buyer === null) {
    throw new HttpError(404, `Buyer: ${buyerId} does not exist`);
  }

  // Create the car with a connection to the buyer
  return db.car.create({
    data: {
      name,
      type,
      price,
      owner: {
        connect: { id: buyerId },
      },
      brand: brand || "", // Default to an empty string if imageURL is null
    },
    select: {
      id: true,
      name: true,
      type: true,
      price: true,
      owner: true,
      buyerId: true,
      brand: true,
    },
  });
};

// UPDATE CAR FUNCTION
export const updateCar = async (
  car: Omit<Car, "id">,
  id: number
): Promise<Car> => {
  const { name, type, price, brand, buyerId } = car;

  const updatedCar = await db.car.findUnique({
    where: {
      id,
    },
  });

  if (updatedCar === null) {
    throw new HttpError(404, `Car: ${id} does not exist`);
  }

  return db.car.update({
    where: {
      id,
    },
    data: {
      name,
      type,
      price,
      brand,
      buyerId,
    },
    select: {
      id: true,
      name: true,
      type: true,
      price: true,
      owner: true,
      brand: true,
      buyerId: true,
    },
  });
};

//DELETE CAR FUNCTION
export const deleteCar = async (id: number): Promise<void> => {
  await db.car.delete({
    where: {
      id,
    },
  });
};

// export function updateCar(car: any) {
//   throw new Error("Function not implemented.");
// }
