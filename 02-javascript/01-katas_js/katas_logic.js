// ESTAS KATAS SE LEEN POR TERMINAL || THESE KATAS ARE READ IN THE TERMINAL

// Enunciado: En JS, para cada kata diseñe una función tal que al llamarla por consola || Statement: In JavaScript, for each kata, design a function such that when calling it in the console.

// 1. Muestre un “¡Hola Mundo!” por consola. || Display a "Hello World!" in the console.
function sayHi() {
    return "¡Hola, mundo!";
}

console.log(sayHi());


// 10. Lea tu nombre y devuelva un “¡Hola tuNombre!”. || Read your name and return a "Hello yourName!".
function sayHelloName() {
    let name = "Angy";
    return "¡Hola, " + name + "!";
}

console.log(sayHelloName());


// 11. Lea un número y devuelva el doble. || Read a number and return its double.
function doubleNum() {
    let theNumber = 9;
    return "The double of " + theNumber + " is " + theNumber * 2 + ".";
}

console.log(doubleNum());


// 100. Lea dos números y devuelva su suma. || Read two numbers and return their sum.
function sumNums() {
    let numberA = 2;
    let numberB = 5;
    return "The sum of " + numberA + " and " + numberB + " is " + (numberA + numberB) + ".";
}

console.log(sumNums());


// 101. Lea un número y devuelva la mitad. || Read a number and return its half.
function getHalfNum() {
    let thisNumber = 20;
    return "The half of " + thisNumber + " is " + thisNumber / 2 + ".";
}

console.log(getHalfNum());


// 110. Lea dos números y devuelva el mayor. || Read two numbers and return the greater one.
function findGreatestOfTwo() {
    let numberA = 10;
    let numberB = 19;

    if (numberA > numberB) {
        return "The greater number is " + numberA + ".";
    } else if (numberB > numberA) {
        return "The greater number is " + numberB + ".";
    } else {
        return "The numbers are equal.";
    }
}

console.log(findGreatestOfTwo());

// 111. Lea tres números y devuelva el mayor. || Read three numbers and return the greater one.
function findGreatestOfThree() {
    let theGreatest;
    let numberA = 194;
    let numberB = 190;
    let numberC = 20033;

    if (numberA > numberB && numberA > numberC) {
        theGreatest = numberA;
    } else if (numberB > numberA && numberB > numberC) {
        theGreatest = numberB;
    } else {
        theGreatest = numberC;
    }

    return "The greatest number is " + theGreatest + ".";
}

console.log(findGreatestOfThree());

// 1000. Lea dos números e indique si son iguales. || Read two numbers and indicate if they are equal.
function areEqualNums() {
    let numberA = 69;
    let numberB = 69;

    if (numberA == numberB) {
        return "The numbers are equal";
    } else {
        return "The numbers are not equal";
    }
}

console.log(areEqualNums());

// 1001. Lea dos nombres e indique si son iguales. || Read two names and indicate if they are equal.
function areEqualNames() {
    let nameA = "Angy";
    let nameB = "Angy";

    if (nameA === nameB) {
        return "The names are equal.";
    } else {
        return "The names are not equal.";
    }
}

console.log(areEqualNames());

// 1010.  Lea dos números y devuelva “Verdadero” si los dos son positivos o los dos son negativos. En caso contrario, que devuelva “Falso”. || Read two numbers and return "True" if both are positive or both are negative. Otherwise, return "False".
function areBothNegativeAndPositive() {
    let numberA = -20349;
    let numberB = -20349;

    return numberA > 0 && numberB > 0 || numberA < 0 && numberB < 0 ? true : false;
}

console.log(areBothNegativeAndPositive());


// 1011. Lea dos números y devuelva “Verdadero” si uno es negativo y el otro positivo. En caso contrario, que devuelva “Falso”. || Read two numbers and return "True" if one is negative and the other is positive. Otherwise, return "False".
function areOneNegativeAndOnePositive() {
    let numberA = 0;
    let numberB = 0;

    return numberA > 0 && numberB < 0 || numberA < 0 && numberB > 0 ? true : false;
}

console.log(areOneNegativeAndOnePositive());


// 1100. Lea 10 números y devuelva el mayor. || Read 10 numbers and return the greater one.
function findGreatestOfTen() {
    let theGreatest = 0;
    let numbers = [-102, 1009, 3, 270, 25, 76, 27, 98, 19, 130];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > theGreatest) {
            theGreatest = numbers[i];
        }
    }
    return "The greatest number is " + theGreatest + ".";
}

console.log(findGreatestOfTen());


// 1101. Lea tu nombre y devuelva “¡Hola tuNombre! Tu nombre tiene n caracteres.” Donde n sea la cantidad de caracteres de tuNombre. || Read your name and return "Hello yourName! Your name has n characters."
function returnNameNChar() {
    let name = "Hermenegilda";
    return `Hello ${name}! Your name has ${name.length} characcters.`;
}

console.log(returnNameNChar());

// 1110. Lea 10 nombres y los devuelva ordenados alfabéticamente. || Read 10 names and return them sorted alphabetically. 
function orderNames() {
    let names = ["Wenceslao", "Luisa", "Margarita", "Manuela", "Carolina", "Natalicio", "Natividad", "Ángela", "Timotea"];
    return `The names ${names.join(", ")} in order are: ${names.sort().join(", ")}`;
}

console.log(orderNames());


// 1111. Lea 10 números y devuelva los negativos. || Read 10 numbers and return the negatives.
function findNegativeNums() {
    let numbers = [91, 48, 10948, 34, -98, -3, 5, -1677, 82, 10];
    let negatives = [];
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] < 0) {
            negatives.push(numbers[i]);
        }
    }
    return `Out of these numbers (${numbers.join(", ")}), the negative ones are ${negatives.join(", ")}.`;
}

console.log(findNegativeNums());


// 10000. Lea una cantidad arbitraria de nombres y devuelva cuántos son. || Read an arbitrary amount of names and return how many are there.
function findQuantityOfNames() {
    let names = ["Camila", "Slash", "Paloma", "Juana"];
    return `These names (${names.join(", ")}) are ${names.length} names.`;
}

console.log(findQuantityOfNames());


// 10001. Lea una cantidad arbitraria de nombres y devuelva la suma de todos sus caracteres. || Read an arbitrary amount of names and return the sum of their characters.
function sumCharacters() {
    let names = ["Camila", "Slash", "Paloma", "Juana"];
    let sumChar = 0;
 
    for (let i = 0; i < names.length; i++) {
        sumChar += names[i].length;
    }
    
    return `The number of characters of the names ${names.join(", ")} is ${sumChar}`;
}
 
console.log(sumCharacters());

// 10010. Lea 10 números por consola y devuelva el tercero mayor. || Read 10 numbers in the console and return the third greatest one.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

const askNumbers = (n) => {
 if (n > 0) {
    rl.question('Please, enter a number: ', (numero) => {
        numbers.push(parseInt(numero));
        askNumbers(n - 1);
    });
    } else {
        rl.close();
        let sortedNumbers = numbers.sort((a, b) => a - b);
        let thirdGreatest = sortedNumbers[numbers.length-3];
        
        // Couldn't use return due to the asynchronous nature of rl.question() - I have to learn more about it
        console.log(`The third greatest number of ${sortedNumbers.join(", ")} is ${thirdGreatest}`);
    }
};

askNumbers(10); 