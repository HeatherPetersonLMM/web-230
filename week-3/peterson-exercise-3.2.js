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
console.log("// output from the match() function");
function misMatch(a,b) {
    if (a > b) {
        return true;
        console.log(misMatch());
        } else {
        return false;
        console.log(match());
        }
    
}

function match(a,b) {
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
 