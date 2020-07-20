//ЗАДИНИЕ 1
function filterNumbersArr(numbers) {
    return numbers.filter(function (item) {
        return item > 0;
    });
}


console.log(filterNumbersArr([-1, 0, 2, 34, -2]));


//ЗАДАНИЕ 2
function firstPositive(array) {
    var position = -1;

    array.some(function (item) {
        position++;
        return item > 0;
    });

    return array[position];
}

console.log(firstPositive([-1, 0, 22, 34, -2]));
//Искренне не понимаю, какой есть более подходящий для этой задачи перебирающий метод.
//some останавливает перебор при первом соответствующем условию элементе массива. Это то, что нужно. Или нет?


//ЗАДАНИЕ 3
function isPalindrome(word) {
    var approved = true,
        tempWord = word.toLowerCase().split(''),
        wordLength = tempWord.length - 1;

    for (var i = 0; i < wordLength / 2; i++) {
        if (tempWord[i] != tempWord[wordLength - i]) {
            approved = false;
        }
    }

    return approved;
}

console.log(isPalindrome('Rotator'));

//в функции я добавил переменную wordLength для того, чтобы:
//1)каждый раз не отнимать единицу в if.
//2)в for я тоже применил эту переменную, чтобы при нечетном количестве букв в слове, центральная буква
//  не сравнивалась сама с собой


//ЗАДАНИЕ 4
function areAnagrams() {

    if (arguments.length < 1) return true;

    var approved = true, tempWordArray = [];

    for (var i = 0; i < arguments.length; i++) {
        tempWordArray[i] = arguments[i].toLowerCase().split('').sort().join('');
    }

    tempWordArray.forEach(function (item) {
        if (item != tempWordArray[0]) {
            approved = false;
        }
    });

    return approved;
}

console.log(areAnagrams('1E37', '73E1', '17e3'));
//тут я затупил, делая по аналогии с 3 задачей, мало подумав над тем, как действительно будет быстрее.


//ЗАДАНИЕ 5
function divideArr(array, subArrayLength) {
    var newDivide = [];

    for (var i = 0; i < array.length; i += subArrayLength) {
        newDivide[newDivide.length] = array.slice(i, subArrayLength + i);
    }

    return newDivide;

}


console.log(divideArr([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
//я сразу не применил этот способ, потому что не знал о такой фиче slice, что он не выходит за пределы индексов массива.
//только что узнал.