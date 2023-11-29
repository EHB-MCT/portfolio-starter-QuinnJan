import { db } from "../src/utils/db.server";

type Buyer = {
  firstName: string;
  lastName: string;
};
async function seed() {
  getBuyers().map((buyer) => {
    return db.buyer.create({
      data: {
        firstName: buyer.firstName,
        lastName: buyer.lastName,
      },
    });
  });
}
function getBuyers(): Array<Buyer> {
  return [
    {
      firstName: "Tom",
      lastName: "Peters",
    },
    {
      firstName: "Anna",
      lastName: "Janssens",
    },
    {
      firstName: "Dirk",
      lastName: "Kouters",
    },
  ];
}
seed();
