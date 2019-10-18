const request = require("supertest");
const server = require("../api/server.js");

// let token = null;

// beforeAll(done => {
//   request(server)
//     .post("/api/auth/login")
//     .send({
//       username: "Jojo",
//       password: "123456",
//     })
//     .end((err, res) => {
//       token = res.body.token;
//       console.log(res.body);
//       done();
//     });
// });

describe("jokes-router", () => {
  describe("GET /api/jokes", () => {
    it("should responds with 401 without sending token", () => {
      return (
        request(server)
          .get("/api/jokes")
          // .set("authorization", token)
          .then(res => {
            expect(res.status).toBe(401);
          })
      );
    });

    it("should responds with JSON", () => {
      return (
        request(server)
          .get("/api/jokes")
          // .set("authorization", token)
          .then(res => {
            expect(res.type).toBe("application/json");
          })
      );
    });
  });
});
