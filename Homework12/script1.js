function filterNumbersArr(numbers) {
    var newArr = [];
    numbers.forEach(function (item) {
        if (item > 0) newArr[newArr.length] = item;
    });

    return newArr;
}


console.log(filterNumbersArr([-1, 0, 2, 34, -2]));
