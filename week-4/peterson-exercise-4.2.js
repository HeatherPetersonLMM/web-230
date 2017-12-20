var header = require('../header.js'); 
/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   19 December 2017
; Modified By: Heather Peterson
; Description: Exercise 4.2 - Arrays
;===========================================
*/ 

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program

var fruits = ["Apple", "Banana", "Orange", "Mango", "Pear"].toString();
var i = fruits; // calls all the fruit

// function
function getFruits() {
    for (var fruits = 0; fruits < fruits.length; fruits++) { // creates loop
        console.log(fruits[i]);
    }

}

// Output from the getFruit() function
console.log(fruits);



// end program