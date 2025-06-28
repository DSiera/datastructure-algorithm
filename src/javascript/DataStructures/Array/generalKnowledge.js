//[] === [] // false because they are different objects in memory
const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };

object1 === object2 // true because they are the same object in memory
object1 === object3 // false because they are different objects in memory

// context vs scope

// context tells us where we are within the object
// scope tells us where we are within the code

// ----------------------------------------------
