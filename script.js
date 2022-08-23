
arr = [5,12,4,546,4,12,67,4,9];
// arr = [3, 2, 5, 1];

function mergeSort(arr) {

    if (arr.length < 2) {
        return arr;
    }

    let leftHalf = mergeSort(arr.slice(0, arr.length/2));
    let rightHalf = mergeSort(arr.slice(arr.length/2));
    
    // merge lists
    let newArr = [];
    while (leftHalf.length > 0 || rightHalf.length > 0) {
        if (leftHalf[0] < rightHalf[0] || rightHalf.length == 0) {
            newArr.push(leftHalf[0]);
            leftHalf.shift();
        } else {
            newArr.push(rightHalf[0]);
            rightHalf.shift();
        }
    }
    return newArr;
}

console.log(mergeSort(arr));
