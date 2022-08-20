let i = 0;
let j = 450;
let move = () => {
    if (i < 450) {
        document.getElementById("box").style.left = i++ + "px"
    } else if (j > 0) {
        document.getElementById("box").style.left = j-- + "px"
    } else if (j == 0) {
        i = 0;
        j = 450;
    }
}
setInterval(move, 1)