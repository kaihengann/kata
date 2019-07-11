const bubbleSort = require("./bubbleSort");

describe("Irregular inputs", () => {
  it("should throw an error if input is not an array", () => {
    expect(() => bubbleSort(1)).toThrow("Input is not an array");
  });

  it("should throw an error if input array does not only contain integers", () => {
    expect(() => bubbleSort(["string"])).toThrow(
      "Input array contains non-integers"
    );
    expect(() => bubbleSort([1.25])).toThrow(
      "Input array contains non-integers"
    );
    expect(() => bubbleSort([true])).toThrow(
      "Input array contains non-integers"
    );
    expect(() => bubbleSort([{ test: "test" }])).toThrow(
      "Input array contains non-integers"
    );
  });
});

describe("Arrays with length 1", () => {
  it("should return the same array if array length is 1", () => {
    expect(bubbleSort([1])).toEqual([1]);
    expect(bubbleSort([-1])).toEqual([-1]);
  });
});

describe("Arrays with length > 1", () => {
  it('should return the same array if the array contains the same numbers', () => {
    expect(bubbleSort([1, 1, 1])).toEqual([1, 1, 1]);
    expect(bubbleSort([-2, -2, -2])).toEqual([-2, -2, -2]);
  });

  it('should return the same array if the array contains sorted numbers', () => {
    expect(bubbleSort([1, 2])).toEqual([1, 2]);
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(bubbleSort([2, 5, 10])).toEqual([2, 5, 10]);
    expect(bubbleSort([-2, 4, 100])).toEqual([-2, 4, 100]);
  });

  it("should return a sorted array if the input array has only positive numbers ", () => {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(bubbleSort([5, 3, 1])).toEqual([1, 3, 5]);
    expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
    expect(bubbleSort([100, 40, 60, 200, 1, 5])).toEqual([1, 5, 40, 60, 100, 200]);
  });

  it('should return a sorted array if the input array has both positive and negative numbers', () => {
    expect(bubbleSort([10, 0, -10])).toEqual([-10, 0, 10]);
    expect(bubbleSort([150, -10, 0, -200, 50])).toEqual([-200, -10, 0, 50, 150]);
  });
});
