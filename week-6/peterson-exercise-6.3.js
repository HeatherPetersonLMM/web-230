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

    get ticketId() {  //getter - passes no arguments

        return this.id; //return the value of the property access expression

    },

    set ticketId(val) { //setter - passing the value of the ticketId

        this.id = val; //returning the value of the setter

    },

    get ticketName() {

        return this.name;

    },

    set ticketName(val) {

        this.name = val;

    },

    get ticketRequester() {

        return this.requester;

    },

    set ticketRequester(val) {

        this.requester = val;

    }

};

console.log("{id: " + ticket.ticketId + ", " + "name: " + ticket.ticketName + ", " + "requester: " + ticket.ticketRequester + "}"); //output in one concatenated string


// end program
