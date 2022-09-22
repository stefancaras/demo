let binarySearch = (arr, num) => {
    console.log(`Number ${num} is at position ${arr.indexOf(num) + 1}`)
    console.log(arr)
    while (true) {
        let halfList = Math.floor(arr.length/2);
        console.log(`Middle number: ${arr[halfList]}`)
        if (arr[halfList] == num) {
            return console.log("Number found.");
        } else if (arr[halfList] < num) {
            arr.splice(0, halfList+1);
        } else if (arr[halfList] > num) {
            arr.splice(halfList, halfList+1);
        } else {
            return console.log(`Number ${num} is not in the list`);
        }
    console.log(arr)
    }
}
binarySearch([2, 4, 6, 7, 10, 11, 12, 13, 14, 19, 20, 23, 24, 26,
 28, 29, 31, 32, 33, 34, 35, 37, 38, 39, 41, 42, 43, 44, 45, 48], 45)




let binarySearch2 = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;
    while (true) {
        let halfList = Math.floor((left + right) / 2);
        console.log(`Left: ${arr[left]}, Middle: ${arr[halfList]}, Right: ${arr[right]}`);
        if (arr[halfList] == num) {
            return console.log(`Number ${num} found at position ${halfList + 1}.`);
        } else if (arr[halfList] < num && left != halfList) {
            left = halfList;
        } else if (arr[halfList] > num && right != halfList) {
            right = halfList;
        } else if (arr[right] == num) {
            return console.log(`Number ${num} found at position ${right + 1}.`);
        } else {
            return console.log(`Number ${num} is not in the list.`);
        }
    }
}
binarySearch2([2, 4, 6, 7, 10, 11, 12, 13, 14, 19, 20, 23, 24, 26,
 28, 29, 31, 32, 33, 34, 35, 37, 38, 39, 41, 42, 43, 44, 45, 48], 45)
