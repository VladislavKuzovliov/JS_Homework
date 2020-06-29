function Animal(name) {
    var self = this;
    this.name = name;
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) console.log(formatFoodAmount());
        else {
            if (amount > 500) {
                console.log ('Слишком много корма.');
            } else if (typeof amount !=null && amount !== '' && amount < 50) {
                console.log ('Слишком мало корма.');
            } else if (typeof amount != "number") {
                console.log ('Неверно введено количество корма.');
            } else if (amount <= 500 && amount >= 50 && (!isNaN(amount) && (+amount != 0 || amount == 0))) {
                foodAmount = amount;
            }

        }
    }
    this.feed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    }
}

function Cat() {
    Animal.apply(this, arguments);
    var animalFeed = this.feed;
    this.feed = function () {
        animalFeed();
        console.log('Кот доволен ^^');
        return this;
    }
    this.stroke = function () {
        console.log('Гладим кота...');
        return this;
    }
}

var cad = new Cat('Bars');
cad.dailyNorm(170);
cad.dailyNorm(900);
cad.dailyNorm();
cad.stroke().stroke().feed().stroke().feed().feed();