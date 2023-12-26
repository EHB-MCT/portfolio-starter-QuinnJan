import app from "./index";

const request = require("supertest");
const assert = require("assert");

// describe("POST /api/buyers/", () => {
//   it("Test response if data is incorrect format", function (done) {
//     request(app)
//       .post("/api/buyers/")
//       .send({
//         firstName: "string",
//         lastName: "string",
//         email: "string",
//         //Should be string
//         phonenumber: 3,
//       })
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(400, done);
//   });
// });

describe("POST /api/cars/", () => {
  it("Test response if buyer does not exist", function (done) {
    request(app)
      .post("/api/cars/")
      .send({
        name: "BMW",
        type: "SUV",
        price: 20000,
        buyerId: 20,
        brand: "BMW",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, done);
  });
});

describe("POST /api/cars/", () => {
  it("Test response if data is incorrect format", function (done) {
    request(app)
      .post("/api/cars/")
      .send({
        name: "BMW",
        type: "SUV",
        price: 20000,
        brand: "BMW",
        //Should be Int
        buyerId: "hello",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});
