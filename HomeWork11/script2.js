function deepClone(object) {

    var objectClone = {};
    var array = [];
    if (Array.isArray(object)) {
        for (var i = 0; i < object.length; i++) {
            array[i] = deepClone(object[i]);
        }
        return array;
    } else if (typeof object == "object") {

        for (var key in object) {
            objectClone[key] = deepClone(object[key]);
        }
        return objectClone;
    } else {
        return object;
    }
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);