
/*const o = {}
o.title ='RRR';

console.log(o.hasOwnProperty('title')); // вернёт true*/

/*
const o = new Object();
o.prop = "существует";
console.log(o.hasOwnProperty('prop'));// вернёт true
console.log(o.hasOwnProperty('toString'));// вернёт false
console.log(o.hasOwnProperty('hasOwnProperty'));// вернёт false
console.log(o)*/

/*
var buz = {
    fog: "stack",
};

for (var name in buz) {
    if (buz.hasOwnProperty(name)) {
        alert("это точно туман (" + name + "). Значение: " + buz[name]);
    } else {
        alert(name); // toString или что-то ещё
    }
}
*/

// Создаем объект, который будет прототипом
var proto = {
    fog: "stack",
    toString: function() {
        return "Это прототип";
    }
};

// Создаем объект, который наследует свойства от proto
var buz = Object.create(proto);
buz.ownProp = "Это собственное свойство";

for (var name in buz) {
    if (buz.hasOwnProperty(name)) {
        alert("это точно туман (" + name + "). Значение: " + buz[name]);
    } else {
        alert("Унаследованное свойство: " + name + ". Значение: " + buz[name]);
    }
}