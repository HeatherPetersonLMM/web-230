var header = require('../header.js'); 

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:  29  December 2017
; Modified By: Heather Peterson
; Description: Assignmetn 3.4 - Loops
;===========================================
*/ 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/ 

// test variable
console.log("-- Displaying for loop --");
var i = 6;  // test variable 6
for (i = 0; i < 10; i++) {  //for loop that runs 10 numbers
    if (i === 6) {   //if statement for test variable to equal 6
        console.log("6 does match " + i + "!"); //console log a match
       } else {
        console.log("6 does not match " + i + "!"); //no match
}
}
console.log("");
console.log("-- Displaying while loop --");
var i = 0;  // test variable begins at 0
while (i < 10) { //while statement for test variables less than 10
    if (i === 6) {   //if statement for test variable to equal 6
        console.log("6 does match " + i + "!");  // console log a match
       } else {
        console.log("6 does not match " + i + "!"); // no match
       }
       i++; //variable range (important!)
}