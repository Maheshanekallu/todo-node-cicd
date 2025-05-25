const request = require("supertest");
const app = require("../app");

describe("GET /api/health", () => {
  it("should return status 200 and server status", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status", "Server is running");
  });
});
