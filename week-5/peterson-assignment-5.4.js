var header = require('../header.js');

/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   10 January 2018
; Modified By: Heather Peterson
; Description: Exercise 5.4 - Filtering/Reducing Complex Data Structures
;===========================================
*/ 

/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
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

var composersByRating = famousComposers.map(function(composer) {  //map used to return the values of rating and lastName
    return {rating: composer.rating, lastName: composer.lastName} // returns the value of ratings and lastNames
});

var composersByGenre = famousComposers.map(function(composer) {  //map used to return the values of genre and lastName
    return {genre: composer.genre, lastName: composer.lastName}  //returns the value of genres and lastNames
});

console.log("-- COMPOSER BY RATING --");  // display text for ratings
famousComposers.forEach(function(composer){  // iteration through the forEach() method
    console.log("Rating: " + composer.rating + "\n" + "Composer: " + composer.lastName + "\n") //output of ratings and composers with \n breaks
});

console.log("-- COMPOSER BY GENRE --");  //display text for genres
famousComposers.forEach(function(composer){  // iteration through the forEach() method
    console.log("Genre: " + composer.genre + "\n" + "Composer: " + composer.lastName + "\n")  //output of genres and composers with \n breaks
});

// end program