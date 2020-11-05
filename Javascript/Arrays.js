function isPositive(element, index, array) {
    return element>0;
}

function oddNumber(element, index, array) {
    return element%2===1;
}

function multiplyBy2(element, index, array) {
    return element*2;
}

let alphas;
alphas = [1,2,3,4];
console.log(alphas);

for(let i=0;i<alphas.length;i++) {
    console.log(alphas[i]*alphas[i]);
}

alphas = alphas.concat(5,6);

console.log(alphas);

console.log(alphas.every(isPositive));

console.log(alphas.filter(oddNumber));

alphas.forEach(function(element, index) {
    console.log(element*2);
}) 

console.log(alphas.indexOf(3));

console.log(alphas.join())

alphas.pop();

console.log(alphas);

alphas.push(7);

console.log(alphas);