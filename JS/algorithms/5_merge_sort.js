function merge(left, right) {
    let arr = [];
    //Check if length of arrays > 0
    while (left.length && right.length) {
        //Sort arrays into the 'arr' array
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    //Merge arrays and return them
    return arr = [...arr, ...left, ...right];
}
function mergeSort(array) {
    //Find middle of array
    const half = array.length / 2;
    //Exit condition
    if (array.length <= 1) {
        return array;
    }
    //Left array is half of array
    let left = array.splice(0, half);
    //Right array is the rest of the array
    let right = array;
    //Recursive part
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([413, 206, 34, 78, 155, 115, 97, 370, 318, 298, 177, 256,
 39, 451, 27, 262, 125, 133, 452, 242, 484, 85, 17, 211, 41, 122, 364, 235, 378, 86]))
