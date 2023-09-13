const binarySearch = (arr, item) => {
    let low = 0;
    let high = arr.length - 1;
    let i;
    for (i = 0; low <= high; i++) {
        const middle = Math.floor((low + high) / 2);
        if (arr[middle] === item) {
            return `Найден элемент по индексу ${middle}, попыток ${i}`
        }
        if (arr[middle] > item) {
            high = middle - 1
        }
        else  {
            low = middle + 1
        }
    }
    return `За ${i} попыток ничего не найдено`
}

console.log(binarySearch([1,3,5,7,9], 5))