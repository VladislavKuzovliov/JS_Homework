function areAnagrams() {
    if (arguments.length < 1) return true;

    var approved = true, tempWordArray = [];

    for (var i = 0; i < arguments.length; i++) {
        tempWordArray[i] = arguments[i].toLowerCase().split('').sort();
    }

    tempWordArray[0].forEach(function (item, index) {
        for (i = 1; i < tempWordArray.length; i++) {
            if (item != tempWordArray[i][index]) {
                approved = false;
                return;
            }
        }
    });

    return approved;
}

console.log(areAnagrams('1E37', '73E1', '17e3'));