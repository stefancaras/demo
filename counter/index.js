let count = 0
let entries = "Previous entries: "

function increment() {
    count += 1;
    document.getElementById("count-el").innerText = count;
}

function save() {
    entries += count + " - ";
    document.getElementById("entries").innerText = entries;
    count = 0;
    document.getElementById("count-el").innerText = count;
}
