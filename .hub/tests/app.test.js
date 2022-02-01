import request from "../utils/request";
import { _setup, end, setEnv } from "../utils/serverRunner";
import sleep from "../utils/sleep";
import fs from "fs";

jest.setTimeout(15000);

beforeAll(async () => {
  setEnv("MONGO_URI", "mongodb://mongo_db:27017");
  await sleep(4000);
})

afterAll(() => {
  end();
});

describe("POST /sign-up", () => {
  it("should respond with status 201", async () => {
    await _setup();

    const response = await request.post("/sign-up", {
      name: "Fulano", email: "fulano@email.com", password: "123"
    });

    expect(response.status).toEqual(201);
  });

  it("should respond with status 401", async () => {
    await _setup();

    const response = await request.post("/sign-in", {
      email: "fulano@email.com", password: "1234"
    });

    expect(response.status).toEqual(401);
  });

  it("should respond with 200", async () => {
    await _setup();

    await request.post("/sign-up", {
      name: "Fulano", email: "fulano@email.com", password: "123"
    });

    const response = await request.post("/sign-in", {
      email: "fulano@email.com", password: "123"
    });

    expect(response.status).toEqual(200);
  });
});

describe("Usage of Async/Await", () => {
  it("should be used async/await with try/catch instead of .then() and .catch()", async () => {
    const code = fs.readFileSync("./src/app.js", "utf8");

    expect(code.indexOf("async")).toBeGreaterThan(-1);
    expect(code.indexOf("await")).toBeGreaterThan(-1);
    expect(code.indexOf(".then(product")).toBe(-1);
  });
});
