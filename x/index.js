let string = "The greatest show on Earth";
const removeVowels = (string) => {
  return string.replace(/[aeiou]/gi, "");
};
console.log(removeVowels(string));
