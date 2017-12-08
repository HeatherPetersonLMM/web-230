/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   25 June 2017
; Modified By: Heather Peterson
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Heather";
var myLastName = "Peterson";
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if (dd<10) {
  dd = '0' + dd
}

if (mm<10) {
  mm = '0' + mm
}

today = mm + '-' + dd + '-' + yyyy
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + today;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line


var firstName1 = "First Name: Bear";
var firstName2 = "First Name: Lily";
var firstName3 = "First Name: Russ";
var firstName4 = "First Name: Lucy";
var firstName5 = "First Name: Bob";

var lastName1 = "Last Name: Jacobs";
var lastName2 = "Last Name: McMiller";
var lastName3 = "Last Name: Peters";
var lastName4 = "Last Name: Madison";
var lastName5 = "Last Name: Johnson";

var Address1 = "Address: 1313 Penn Hill Street Hopkins, MN";
var Address2 = "Address: 342 Smith Way Beaver, PA";
var Address3 = "Address: 4817 Jacksonville Avenue Orlando, FL";
var Address4 = "Address: 99 Perry Lane Queens, NY";
var Address5 = "Address: 2630 Riverview Street Las Vegas, NV";

var payRate1 = 20.00;
var finalPay1 = 'Pay Rate: $' + payRate1.toPrecision(3) ;
var payRate2 = 22.50;
var finalPay2 = 'Pay Rate: $' + payRate2.toPrecision(3) ;
var payRate3 = 27.00;
var finalPay3 = 'Pay Rate: $' + payRate3.toPrecision(3) ;
var payRate4 = 23.00;
var finalPay4 = 'Pay Rate: $' + payRate4.toPrecision(3) ;
var payRate5 = 25.50;
var finalPay5 = 'Pay Rate: $' + payRate5.toPrecision(3) ;

var hireDate1 = 'Hire Date: ' + ("6/09/2017");
var hireDate2 = 'Hire Date: ' + ("3/16/2017");
var hireDate3 = 'Hire Date: ' + ("8/11/2000");
var hireDate4 = 'Hire Date: ' + ("7/01/2017");
var hireDate5 = 'Hire Date: ' + ("11/20/2016");

var empHeader1 = "\n" + firstName1 + "\n" + lastName1 + "\n"
+ Address1 + "\n" + finalPay1 + "\n" + hireDate1;

var empHeader2 = "\n" + firstName2 + "\n" + lastName2+ "\n"
+ Address2 + "\n" + finalPay2 + "\n" + hireDate2;

var empHeader3 = "\n" + firstName3 + "\n" + lastName3 + "\n"
+ Address3 + "\n" + finalPay3 + "\n" + hireDate3;

var empHeader4 = "\n" + firstName4 + "\n" + lastName4+ "\n"
+ Address4 + "\n" + finalPay4 + "\n" + hireDate4;

var empHeader5 = "\n" + firstName5 + "\n" + lastName5+ "\n"
+ Address5 + "\n" + finalPay5 + "\n" + hireDate5;

//output

console.log(empHeader1);
console.log(empHeader2);
console.log(empHeader3);
console.log(empHeader4);
console.log(empHeader5);

// end of program 




 
