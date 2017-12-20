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


// function
function getValue(arr, val) {
    var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"]  // Array of 5 elements
    for(var i = 0; i < vehicles.length; i++){   // Created loop for listing
        console.log(vehicles[i]);
    }
    }
    
    
    // Output
    console.log(getValue());
    
    
    // end program