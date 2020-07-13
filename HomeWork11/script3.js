function deepCompare(obj1, obj2) {
    if (obj1 === null || obj2 === null) {
        if (obj1 !== obj2) return false
    } else if ((typeof obj1) == 'object' && (typeof obj2) == 'object') {
        if (Array.isArray(obj1) && Array.isArray(obj2) && obj1.length == obj2.length) {
            for (var i = 0; i < obj1.length; i++) {
                if (!deepCompare(obj1[i], obj2[i])) {
                    return false
                }
            }
        } else if (Object.keys(obj1).length == Object.keys(obj2).length) {
            for (var key in obj1) {
                if (!deepCompare(obj1[key], obj2[key])) {
                    return false
                }
            }
        } else return false
    } else if (!((typeof obj1) == 'function' && (typeof obj2) == 'function' && String(obj1) == String(obj2)
        || (obj1 === obj2))) {
        return false;
    }
    return true;
}


var first = {
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

var second = {
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
console.log(Object.keys(first));
console.log(deepCompare(first, second));