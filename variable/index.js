'use strict';

/**
* Exercice
**/

// 1. My Digital School Forever

/**
* 2 .My Digital School forever every day
**/

// 3.
var string = "42";
var number = 42;
var float = 42.42;
var boolean = true;
var array = [42 , "42"];
var date = new Date();
var objet = {type:"42"};
var dontKnow = undefined;
var none = null;
console.log(string, number, float, boolean, array, date, objet, dontKnow,none)

// 4.
var my42count = "quarante-deux";
console.log(`${my42count} ${my42count.length}`);


// 5.
var verify = document.getElementById('verify');
console.log(verify);



// 6.
var myArray42 = ["q","u","a","r","a","n","t","e","-","d","e","u","x"];

// 7.
var myArray42Len = myArray42.length;
console.log(myArray42Len)

// 8.
var concat = 'La grande réponse sur la vie, l’univers et le reste !'.concat(myArray42.join(""));

// 9.
var rand = [Math.floor((Math.random()* 42)+1)];
console.log(rand, rand.includes(42));

// 10.
var my42Type = (variable) => (typeof variable).toString();
console.log(my42Type(string));
console.log(my42Type(number));
console.log(my42Type(float));
console.log(my42Type(boolean));
console.log(my42Type(array));
console.log(my42Type(date));
console.log(my42Type(objet));
console.log(my42Type(dontKnow));
console.log(my42Type(none));

// 11.
var compute42 = 6*7
compute42.toString();
console.log(compute42);

// 12.
var stonks = (42424242).toString().split('42').join('quarante-deux ');
console.log(stonks)

// 13.
var a = 24;
var b = 42;
var temp = 0;
temp = a;
a = b;
b = temp;
console.log(a,b);