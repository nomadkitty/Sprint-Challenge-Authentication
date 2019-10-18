const request = require("supertest");
const db = require("../database/dbConfig.js");
const Users = require("./auth-model.js");
const server = require("../api/server.js");

describe("auth-router", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("POST /api/auth/register", () => {
    it("should respond with 201 OK", async () => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "Tiger", password: "123456" })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it("should return with JSON", async () => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "Tiger", password: "123456" })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  describe("POST /api/auth/login", () => {
    it("should respond with 401 without sending token", async () => {
      await Users.add({ username: "Bird", password: "123456" });

      await request(server)
        .post("/api/auth/login")
        .send({ username: "Bird", password: "123456" })
        .then(res => {
          expect(res.status).toBe(401);
        });
    });

    it("should return with JSON", async () => {
      await Users.add({ username: "Lion", password: "123456" });

      await request(server)
        .post("/api/auth/login")
        .send({ username: "Lion", password: "123456" })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});
