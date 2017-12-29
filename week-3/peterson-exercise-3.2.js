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
function misMatch(a,b) {  //calls the mismatch functions a and b
    if (a > b) {  
        return true;  //if a is greater than b, return true
        console.log(misMatch());
        } else {
        return false;  //else if, return false
        console.log(match());
        }
    
}

function match(a,b) {  //calls the match functions a and b
    if (a === b) {
        return true;  //if a is equal to b, return true
        console.log(match());
        } else {
        return false;  //else if, return false
        console.log(misMatch());
        }
}

// six (6) test variables
var t = "Truck";
var c = "Car";
var b = "Bike";
var i = "Bike";
var f = "Four";
var h = "Three";

function matchVeh(t,c) {
    console.log("");
    console.log("// output from the if...else blocks");
if (t === c) {
    return true;
    console.log(match(t,c));
    } else {
    return "Truck and Car do not match!";
    console.log(misMatch(t,c));
}
}

// Output from the match() function... 
console.log(misMatch());
console.log(match());
console.log(matchVeh(t,c));
 