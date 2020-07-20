//ЗАДАНИЙ 1
function toNamesObjectArray(nameArray) {

    nameArray.map(function (item,i,array) {
        array[i] = {name: item};
    });

    return nameArray;

}

console.log(toNamesObjectArray(['Victor', 'Abraham', 'Wolfgang']));



//ЗАДАНИЕ 2
function toCurrentTime(timeArray) {

    return timeArray.reduce(function (sum, item) {

        return sum + ' : ' + item;

    }, 'Текущее время');

}

console.log(toCurrentTime(['00', '13', '24']));



//ЗАДАНИЕ 3
function howManyVowels(string) {
    var buffer = string.toLowerCase().split('');
    var vowelsArr = ['a', 'e', 'y', 'u', 'i', 'o', 'у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю', 'ё'];

    return buffer.reduce(function (quantity, currentSymbol) {
        if (vowelsArr.some(function (someVowel) {
            return someVowel == currentSymbol;
        })) {
            quantity++;
        }

        return quantity;

    }, 0);
}

// console.log(howManyVowels('lorem ipsum. СЪЕШЬ ЕЩЁ'));



//ЗАДАНИЕ 4
function countSentencesLetters(string) {
    var tempArray = string.split('');

    tempArray.forEach(function (item, i) {
        if (item == '!' || item == '?') {
            tempArray[i] = '.';
        }
    });

    tempArray = tempArray.join('').split('.');
    tempArray.forEach(function (item) {
        if (item.length) {
            var oneSentence = item.split('');
            var letterQuantity = oneSentence.reduce(function (quantity, currentSymbol) {
                if (currentSymbol>='А'&&currentSymbol<='ё'||currentSymbol >= 'A' && currentSymbol <= 'Z'
                    || currentSymbol >= 'a' && currentSymbol <= 'z') { //Латиница и кирилица допускается
                    quantity++;
                }
                return quantity;
            }, 0);
            console.log(item.trim() + ': Letters quantity is: ' + letterQuantity);
        }
    })
}

// countSentencesLetters('Привет, студент! Студент... Как дела, студент?');