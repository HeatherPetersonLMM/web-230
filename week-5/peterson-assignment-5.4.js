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

var famousComposers = [     //Array-Like Object of ratings, composer, genre
    {
        rating: '8',
        composer: 'Beethoven',
        genre: 'Clasical'
        
    },
    {
        rating: '10',
        composer: 'Mozart',
        genre: 'Clasical'

    },
    {
        rating: '9',
        composer: 'Bach',
        genre: 'Clasical'

    },
    {
        rating: '6',
        composer: 'Haydn',
        genre: 'Clasical'

    },
    {   rating: '5',
        composer: 'Schubert',
        genre: 'Clasical'
    }
];

    console.log("-- COMPOSER BY RATING --");  //display text of ratings
var comnposersByRating = famousComposers.map(function(composer) {  //iteration through the map() method
    console.log("Rating: " + composer.rating);  // output of ratings
    console.log("Composer: " + composer.composer);  //output of composers
    console.log("");  // line break

});
    console.log("-- COMPOSER BY GENRE --");  //display text of genre
var composersByGenre = famousComposers.map(function(composer) {
    console.log("Genre: " + composer.genre);  //output of genres
    console.log("Composer: " + composer.composer);  //output of composers
    console.log("");
});

// end program