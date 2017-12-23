var header = require('../header.js'); 

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   19 December 2017
; Modified By: Heather Peterson
; Description: Exercise 4.3 - Filtering Arrays
;===========================================
*/ 

/*
 Expected output:
 FirstName LastName
 Exercise 4.3
 Today's Date
 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus
 -- SELECTED VALUE --
 Motorcycle
 -- SELECTED VALUE --
 Bus
 */

// start program
console.log(" --Displaying Array Items-- ");
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"] ; // Array of 5 elements
for(var i = 0; i < vehicles.length; i++) {   // Created loop for listing
    console.log(vehicles[i]);
}

// function

function getVehicles(x, value, y) { //calls the function objects x,y

    if (x == value)
        return value;
    else (y == value)
        return value;
}



// output the results using the console.log() function x value
console.log(" --Selected value-- ");
console.log (vehicles.filter(function (x){
    return getVehicles(x, "Motorcycle")})[2]);
// output the results using the console.log() function y value
console.log(" --Selected value-- ");
console.log (vehicles.filter(function (y){
    return getVehicles(y, "Bus")})[4]);
