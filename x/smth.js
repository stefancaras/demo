const array = [23, 76, 45, 32, 1, 100, 83, 47, 65, 12];
let bool = true;

while (bool) {
  bool = false;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      let tmp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = tmp;
      bool = true;
    }
  }
}

console.log(array);
