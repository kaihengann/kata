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

describe("Test dequeue method", () => {
  it("should remove first item from array", () => {
    queue.queue = ["Tom", "Bob"];
    queue.dequeue();
    expect(queue).toHaveProperty("queue", ["Bob"]);
  });
  it("should remove 2 items from array", () => {
    queue.queue = ["Tom", "Bob", "Sarah"];
    queue.dequeue();
    queue.dequeue();
    expect(queue).toHaveProperty("queue", ["Sarah"]);
  });
});

describe("Test peek method", () => {
  it("should return first item from array", () => {
    queue.queue = ["Tom", "Bob"];
    expect(queue.peek()).toEqual('Tom');
  });
  it('should return undefined if array is empty', () => {
    expect(queue.peek()).toEqual(undefined);
  });
});
