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

function logMismatch2(Four,Three) {
    if (Four === Three) {
        return 'This is a match.';
        }
        else {
        return 'Four and Three do not match!';
        }
    }


// six (6) test variables 
var msg ='';
var quantity;
var code;
var price;
var total;
var name;
quantity = 300;
code = 1001;
price = 20.99;
total = quantity * price;
name = code = 'Hammer';


// Output from the match() function... 
console.log(match("A", "B"));
console.log(match(2, 2)); 
console.log(logMismatch("Truck", "Car"));
console.log(logMatch("Bike","Bike"));
console.log(logMismatch2("Four","Three"));

// Conditional "if...else" statements. Include checks for all six (6) test variables 
if (msg == quantity) {
    console.log(quantity);
} else if (msg !== code);{
    console.log(code);
}
if (msg == price) {
    console.log(price);
} else if (msg == total);{
    console.log(total);
}
if (msg == name) {
    console.log(name,code);
} else if (msg == code);{
    console.log(code);
}



// end program 