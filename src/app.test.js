// we will use supertest to test HTTP requests/responses
const request = require("supertest");
const app = require("./app");

const users = require("./users");

describe("GET / ", () => {
  test("It should respond with an Ok", async () => {
    const response = await request(app).get("/");
    expect(response.text).toEqual("Ok");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /health ", () => {
  test("It should respond with an Healthy", async () => {
    const response = await request(app).get("/health");
    expect(response.text).toEqual("Healthy");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /users ", () => {
  test("It should respond with an array of users", async () => {
    const response = await request(app).get("/users");
    expect(response.body).toEqual(users);
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /users/:id ", () => {
  const expectedUser = { id: 2, name: "Mateus" };

  test(`It should respond with an user id ${expectedUser.id}`, async () => {
    const response = await request(app).get(`/users/${expectedUser.id}`);
    expect(response.body).toEqual(expectedUser);
    expect(response.statusCode).toBe(200);
  });

  test(`It should respond with not found user status code`, async () => {
    const unexpectedId = 99;
    const response = await request(app).get(`/users/${unexpectedId}`);
    expect(response.statusCode).toBe(404);
  });
});
