/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   25 June 2017
; Modified By: Heather Peterson
; Description: Displays a formatted header
;===========================================
*/ 

/*
    This function accepts four parameters: 
        f = students first name
        l = students last name 
        a = assignment number
    and displays the results.
*/

module.exports = {
    display: function(f, l, a) {
        var msg = "\n" + f + " " + l + "\n" 
            + a + "\nDate: " + new Date().toLocaleDateString(); 
        return msg; 
    }
};

var header = require('../header.js');

console.log("\nTesting the header.js file's output..."); 

console.log(header.display("Heather", "Peterson", "Exercise 2.2")); 
console.log("\n");
