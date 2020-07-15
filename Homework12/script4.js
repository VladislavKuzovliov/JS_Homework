function areAnagrams() {
    if (arguments.length < 1) return true;

    var tempWordArray = [];

    for (var i = 0; i < arguments.length; i++) {
        tempWordArray[i] = arguments[i].toLowerCase().split('');
    }

    for (i = 1; i < tempWordArray.length; i++) {
        if (tempWordArray[0].length != tempWordArray[i].length) return false;
        for (var j = 0; j < tempWordArray[0].length; j++) {
            for (var key in tempWordArray[i]) {
                if (tempWordArray[0][j] === tempWordArray[i][key]) {
                    delete tempWordArray[i][key];
                }
            }
        }
        if (Object.keys(tempWordArray[i]).length > 0) return false;
    }

    return true;
}

console.log(areAnagrams('1E37', '73E1', '17e3','3e17'));