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
function match(A,B) {
    if (A === B) {
    return true;
    }
    else {
    return false;
    }
}

function logMismatch(Truck,Car) {
    if (Truck !== Truck) {
    return 'This is a match.';
    }
    else {
    return 'Truck and Car do not match!';
    }
}

function logMatch(Bike,Bike) {
    if (Bike === Bike) {
    return 'Bike and Bike do match!';
    }
    else {
    return 'This is not a match.';
    }
}

// six (6) test variables 



// Output from the match() function... 
console.log(match("A", "B"));
console.log(match(2, 2)); 
console.log(logMismatch("Truck", "Car"));
console.log(logMatch("Bike","Bike"));

// Conditional "if...else" statements. Include checks for all six (6) test variables 




// end program 