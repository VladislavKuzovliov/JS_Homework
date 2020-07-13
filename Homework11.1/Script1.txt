				//Исправлены методы и переменные класса на защищенные
				//Добавлена ссылка на изначальную функцию-конструктор
function Animal(name) {
    this._name = name;
    this._foodAmount = 50;
}

Animal.prototype._formatFoodAmount = function(){
    return this._foodAmount + 'гр.'
}


Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();
    else {
        if (amount > 500) {
            console.log ('Слишком много корма.');
        } else if (typeof amount !=null && amount !== '' && amount < 50) {
            console.log ('Слишком мало корма.');
        } else if (typeof amount != "number") {
            console.log ('Неверно введено количество корма.');
        } else if (amount <= 500 && amount >= 50 && (!isNaN(amount) && (+amount != 0 || amount == 0))) {
            this._foodAmount = amount;
        }

    }
}

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
}


function Cat() {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
    return this;
}
Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
}

var cad = new Cat('Bars');
cad.stroke();
cad.dailyNorm(170);
cad.dailyNorm(900);
cad.dailyNorm();
cad.stroke().stroke().feed().stroke().feed().feed();