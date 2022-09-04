let linearSearch = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return console.log(`Number ${num} is in the array at position ${i+1}`);
        }
    console.log(`${arr[i]} is not equal to ${num}`);
    }
    return console.log(`Number ${num} is not in the array.`);
}
linearSearch([1,2,3,4,5,6,7,8,9,10], 10)
