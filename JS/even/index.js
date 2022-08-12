function even() {
    let n1 = Number(document.getElementById("number1").value);
    let n2 = Number(document.getElementById("number2").value); 
    let n3 = 0
    let sum = 0  

    if (n1 > n2) {
        n3 = n1
        n1 = n2
        n2 = n3
    }

    for (let i = n1 + 1; i < n2; i++){
        if (i % 2 == 0) {
            sum += i
        }
    }

    document.getElementById("entries").innerHTML = 
    "The sum of even numbers between "+n1+" and "+n2+" is " + sum;
}