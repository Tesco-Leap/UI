function printNameES5(name) {
    return `Hi ${name}`;
}

const printNameES6 = name => {
    return `Hi ${name}`
}

const printNameES62 = name => `Hi ${name}`;

console.log(printNameES5('ES5'));
console.log(printNameES6('ES61'));
console.log(printNameES62('ES62'));