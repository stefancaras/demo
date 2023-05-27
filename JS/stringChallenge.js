const array = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "plus",
  "minus",
];

const StringChallenge = (str) => {
  let indexes = [];
  while (str) {
    array.forEach((el) => {
      const regex = new RegExp(`^${el}`);
      if (str.match(regex)) {
        str = str.replace(regex, "");
        indexes.push(array.indexOf(el));
      }
    });
  }
  indexes = indexes.map((el) => {
    if (el === 10) return "+";
    else if (el === 11) return "-";
    else return el;
  });
  indexes = indexes.join("");
  let result = String(eval(indexes)).split("");
  result = result.map((el) => {
    if (el === "-") return "negative";
    else return array[el];
  });
  return result.join("");
};

console.log(StringChallenge("foursixminustwotwominusthreezero"));
