let sum = (...numbers) => {
    let sum = 0;
    numbers.forEach((number) => sum += number);
    console.log(sum)
}

sum(1,2);
sum(1,3,5,8);
sum(1,2,12);