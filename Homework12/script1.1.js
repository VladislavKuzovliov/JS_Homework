function filterNumbersArr(numbers) {
    return numbers.filter(function (item) {
        return item > 0;
    });
}


console.log(filterNumbersArr([-1, 0, 2, 34, -2]));
