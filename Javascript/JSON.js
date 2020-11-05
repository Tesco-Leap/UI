const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
console.log(obj["count"]);

console.log(obj.result);

function demo(key, value) {
    return typeof value === 'number'
    ? value * 2
    : value;
}

const obj2 = JSON.parse('{"p": 5}', (key, value) =>
  typeof value === 'number'
    ? value * 2
    : value 
);

const obj3 = JSON.parse('{"p": 5}', demo);

console.log(obj3);

// JSON.parse() does not allow single quotes


// The JSON.stringify() method converts a JavaScript object or value to a JSON string,
console.log(JSON.stringify({ x: 5, y: 6 }));

function replacer(key, value) {
    if (typeof value === 'string') {
      return undefined;
    }
    return value;
  }
  
var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
console.log(JSON.stringify(foo, replacer));
console.log(JSON.stringify(foo, ['foundation', 'month']));  


// JSON Syntax Rules
// JSON syntax is derived from JavaScript object notation syntax:

// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

// 1. In JSON, keys must be strings, written with double quotes:
// { "name":"John" }

// Javascript { name:"John" }

// JSON Values
// In JSON, values must be one of the following data types:

// a string                     { "name":"John" }
// a number                     { "age":30 }
// an object (JSON object)      {"employee":{ "name":"John", "age":30, "city":"New York" }}
// an array                     {"employees":[ "John", "Anna", "Peter" ]}
// a boolean                    { "sale":true }
// null                         { "middlename":null }


// In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:

// a function
// a date
// undefined

// Date objects are not allowed in JSON.
// If you need to include a date, write it as a string.
// You can convert it back into a date object later:


var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj4 = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});


// Looping an object
myObj = { "name":"John", "age":30, "car":null };
for (x in myObj) {
  console.log(x, myObj[x]);
}



// Json arryas
var myObj2 = {
    "name":"John",
    "age":30,
    "cars":[ "Ford", "BMW", "Fiat" ]
    }

for (i in myObj2.cars) {
    console.log(myObj2.cars[i]);
}