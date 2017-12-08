var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...
Heather.Peterson = "Hello Heather Peterson!";


// function 
function Heather() {
    return Heather.Peterson
}

// output 
console.log(Heather()); 
console.log(header.display("Heather", "Peterson", "Exercise 2.3")); 
// end program 