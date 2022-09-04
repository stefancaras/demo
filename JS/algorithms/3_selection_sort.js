let selectionSort = (arr) => {
    for (let j = 0; j < arr.length; j++) {
        console.log(arr);
        let smallest = Infinity;
        let index;
        //find smallest number in array
        for (let i = j; i < arr.length; i++) {
            if (arr[i] < smallest) {
                smallest = arr[i];
                index = i;
            }
        }
        console.log(`Smallest number is: ${smallest}`)
        //switch numbers
        if (arr[j] != arr[index]) {
            let tmp = arr[j];
            arr[j] = arr[index];
            arr[index] = tmp;
        }
    }
}
selectionSort([413, 206, 34, 78, 155, 115, 97, 370, 318, 298, 177, 256,
 39, 451, 27, 262, 125, 133, 452, 242, 484, 85, 17, 211, 41, 122, 364, 235, 378, 86])
