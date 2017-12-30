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

function match(a,b) {  //calls the match functions a and b
    if (a === b) {  //if a is only equal to b
        return "True";  //ouput will display true
        } else {
        return "False"; //output will display false
        }

function logMismatch(a,b) {  //calls the logMismatch functions a and b
    if (a !== b) {   //if a is not equal to b
        console.log("They do not match!");  // console log false
        } else {
        console.log("They match!")  //else if, console log true
        }
    }

function logMatch(a,a) {  //calls the logMatch functions a and b
    if (a === a) {   //if a is equal to a
         console.log("True");  // console log true
        } else {
        console.log("False")  //else if, console log false
        }
    }
}

// six (6) test variables
var t = "Truck";
var c = "Car";
var b = "Bike";
var i = "Bike";
var f = "Four";
var h = "Three";

function matchVeh() {
    console.log("");
    console.log("// output from the if...else blocks");
if (t === c) {
    return true;  // console log true
       } else {
    console.log("Truck and Car do not match!");  //else if, console log false
       }

if (b === i) {
    console.log("Bike and Bike do match!");  // console log true
       } else {
    return false;  //else if, console log false
       }

if (f === h) {
    return true;  // console log true
       } else {
    console.log("Four and Three do not match!");  //else if, console log false
       }
}
    

// Output from the match() function... 
console.log(match("a","b"));
console.log(match(2,2));
matchVeh();


// Conditional "if...else" statements..
