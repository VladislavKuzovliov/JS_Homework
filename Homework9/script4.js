function Animal(name) {
    self = this;
    this.name = name;
    var foodAmount = 50;
    function formatFoodAmount() {
        return foodAmount + 'гр.'
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();
        else {
            if (amount <= 500 && amount >= 50 && (!isNaN(amount) && (+amount != 0 || amount == 0))) {
                foodAmount = amount;
            }
            else {
                return ('Мало корма/Много корма/Неверные данные!')
            }
        }
    }
    this.animalFeed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    }

}

function Cat() {
    Animal.apply(this, arguments);

    var feed = this.animalFeed;
    this.animalFeed = function () {
        feed();
        console.log('Кот доволен ^^');
    }

}

var cad = new Cat('Bars');
cad.dailyNorm(170);
cad.animalFeed();