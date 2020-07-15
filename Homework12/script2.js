function firstPositive(array) {
    var fstPositive;

    array.some(function (item) {
        fstPositive = item;
        return item > 0;
    });

    return fstPositive;
}


console.log(firstPositive([-1, 0, 22, 34, -2]));
