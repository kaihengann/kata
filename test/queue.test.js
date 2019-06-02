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

describe("Test enqueue method", () => {
  it("should add item into array", () => {
    queue.enqueue("Tom");
    expect(queue).toHaveProperty("queue", ["Tom"]);
  });
  it("should add 2 items into array", () => {
    queue.enqueue("Tom");
    queue.enqueue("Bob");
    expect(queue).toHaveProperty("queue", ["Tom", "Bob"]);
  });
});