// There are different ways to create new objects:

// Define and create a single object, using an object literal.
// Define and create a single object, with the keyword new.
// Define an object constructor, and then create objects of the constructed type.

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

var person2 = new Object();
person2.firstName = "Mike";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

console.log(person2)

var person3 = {firstName:"Mary", lastName:"Doe", age:50, eyeColor:"blue"}

var x = person3; // it is reference so x can change object
x.age = 10;

console.log(person3)


// Accessing JavaScript Properties
console.log(person3["firstName"]);
console.log(person3.firstName)

let fn = "firstName";
console.log(person3[fn]);

//Adding New Properties
person3.height = 170

console.log(person3)

/// Deleting Properties
delete person3.height

console.log(person3)



// Object Methods

var person4 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person4.fullName())

 var name = person4.fullName();
 console.log(name);

//  Adding a Method to an Object
 person4.getId = function() {return this.id;}

 console.log(person4.getId());

  