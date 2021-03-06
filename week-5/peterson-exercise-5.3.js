var header = require('../header.js'); 

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   09 January 2018
; Modified By: Heather Peterson
; Description: Exercise 5.3 - Object Collections
;===========================================

/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// start program
var famousComposers = [     // Array-Like Object of 5 famous composers
    {
        firstName: 'Ludwig',
        lastName: 'Beethoven',
        genre:'Classical',
        rating: '8'
    },
    {
        firstName: 'Johannes',
        lastName: 'Mozart',
        genre: 'Classical',
        rating: '10'
    },
    {
        firstName: 'Johann',
        lastName: 'Bach',
        genre:'Classical',
        rating: '6'
    },
    {
        firstName:'Franz',
        lastName:'Haydn',
        genre: 'Classical',
        rating: '6'
    },
    {
        firstName: 'Franz',
        lastName:'Schubert',
        genre: 'Classical',
        rating: '5'
    },
];

    console.log("-- COMPOSERS --");  // display text of Composers
famousComposers.forEach(function(composer){  // iteration through the forEach() method
    console.log("Last Name: " + composer.lastName + ", " + "Genre: " + composer.genre + ", " + "Rating: " + composer.rating)
});  //output of composers last names, genres, and ratings

// end program