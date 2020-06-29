function Animal(name) {
    self = this;
    this.name = name;
    var foodAmount = 50;
    var formatFoodAmount = function() {
        return foodAmount + 'гр.'
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length){
            console.log(formatFoodAmount());
            return this;
        }
        else {
            if (amount <= 500 && amount >= 50 && (!isNaN(amount) && (+amount != 0 || amount == 0))) {
                foodAmount = amount;
                return this;
            }
            else {
                console.log('Мало корма/Много корма/Неверные данные!');
                return this;
            }
        }
    }
    this.animalFeed = function () {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
    }

}

function Cat() {
    Animal.apply(this, arguments);

    var feed = this.animalFeed;
    this.animalFeed = function () {
        feed();
        console.log('Кот доволен ^y^');
        return this;
    }
    this.stroke = function () {
        console.log('Гладим кота...');
        return this;
    }
}

var cad = new Cat('Bars');
cad.dailyNorm(170);
cad.stroke().stroke().animalFeed().dailyNorm(565).stroke().animalFeed().dailyNorm().dailyNorm(144).animalFeed();