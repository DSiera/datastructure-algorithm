// Classes are a template for creating objects. They encapsulate data and behavior.
// Classes are defined using the class keyword.
// Classes are instantiated with the new keyword.
// Classes are used to create objects.

// When we talk about Object, we talk about the following:
// 1. Reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// 2. Context
const object4 = {
    a: function() {
        console.log(this);
    }
}
object4.a(); 

// 3. Instantiation with ES6class
class Player {
    constructor(name, type) {
        console.log('player', this); // Wizard object
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}
class Wizard extends Player {
    constructor(name, type) {
        console.log('wizard', this); // Wizard object
        super(name, type);
    }
    play() {
        console.log(`I'm a ${this.type}`);
    }
}
const wizard1 = new Wizard('Shelly', 'Healer'); 

// Classical Inheritance
// 1. Constructor function
function Player(name, type) {
    this.name = name;
    this.type = type;
}
Player.prototype.introduce = function() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
}   

const wizard2 = new Player('Shelly', 'Healer');