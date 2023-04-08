const $ = (query) => document.querySelector(query);
let time = new Date();
let s = time.getSeconds() * 6;
let m = time.getMinutes() * 6;
let h = time.getHours() * 30 + time.getMinutes() * 0.5;
const func = () => {
  $(".second").style = `transform: translate(-50%, -100%) rotate(${s}deg)`;
  $(".minute").style = `transform: translate(-50%, -100%) rotate(${m}deg)`;
  $(".hour").style = `transform: translate(-50%, -100%) rotate(${h}deg)`;
  s += 6;
  if (s === 360) {
    s = 0;
    m += 6;
    h += 0.5;
  }
};
setInterval(func, 1000);
