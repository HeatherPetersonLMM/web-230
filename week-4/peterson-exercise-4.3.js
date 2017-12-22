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
    var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"] ; // Array of 5 elements
    for (var i = 0; i < vehicles.length; i++){   // Created loop for listing
        if (!vehicles[i]) continue;  // tells loop to continue if not equal to returned elements
        console.log(vehicles[i]);
    }
        console.log("");  //new line

    var m = vehicles[2]; {  //returns the third element in array elements
        console.log(m);  
    }

        console.log("");   //new line

    var b = vehicles[4]; {  //returns the fifth element in array elements
        console.log(b);
    }

    }

    
    // Output
    return (getValue());
    
    
    
    // end program