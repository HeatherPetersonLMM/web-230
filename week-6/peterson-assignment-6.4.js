var header = require('../header.js');

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   19 January 2018
; Modified By: Heather Peterson
; Description: Assignment 6.4 - Nested Object Literals
;===========================================
/*

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

var ticket = {  // ticket properties
    id: 01,
    name: "Timmy Simmons",
    dateCreated: "1/19/2018",
    priority: "High",
    personId: "1313",

    person: {  // person properties
    id: 01,
    firstName: "Timmy",
    lastName: "Simmons",
    jobTitle: "(Manager)."
    }
};

console.log("Ticket " + ticket["id"] + " was created on " + ticket["dateCreated"] + 
" and assigned to employee " + ticket.person["firstName"] 
+ " " + ticket.person["lastName"] + " " + ticket.person["jobTitle"]);  //outputs the nested object literals
// end program

//Ouput:
 //Heather Peterson
 //Assignment 6.4
 //Date: 01-19-2018
 
//Ticket 1 was created on 1/19/2018 and assigned to employee Timmy Simmons (Manager).