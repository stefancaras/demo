const stringChallenge = (str) => {
  const regex = "zero|one|two|three|four|five|six|seven|eight|nine";
  str = str.replace(new RegExp(regex, "g"), (e) => regex.split("|").indexOf(e));
  str = str.replace(/plus|minus/g, (e) => "+-"[+(e[0] === "m")]);
  return (eval(str) + "").replace(/./g, (i) => regex.split("|")[i]);
};
console.log(stringChallenge("foursixminustwotwoplusthreezero"));
