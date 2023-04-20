const server = require("../server");
const request = require("supertest");

// Test 1 - Get Student route response code
describe("GET /Student", () => {
  test("should return 200 OK", async () => {
    const response = await request(server).get("/Student").send();
    expect(response.status).toBe(200);
   
  });
});

// Test 2 - Get Student route response body
describe("GET /Student", () => {
  test("should return JSON", async () => {
    const response = await request(server).get("/Student").send();
    expect(response.type).toBe("application/json");
   
  });
});

// Test 3 - Post Student route response code
describe("POST /Student", () => {
  test("should return 200 OK", async () => {
    const response = await request(server)
      .post("/Student")
      .send({ name: "John Doe", age: 25, email: "eddy@gmail.com" });
    expect(response.status).toBe(200);
   
  });
});

// Test 4 - Post Student route response body
describe("POST /Student", () => {
  test("should return JSON", async () => {
    const response = await request(server)
      .post("/Student")
      .send({ name: "John Doe", age: 25, email: "eddy@gmail.com" });
    expect(response.type).toBe("application/json");
   
  });
});

// Test 5 - Update Student route response code
describe("PUT /Student", () => {
  test("should return 200 OK", async () => {
    const response = await request(server)
      .put("/Student/6418943aeca8383d4f816917")
      .send({ name: "John Doe" });
    expect(response.status).toBe(200);
   
  });
});

// Test 6 - Update Student route response body
describe("PUT /Student", () => {
  test("should return JSON", async () => {
    const response = await request(server)
      .put("/Student/6418943aeca8383d4f816917")
      .send({ name: "John Doe" });
    expect(response.type).toBe("application/json");
   
  });
});

// Test 7 - Delete Student route response code
describe("DELETE /Student", () => {
  test("should return 200 OK", async () => {
    const response = await request(server)
      .delete("/Student/6418943aeca8383d4f816917")
      .send();
    expect(response.status).toBe(200);
   
  });
});

// Test 8 - Delete Student route response body
describe("DELETE /Student", () => {
  test("should return JSON", async () => {
    const response = await request(server)
      .delete("/Student/6418943aeca8383d4f816917")
      .send();
    expect(response.type).toBe("application/json");
   
  });
});


// Test 9 - Get Student name
describe('GET /Student', () => {
  test('should return a student called John Doe when find by id', async () => {
    const student_id = "64193e7f048b526d72240ff8"
    const student_name = "John Doe"
    const response = await request(server).get(`/Student/${student_id}`).send()
    expect(response.body.name).toBe(student_name);
   
  });
});
