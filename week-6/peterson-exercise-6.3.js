var header = require('../header.js');

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   17 January 2018
; Modified By: Heather Peterson
; Description: Exercise 6.3 - Object Literals
;===========================================
/*


/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}

 */

// start program

var ticket = {  //object literal for ticketing system with three fields and default values
    id: 1,
    name: "Sue Jefferson",
    requester: "Heather Peterson",
}

console.log("{id: %s, name: %s, requester: %s}", ticket.id, ticket.name, ticket.requester); //output in one concatenated string
    
