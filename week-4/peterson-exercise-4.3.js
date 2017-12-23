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
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"] ; // Array of 5 elements


// function that accepts two arguments, an index placeholder and a filterable value
function getVehicles(x, value)
{
    if (x == value)
        return value;
}



// output


console.log(" --Selected value-- ");
// output the results using the console.log() function
console.log (vehicles.filter(function (x){
            return getVehicles(x, "Motorcycle")})[0]);

