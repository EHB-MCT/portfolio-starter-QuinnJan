import { db } from "../utils/db.server";

export type Buyer = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  email: string;
  phonenumber: string;
};

//GET ALL BUYERS FUNCTION
export const listBuyers = async (): Promise<Buyer[]> => {
  return db.buyer.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phonenumber: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

//GET SINGLE BUYER FUNCTION
export const getBuyer = async (id: number): Promise<Buyer | null> => {
  return db.buyer.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phonenumber: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

//CREATE FUNCTION
export const createBuyer = async (buyer: Omit<Buyer, "id">): Promise<Buyer> => {
  const { firstName, lastName, email, phonenumber } = buyer;
  const createdBuyer = await db.buyer.create({
    data: {
      firstName,
      lastName,
      email,
      phonenumber,
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      firstName: true,
      lastName: true,
      email: true,
      phonenumber: true,
    },
  });

  // Convert Prisma generated type to your defined type
  const formattedBuyer: Buyer = {
    id: createdBuyer.id,
    createdAt: createdBuyer.createdAt,
    updatedAt: createdBuyer.updatedAt,
    firstName: createdBuyer.firstName,
    lastName: createdBuyer.lastName,
    email: createdBuyer.email,
    phonenumber: createdBuyer.phonenumber,
  };

  return formattedBuyer;
};

//UPDATE FUNCTION
export const updateBuyer = async (
  buyer: Omit<Buyer, "id">,
  id: number
): Promise<Buyer> => {
  const { firstName, lastName, email, phonenumber } = buyer;
  return db.buyer.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
      email,
      phonenumber,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phonenumber: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

//DELETE FUNCTION
export const deleteBuyer = async (id: number): Promise<void> => {
  await db.buyer.delete({
    where: {
      id,
    },
  });
};
