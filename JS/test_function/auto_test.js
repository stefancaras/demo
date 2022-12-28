// Test function
function test(array, result) {
  if (calculateAvg(array) === result) {
    console.log(`%c Test [${array}] passed.`, "color: #0f0");
  } else {
    console.log(`%c Test [${array}] failed.`, "color: #f00");
    console.log(`(expected "${result}", got "${calculateAvg(array)}")`);
  }
}

// Test cases
const cases = new Map([
  [[4, 10], 7],
  [[5, 9, 10, 2, 3], 5.8],
  [[8, 7, 9, 10], 8.5],
  [[], undefined],
  [[8, 6, 7, 4, 2, 9], 6],
  [[7, 10, 2], 6.33],
  [[10, 1], 5.5],
  [[4, 8, , 5, 7], 6],
  [[7], 7],
  [[6, 1, 3, 8, 5, 9, 2, 3, 1, 5], 4.3]
]);

// Run test function for every test case
cases.forEach((result, array) => test(array, result));

// The function that we want to test
function calculateAvg(array) {
  let sum = 0;
  array.forEach(grade => sum += grade);
  return Number((sum / array.length).toFixed(2));
}
