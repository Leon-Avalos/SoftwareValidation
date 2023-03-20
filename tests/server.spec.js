const server = require("../server");
const request = require("supertest");

// Test 1 - Get Student route response code
describe("GET /Student", () => {
  test("should return 200 OK", async () => {
    const response = await request(server).get("/Student").send();
    expect(response.status).toBe(200);
  });
});
