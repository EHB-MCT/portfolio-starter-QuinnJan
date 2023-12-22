// Add default data to database

import { db } from "../src/utils/db.server";

type Buyer = {
  firstName: string;
  lastName: string;
  email: string;
  phonenumber: string;
};

type Car = {
  name: string;
  brand: string;
  type: string;
  price: number;
};

async function seed() {
  getBuyers().map((buyer) => {
    return db.buyer.create({
      data: {
        firstName: buyer.firstName,
        lastName: buyer.lastName,
        email: buyer.email,
        phonenumber: buyer.phonenumber,
      },
    });
  });
  const buyer = await db.buyer.findFirst({
    where: {
      firstName: "Tom",
    },
  });

  if (buyer) {
    getCars().map((car) => {
      const { name, type, price, brand } = car;
      return db.car.create({
        data: {
          name,
          type,
          brand,
          price,
          buyerId: buyer.id,
        },
      });
    });
  }
}
function getBuyers(): Array<Buyer> {
  return [
    {
      firstName: "Tom",
      lastName: "Peters",
      email: "tom@gmail.com",
      phonenumber: "32464645546",
    },
    {
      firstName: "Anna",
      lastName: "Janssens",
      email: "anna@gmail.com",
      phonenumber: "32464645546",
    },
    {
      firstName: "Dirk",
      lastName: "Kouters",
      email: "dirk@gmail.com",
      phonenumber: "32464645546",
    },
  ];
}

function getCars(): Array<Car> {
  return [
    {
      name: "Tesla X",
      type: "SUV",
      price: 120.0,
      brand: "Audi",
    },
    {
      name: "Mercedes",
      type: "Coupé",
      price: 30.0,
      brand: "Mercedes",
    },
    {
      name: "BMW",
      type: "SUV",
      price: 70.0,
      brand: "BMW",
    },
  ];
}
seed();
