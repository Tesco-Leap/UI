console.log(Number.isInteger(123));

console.log(Number.isInteger(123.5));

console.log(Number.isInteger([1, 2, 3]));

// isNaN() -  illegal number (Not-a-Number).
console.log(Number.isNaN(0/0));

console.log(Number.isNaN(NaN));

console.log(Number.isNaN(undefined));

console.log(Number.isNaN({prop: 'value'}));

// tests if a value passed is a finite number or not.
console.log(Number.isFinite(10));

console.log(Number.isFinite(Number.MAX_VALUE));

console.log(Number.isFinite(null));

console.log(Number.isFinite([]));

// safe integers are all the integers from -(2^53 – 1) inclusive to 2^53 – 1 inclusive
console.log(Number.isSafeInteger(5));

console.log(Number.isSafeInteger('19'));

console.log(Number.isSafeInteger(Math.pow(2, 53)));

console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));

// Number.parseInt(string, radix)
console.log(Number.parseInt('-3'));

console.log(Number.parseInt('100', 2));

console.log(Number.parseInt('test'));

console.log(Number.parseFloat('42.1'));

console.log(isNaN('vinod'));
console.log(Number.isNaN('vinod'));  //As vinod is not a number so it won't get into isNan method and get true before that.

// What you might need is a method that returns true only if the NaN value is passed. That’s why ECMAScript 6 has introduced the Number.isNaN() method.
console.log(isNaN(undefined));
console.log(Number.isNaN(undefined));
