const server = require("../server");
const request = require("supertest");

// Test 1 - Get Student route response code
describe("GET /Student", () => {
  test("should return 200 OK", async () => {
    const response = await request(server).get("/Student").send();
    expect(response.status).toBe(200);
  });
});


// Test 2 - Get Student name
describe('GET /Student', () => {
  test('should return a student called John Doe when find by id', async () => {
    const student_id = "64193e7f048b526d72240ff8"
    const student_name = "John Doe"
    const response = await request(server).get(`/Student/${student_id}`).send()
    expect(response.body.name).toBe(student_name);
  });
});