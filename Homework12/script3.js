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

//в функции я добавил переменную wordLength дя того, чтобы:
//1)каждый раз не отнимать единицу в if.
//2)в for я тоже применил эту переменную, чтобы при нечетном количестве букв в слове, центральная буква
//  не сравнивалась сама с собой