import app from "../index";

const request = require("supertest");
const assert = require("assert");

/**
 * @test POST request car
 * @description all tests for POST requests on cars
 * @returns 201, 400, 404
 */

// Test if data input is correct
describe("POST /api/cars/", () => {
  it("Succesfully create a car and returning 201 created", function (done) {
    request(app)
      .post("/api/cars/")
      .send({
        name: "BMW",
        type: "SUV",
        price: 20000,
        buyerId: 1,
        brand: "BMW",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201, done);
  });
});

// Test to see if price is present
describe("POST /api/cars/", () => {
  it("Required fields (price) are missing, returning 400", function (done) {
    request(app)
      .post("/api/cars/")
      .send({
        name: "BMW",
        type: "SUV",
        buyerId: 1,
        brand: "BMW",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});

// Test to see if name is present
describe("POST /api/cars/", () => {
  it("Required fields (name) are missing, returning 400", function (done) {
    request(app)
      .post("/api/cars/")
      .send({
        type: "SUV",
        price: 20000,
        buyerId: 1,
        brand: "BMW",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});

// Test to check if user ID is present (if buyer exists)
describe("POST /api/cars/", () => {
  it("Test response if buyer does not exist, returning 404", function (done) {
    request(app)
      .post("/api/cars/")
      .send({
        name: "BMW",
        type: "SUV",
        price: 20000,
        buyerId: 200,
        brand: "BMW",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, done);
  });
});

//Test to verify if buyer ID is number (or any other wrong format)
describe("POST /api/cars/", () => {
  it("Test response if data is incorrect format", function (done) {
    request(app)
      .post("/api/cars/")
      .send({
        name: "BMW",
        type: "SUV",
        price: 20000,
        buyerId: "hello",
        brand: "BMW",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});

/**
 * @test PUT request car
 * @description all tests for PUT requests on cars
 * @returns 200, 201, 400, 404
 */

// describe("PUT /api/cars/id", () => {
//   it("Succesfully updated a car and returning 200", function (done) {
//     request(app)
//       .put("/api/cars/:id")
//       .send({
//         name: "Updated BMW",
//         type: "SUV",
//         price: 21000,
//         buyerId: 1,
//         brand: "BMW",
//       })
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(200, done);
//   });
// });

// // Test if data input is not compleet (name)
describe("PUT /api/cars/id", () => {
  it("Test to see if required name is missing, returning 400", function (done) {
    request(app)
      .put("/api/cars/:id")
      .send({
        type: "SUV",
        price: 21000,
        buyerId: 1,
        brand: "BMW",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});

// // Test if data input is not compleet (price)
describe("PUT /api/cars/id", () => {
  it("Test to see if required price is missing, returning 400", function (done) {
    request(app)
      .put("/api/cars/:id")
      .send({
        name: "Updated BMW",
        type: "SUV",
        buyerId: 1,
        brand: "BMW",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});
