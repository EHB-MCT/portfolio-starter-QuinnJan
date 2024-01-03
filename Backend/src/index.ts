import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";

import { buyerRouter } from "./buyer/buyer.router";
import { carRouter } from "./car/car.router";
dotenv.config();

// if (!process.env.PORT) {
//   process.exit(1);
// }

// const PORT: number = parseInt(process.env.PORT as string, 10);

console.log(process.env.NODE_ENV);

const config = {
  development: {
    databaseUrl: "",
  },
  production: {
    databaseUrl: "",
  },
  testing: {
    databaseUrl: "",
  },
};

module.exports = config;

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/buyers", buyerRouter);
app.use("/api/cars", carRouter);

app.listen(PORT, () => {
  console.log(`Check:${PORT}`);
});

export default app;
