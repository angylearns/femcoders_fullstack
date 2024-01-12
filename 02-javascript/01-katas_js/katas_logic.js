// ESTAS KATAS SE LEEN POR TERMINAL || THESE KATAS ARE READ IN THE TERMINAL

// Enunciado: En JS, para cada kata diseñe una función tal que al llamarla por consola || Statement: In JavaScript, for each kata, design a function such that when calling it in the console.

// 1. Muestre un “¡Hola Mundo!” por consola. || Display a "Hello World!" in the console.
function sayHi() {
    console.log("¡Hola mundo!");
}

sayHi();


// 10. Lea tu nombre y devuelva un “¡Hola tuNombre!”. || Read your name and return a "Hello yourName!".
function sayHelloName() {
    let myName = "Angy";
    console.log("¡Hola, " + myName + "!");
}

sayHelloName();


// 11. Lea un número y devuelva el doble. || Read a number and return its double.
function doubleNum() {
    let theNumber = 9;
    console.log("The double of " + theNumber + " is " + theNumber * 2);
}

doubleNum();


// 100. Lea dos números y devuelva su suma. || Read two numbers and return their sum.
function sumNums() {
    let numOne = 2;
    let numTwo = 5;
    console.log("The sum of " + numOne + " and " + numTwo + " is " + (numOne + numTwo));
}

sumNums();


// 101. Lea un número y devuelva la mitad. || Read a number and return its half.
function halfNum() {
    let thisNumber = 20;
    console.log("The half of " + thisNumber + " is " + thisNumber / 2);
}

halfNum();


// 110. Lea dos números y devuelva el mayor. || Read two numbers and return the greater one.
function greaterOfTwo() {
    let numberA = 10;
    let numberB = 19;

    if (numberA > numberB) {
        console.log("The greater number is " + numberA);
    } else if (numberB > numberA) {
        console.log("The greater number is " + numberB);
    } else {
        console.log("The numbers are equal");
    }
}

greaterOfTwo();


// 111. Lea tres números y devuelva el mayor. || Read three numbers and return the greater one.
function greaterOfThree() {
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

    console.log("The greatest number is " + theGreatest);
}

greaterOfThree();

// 1000. Lea dos números e indique si son iguales. || Read two numbers and indicate if they are equal.
function areEqual() {
    let numberA = 69;
    let numberB = 69;

    if (numberA == numberB) {
        console.log("The numbers are equal");
    } else {
        console.log("The numbers are not equal");
    }
}

areEqual();

// 1001. Lea dos nombres e indique si son iguales. || Read two names and indicate if they are equal.


// 1010.  Lea dos números y devuelva “Verdadero” si los dos son positivos o los dos son negativos. En caso contrario, que devuelva “Falso”. || Read two numbers and return "True" if both are positive or both are negative. Otherwise, return "False".


// 1011 Lea dos números y devuelva “Verdadero” si uno es negativo y el otro positivo. En caso contrario, que devuelva “Falso”. || Read two numbers and return "True" if one is negative and the other is positive. Otherwise, return "False".


// 1100. Lea 10 números y devuelva el mayor. || Read 10 numbers and return the greater one.


// 1101. Lea tu nombre y devuelva “¡Hola tuNombre! Tu nombre tiene n caracteres.” Donde n sea la cantidad de caracteres de tuNombre. || Read your name and return "Hello yourName! Your name has n characters."


// 1110. Lea 10 nombres y los devuelva ordenados alfabéticamente. || Read 10 names and return them sorted alphabetically. 


// 1111. Lea 10 números y devuelva los negativos. || Read 10 numbers and return the negatives.


// 10000. Lea una cantidad arbitraria de nombres y devuelva cuántos son. || Read an arbitrary amount of names and return how many are there.


// 10001. Lea una cantidad arbitraria de nombres y devuelva la suma de todos sus caracteres. || Read an arbitrary amount of names and return the sum of their characters.


// 10010. Lea 10 números por consola y devuelva el tercero mayor. || Read 10 numbers in the console and return the third greatest one.

