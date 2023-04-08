while (true) {
  let a = ["1", "3", "4", "6"];
  const b = ["+", "-", "/", "*"];
  a.sort(() => Math.random() - 0.5);
  a = a.map((el) =>
    a.indexOf(el) !== 0 ? b[Math.floor(Math.random() * 4)] + el : el
  );
  console.log(a.join(""), eval(a.join("")));
  if (eval(a.join("")) === 24) break;
}
