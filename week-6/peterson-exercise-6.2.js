var header = require('../header.js');

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   17 January 2018
; Modified By: Heather Peterson
; Description: Exercise 6.2 - Exception Handling
;===========================================
/*

/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

// start program
var n = ["John","Kim","Helen","Frank","Beth","Heather"]; //array of names

try {  //runs from top of block to the bottom

    var sum = parseInt(n);  //run the variable n code

    if (isNaN(sum)) throw "Hello John!"; //catch clause output

}   catch (err) { //block executed if, and only if, the try block throws exception
    console.log("Catch clause: " + err); 

}   finally {  //block contains statements that are always executed
    console.log("Finally clause reached: End of program!"); 
}

// end program