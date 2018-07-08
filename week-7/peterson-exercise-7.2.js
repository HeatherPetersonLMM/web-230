var header = require('../header.js');
/*

============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   27 January 2018
; Modified By: Heather Peterson
; Description: Exercise 7.2 - Constructor Functions
;===========================================

/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program

function Employee(id, firstName, lastName, title) //object function Employee with 4 parameters
{
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

var employees = [];  //an employees array with 5 employee objects

employees[0] = new Employee(01, "Thomas", "Edison", "Software Engineer");
employees[1] = new Employee(02, "Benjamin", "Franklin", "Programmer");
employees[2] = new Employee(03, "Nikola", "Tesla", "Project Manager");
employees[3] = new Employee(04, "Charles", "Babbage", "Product Manager");
employees[4] = new Employee(05, "Alexander", "Bell", "Business Analyst");

for (var i = 0; i < employees.length; i++)  //using for-loop to iterate 
{
    var emp = employees[i];

    console.log(emp.id + " " + emp.firstName + " " + emp.lastName + " " + emp.title)  //output results
}
// end program

//End Result

//Heather Peterson
//Exercise 7.2
//Date: 01-27-2018

//1 Thomas Edison Software Engineer
//2 Benjamin Franklin Programmer
//3 Nikola Tesla Project Manager
//4 Charles Babbage Product Manager
//5 Alexander Bell Business Analyst