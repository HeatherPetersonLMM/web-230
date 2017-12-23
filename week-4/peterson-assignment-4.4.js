var header = require('../header.js');

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   22 December 2017
; Modified By: Heather Peterson
; Description: Assignment 4.4 - Predicates with USA States
;===========================================
*/ 




/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"] ;  // array elements of 5 states
var x = states[2];

// function
function usaStates(x) {
    return x > 6;
}
        for (var i = 0; i < states.length; i++){   // Created loop for listing
            if (!states[i]) continue;  // tells loop to continue if not equal to returned elements
            console.log(states[i]);
}

            console.log("");  //new line

        var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"] ;  //array elements of 5 states
        states.sort();  //sorts elements alphabetically
        for (var i = 0; i < states.length; i++){   // Created loop for listing
            if (!states[i]) continue;  // tells loop to continue if not equal to returned elements
            console.log(states[i]);
}
            console.log("");  //new line

        var j = states.filter(usaStates); // filter used to log var x





// Output
console.log(x);
return usaStates(x,j);



// end program
