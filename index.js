// OLD JAVASCRIPT
//1. variables
var names = ['Ed', 'John', 'Mike'];
var counter = 10;
var counter = 5;
console.log(counter);

//2. scoping(bracket scoped)
var counter = 5;
function sayName() {
    var name = 'Ed';
    console.log(name);
}
console.log(name);
sayName();

//3. string concatenation(backticks)
var name = "Ed";
console.log("Hello my name is " + name);

//4. object literals
function getBook(title, author) {
    return {
        title: title,
        author: author
    };
}
var book = getBook("Harry Potter", "JK");
console.log(book);

// 5. object deconstruction
var user = {
    name: "Ed",
    age: 25
};
var myName = user.name;
console.log(myName);

// 6. arrow functions
function sayNmae() {
    console.log("Hello I am Ed");
}
var sayAge = function () {
    console.log("My age is, well i dont wanna tell you");
};
sayName();
sayAge();


// 7. keyword this
var user = {
    name = "Ed",
    age = 25,
    sayName: function () {
        console.log("My name is " + this.name);
        var that = this;
        var fullName = function () {
            console.log("My name is " + that.name + " and my age is " + that.age);
        };
        fullName();
    }
};
user.sayname();

// 8. default parameters
function multiply() {
    var a = x || 1;
    var b = y || 1;
    console.log(a * b);
}
multiply(10, 20);

// 9. new array functions 

// 10. constructor function and classes
function Person() {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
}
Person.prototype.sayName = function () {
    console.log("My name is " + this.name);
}
var Ed = new Person('Ed', 25, "notnice");
console.log(Ed);
Ed.sayName();

function Ed(occupation, hobbys, name, age, hairColor) {
    Person.call(this, name, age, hairColor);
    this.occupation = occupation;
    this.hobbys = hobbys;
}

Ed.prototype = Object.create(Person.prototype);

const person = new Ed("Dev", "Dancing", "Edwin", 25, "notNice");
console.log(person);

// 11. promises(callback, asynchronous)
console.log("start");

function getData(data, callback) {
    setTimeout(() => {
        console.log("reading from the database");
        callback({ data: data });
    }, 2000);
}

getData(5, function () {
    console.log(data);
});

console.log("finish");

// ES6 ---------------------------------------------------------------------------------------------------
//1. variables
const todoList = ['Milk', "Cow"];
todolist = ["MilK"];

let counter = 10;
counter = 5;
let counter = 5;

//2. scoping(bracket scoped)
const list = [1, 2, 3, 4, 5];

for (let i = 0; i < list.length; i++) { //var
    console.log(i);
}
console.log(i);

//3. string concatenation(backticks)
const name = 'Ed';
const age = '25';
console.log(`Hello my it's "hello" name is ${name} and my age is ${age}`);

//4. object literals
function getBook(title, author) {
    return {
        title,
        author
    };
}
var book = getBook("Harry Potter", "JK");
console.log(book);

// 5. object deconstruction
const list = {
    name: "Shopping List",
    items: ["Milk", "Cow"]
};
const { name, items } = list;
console.log(name, items);

// 6. arrow functions

// const sayLocation = function () {
const sayLoaction = () => {
    console.log("my loaction is unknown");
};
sayLoaction();

const sayLoaction = (location) => { // (location, name ) doesn't work
    console.log(`my location is ${location}`);
};
sayLoaction('paris');

// 7. keyword this
const user = {
    name: "Ed",
    age: 25,
    sayName: function () {
        console.log(`My name is ${this.name}`);
        const fullName = () => {
            console.log(`My name is ${this.name} and my age is ${this.age}`);
        };
        fullName();
    }
};
user.sayName();

button.addEventListener('click', function () {
    var addFade = () => {
        this.style.display = "none";
    };
});

// 8. default parameters
const add = (c = 1, d = 1) => {
    console.log(c + d);
}
add();

// 9. new array functions
const shoppingList = ['Milk', 'Cow', 'Eggs', 'Bananas', 'Choco'];

// foreach
shoppingList.forEach((product, index) => {
    console.log(`The index is ${index} and the product is ${product}`);
});

// map
const newList = shoppingList.map(item => {
    return item + "new";
});
console.log(newList);

//filter
const filterList = shoppingList.filter(item => {
    return item !== "Eggs";
});
console.log(filterList);

// 10. constructor function and classes
class shoppingList {
    constructor(items, nr) {
        this.item = items;
        this.nr = nr;
    }
    sayList() {
        console.log(this.items);
    }
}
const myList = new shoppingList(["Milk", "Choco", "Redbull"], 3);
myList.sayList();

class Product extends ShoppingList {
    constructor(items, nr, amount, cost) {
        super(items, nr);
        this.amount = amount;
        this.cost = cost;
    }
}
const prouduct = new Product(["Redbull, Chocolate, Candy"], 3, 2, 20);
console.log(product);
product.sayList();

// 11. promises(callback, asynchronous)
const prom = new Promise((resolve, reject) => {
    // Here is asyn code
    setTimeout(() => {
        // resolve({ user: "Ed", pass: "dafdsafda" });
        reject(new Error("something went wrong"));
    }, 2000);
});
prom
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));