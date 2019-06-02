const { Queue } = require("../src/queue");

let queue;
beforeEach(() => {
  queue = new Queue();
});

describe("Test queue property", () => {
  it("should return a queue object with an empty array", () => {
    expect(queue).toHaveProperty("queue", []);
  });
});