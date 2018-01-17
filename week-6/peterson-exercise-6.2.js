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


try {
    var x = 0;
    var y = 1;

    var sum = y / x;

    if (sum == Infinity) throw "DivideByZeroException";

    console.log(sum);

} catch (err) {
    console.log("Catch clause: " + err);
} finally {
    console.log("Finally clause reached: End of program!");
}

// end program