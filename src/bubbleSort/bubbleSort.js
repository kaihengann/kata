const bubbleSort = array => {
  if (!Array.isArray(array)) throw new Error("Input is not an array");
  if (!array.some(Number.isInteger))
    throw new Error("Input array contains non-integers");
  if (array.length > 1) {
    const arr = [...array];
    for (let k = 0; k < arr.length - 1; k++) {
      for (let i = 0; i < arr.length - 1; i++) {
        const currentNum = arr[i];
        const nextNum = arr[i + 1];
        if (currentNum > nextNum) {
          arr[i] = nextNum;
          arr[i + 1] = currentNum;
        }
      }
    }
    return arr;
  } else {
    return array;
  }
};

module.exports = bubbleSort;
