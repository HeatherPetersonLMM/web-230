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

// function
    function getFruit(){
        fruits = ["Apple", "Banana", "Orange", "Pear", "Pineapple" ] // Array of 5 elements
        for(var i = 0; i < fruits.length; i++) {   // Created loop for listing
          console.log(fruits[i]);
        }
    }

// Output from the getFruit() function
getFruit();