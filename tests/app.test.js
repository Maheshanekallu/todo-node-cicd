const request = require("supertest");
const app = require("../app");

describe("GET /api/health", () => {
  it("should return status 200 and server status", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status", "Server is running");
  });

  it("should return a JSON response", async () => {
    const res = await request(app).get("/api/health");
    expect(res.headers['content-type']).toMatch(/application\/json/);
  });

  it("should not return HTML or text", async () => {
    const res = await request(app).get("/api/health");
    expect(typeof res.body).toBe('object');
    expect(res.text).not.toContain('<html>');
  });
});
