const StringChallenge = (str, num) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(String.fromCharCode(str.charCodeAt(i) + num));
  }
  return result.join("");
};
console.log(StringChallenge("Hello", 4));
