let bubbleSort = (array) => {
  while (true) {
    let sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      //switch numbers
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = false;
      }
    }
    if (sorted) return array;
  }
};
console.log(
  bubbleSort([
    413, 206, 34, 78, 155, 115, 97, 370, 318, 298, 177, 256, 39, 451, 27, 262,
    125, 133, 452, 242, 484, 85, 17, 211, 41, 122, 364, 235, 378, 86,
  ])
);
