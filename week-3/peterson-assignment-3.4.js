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
var i;
for (i = 1; i < 10; i++) {
    console.log("The number is " + i);
    //console.log(i);
}