import app from "./index";

const request = require('supertest');
const assert = require('assert');

// Disabling until I create real test
// describe("GET /", () => {
//   it("responds with json", function (done) {
//     request(app)
//       .get("/")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(200, done);
//   });
// });