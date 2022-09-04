let bubbleSort = (arr) => {
    let iter = 0;
    while (true) {
        console.log(arr);
        iter++;
        let count = 0;
        for (let j = 0; j < arr.length-1; j++) {
            //switch numbers
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                count++;
            }
        }
        //if items are in order
        if (count == 0) {
            return console.log(`Finished, ${iter} iterations.`);
        }
    }
}
bubbleSort([413, 206, 34, 78, 155, 115, 97, 370, 318, 298, 177, 256,
 39, 451, 27, 262, 125, 133, 452, 242, 484, 85, 17, 211, 41, 122, 364, 235, 378, 86])
