var header = require('../header.js'); 

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   19 December 2017
; Modified By: Heather Peterson
; Description: Exercise 3.2 - Arrays
;===========================================
*/ 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

// functions 

function misMatch(c,d) {
    var c = 1;
    var d = 2;
    if (c === d) {
        return true;
        console.log(match());
        } else {
        return false;
        console.log(misMatch());
        }
    
}

function match(a,b) {
    var a = 1;
    var b = 1;
    if (a === b) {
        return true;
        console.log(match());
        } else {
        return false;
        console.log(misMatch());
        }
}

// Output from the match() function... 
console.log(misMatch());
console.log(match());
 