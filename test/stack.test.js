const { Stack } = require("../src/stack");

let stack;
beforeEach(() => {
  stack = new Stack();
});

describe("Test stack property", () => {
  it("should return a stack object with an empty array", () => {
    expect(stack).toHaveProperty("stack", []);
  });
});

describe("Test push method", () => {
  it("should add item into array", () => {
    stack.push("Tom");
    expect(stack).toHaveProperty("stack", ["Tom"]);
  });
  it("should add 2 items into array", () => {
    stack.push("Tom");
    stack.push("Bob");
    expect(stack).toHaveProperty("stack", ["Tom", "Bob"]);
  });
});

describe("Test pop method", () => {
  it("should remove last item from array", () => {
    stack.stack = ["Tom", "Bob"];
    stack.pop();
    expect(stack).toHaveProperty("stack", ["Tom"]);
  });
  it("should remove last 2 items from array", () => {
    stack.stack = ["Tom", "Bob", "Sarah"];
    stack.pop();
    stack.pop();
    expect(stack).toHaveProperty("stack", ["Tom"]);
  });
});

describe("Test peek method", () => {
  it("should return last item from array", () => {
    stack.stack = ["Tom", "Bob"];
    expect(stack.peek()).toEqual("Bob");
  });
  it("should return undefined if array is empty", () => {
    expect(stack.peek()).toEqual(undefined);
  });
});
