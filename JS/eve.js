let prev = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let curr = "";
let gen = 0;
while (prev[0] !== prev.at(-1)) {
  curr = "";
  for (let i = 0; i < prev.length; i++) {
    curr += prev[i].repeat(Math.floor(Math.random() * 3));
  }
  prev = curr;
  gen++;
  console.log(gen, prev);
}
