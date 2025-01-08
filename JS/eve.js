let x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 1; x[0] !== x.at(-1); i++)
  console.log(i, (x = x.replace(/./g, (e) => e.repeat(~~(Math.random() * 3)))));
