var header = require('../header.js'); 

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
function Heather() {
    return Heather.Peterson
}


function match() {
    var A = 2;
    var B = 3;
    if(A == B) {
        return true;
    } else {
        return false;
    }
}

function logMismatch() {
    var C = 2;
    var D = 3;
    var msg = '';

    if(C != D) {
        return msg = 'This is not a match.';
    } else {
        return msg = 'This is a match.';
    }
}

function logMatch() {
    var E = 2;
    var F = 2;
    var msg2 = '';

    if(E == F) {
        return msg2 = 'This is a match.';
    } else {
        return msg2 = 'This is not a match.';
    }
}

// Output from the match() function...
console.log(Heather()); 
console.log(header);
console.log("\n");
//console.log(match());

console.log(match("A","B"));
console.log(logMismatch("msg"));
console.log(logMatch("msg2"));
 

// Conditional "if...else" statements. Include checks for all six (6) test variables 


// end program 
