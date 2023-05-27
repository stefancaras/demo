String.prototype.myRepeat = function (times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += this;
  }
  return result;
};

const pattern = (n) => {
  for (let i = 0; i < n; i++) {
    console.log("*".myRepeat(n));
  }
};
pattern(10);
