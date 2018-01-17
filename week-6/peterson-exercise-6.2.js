var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

// start program


try {  //runs from top of block to the bottom
    var n = ["John","Kim","Helen","Frank","Beth","Heather"]; //array of names
    var sum = 0;  //start at 0

    if (sum == 0) throw "Hello John!"; 

}   catch (err) { //block executed if, and only if, the try block throws exception
    console.log("Catch clause: " + err); 

}   finally {  //block contains statements that are always executed
    console.log("Finally clause reached: End of program!"); 
}

// end program