import app from "../index";

const request = require("supertest");
const assert = require("assert");

/**
 * @test POST request buyer
 * @description all tests for POST requests on buyers
 * @returns 201, 400
 */

// Test if data input is correct
describe("POST /api/buyers/", () => {
  it("Test response if data is correct format", function (done) {
    request(app)
      .post("/api/buyers/")
      .send({
        firstName: "string",
        lastName: "string",
        email: "correct@email.com",
        phonenumber: "+32470596155",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201, done);
  });
});

// Test if required email is missing
describe("POST /api/buyers/", () => {
  it("Test response if required fields are missing", function (done) {
    request(app)
      .post("/api/buyers/")
      .send({
        firstName: "string",
        lastName: "string",
        phonenumber: "+32470596155",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});

// Test if required phonenumber is missing
describe("POST /api/buyers/", () => {
  it("Test response if required fields are missing", function (done) {
    request(app)
      .post("/api/buyers/")
      .send({
        firstName: "string",
        lastName: "string",
        email: "correct@email.com",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});

// Test to verify if email is of correct format
describe("POST /api/buyers/", () => {
  it("Test response if email is incorrect", function (done) {
    request(app)
      .post("/api/buyers/")
      .send({
        firstName: "string",
        lastName: "string",
        email: "string",
        phonenumber: "+32470596155",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});

// Test to verify if phonenumber is of correct format
describe("POST /api/buyers/", () => {
  it("Test response if phonenumber is incorrect", function (done) {
    request(app)
      .post("/api/buyers/")
      .send({
        firstName: "string",
        lastName: "string",
        email: "correct@email.com",
        phonenumber: "1234567890",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});

/**
 * @test PUT request buyer (on id)
 * @description all tests for PUT requests on buyers
 * @returns 400
 */

// Test if data input is not compleet (email)
describe("PUT /api/buyers/id", () => {
  it("Test response if email is missing", function (done) {
    request(app)
      .put("/api/buyers/:id")
      .send({
        firstName: "updated-string",
        lastName: "updated-string",
        phonenumber: "+32470596155",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});

// Test if data input is not compleet (phonenumber)
describe("PUT /api/buyers/id", () => {
  it("Test response if phonenumber is missing", function (done) {
    request(app)
      .put("/api/buyers/:id")
      .send({
        firstName: "updated-string",
        lastName: "updated-string",
        email: "updated@email.com",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});

// Test to verify if email is of correct format
describe("PUT /api/buyers/id", () => {
  it("Test response if email is incorrect", function (done) {
    request(app)
      .put("/api/buyers/:id")
      .send({
        firstName: "updated-string",
        lastName: "updated-string",
        email: "updated-email-com",
        phonenumber: "+32470596155",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});

// Test to verify if phonenumber is of correct format
describe("PUT /api/buyers/id", () => {
  it("Test response if phonenumber is incorrect", function (done) {
    request(app)
      .put("/api/buyers/:id")
      .send({
        firstName: "updated-string",
        lastName: "updated-string",
        email: "updated@email.com",
        phonenumber: "+32270596155",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});
