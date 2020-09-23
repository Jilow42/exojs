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
var float = 42.0;
var boolean = true;
var array = [42, "42"];
var date = new Date(4242, 12, 24, 42, 42);
var objet = { type: "42" };
var dontKnow = undefined;
var empty = null;
console.log(string, number, float, boolean, array, date, objet, dontKnow, none)

// 4.
var my42count = "quarante-deux";
console.log(`${my42count} ${my42count.length}`);


// 5.
/**
var verify = document.getElementById('verify');
console.log(verify);
**/
// correction
var und;
var check = und || 42;
console.log(check);

// 6.
var myArray42 = ["q", "u", "a", "r", "a", "n", "t", "e", "-", "d", "e", "u", "x"];
console.log(myArray42);

// 7.
var myArray42Len = myArray42.length;
console.log(myArray42Len)

// 8.
var concat = 'La grande réponse sur la vie, l’univers et le reste !'.concat(myArray42.join(""));
console.log(concat);

// 9.
var rand = [Math.floor((Math.random() * 42) + 1)];
console.log(rand, rand.includes(42));

// 10.
/**
 * var my42Type = (variable) => (typeof variable).toString();
console.log(my42Type(string, number, float, boolean, array, date, objet, dontKnow, none));
 */
var my42Type = [typeof string, typeof number, typeof function () { }, typeof objet];
console.log(my42Type);

// 11.
var compute42 = 6 * 7;
compute42.toString();
console.log(compute42);

// 12.
/**
 * var stonks = (42424242).toString().split('42').join('quarante-deux ');
console.log(stonks)
 */
var stonks = "4242424242";
stonks = stonks.replace(/42/gi, 'quarante-deux ');
console.log(stonks);

// 13.
var a = 24;
var b = 42;
var temp = a;
a = b;
b = temp;
console.log(a, b);

/**
 * Les conditions
 */

// 1.

var valeur = prompt('Votre age');
if (valeur < 18) {
  alert("Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez ".concat(valeur));
} else if (valeur >= 42) {
  alert("Vous pouvez entrer vous êtes majeur vous avez ".concat(valeur).concat(" et vous êtes le BOSS"));
} else {
  alert("Vous pouvez entrer vous êtes majeur vous avez ".concat(valeur));
}

// 2.
var rand = [Math.floor((Math.random() * 31))];
if (rand <= 10) {
  console.log('Cool')
} else if (rand >= 21) {
  console.log('Warm')
} else {
  console.log('Tepid')
}

// 3.
var date = new Date();
var today = date.getDay();
console.log(today);
switch (today) {
  case 1:
    alert('nous sommes Lundi');
    break;
  case 2:
    alert('nous sommes Mardi');
    break;
  case 3:
    alert('nous sommes Mercredi');
    break;
  case 4:
    alert('nous sommes Jeudi');
    break;
  case 5:
    alert('nous sommes Vendredi');
    break;
  case 6:
    alert('nous sommes Samedi et c\'est le Weekend');
    break;
  case 7:
    alert('nous sommes Dimanche et c\'est le Weekend');
    break;
}

// 4.
var plop = prompt('Pour commencer votre histoire entrez un mot');
if (plop === 'plop') {
  var hist = prompt("C'est le début vous préférez");
  if (hist === '42') {
    window.alert('La grande réponse sur la vie, l’univers et le reste !');
  } else if (hist === 'Stonks') {
    window.alert('Vous êtes milliardaire');
  } else if (hist == '12') {
    window.alert('Noice try Bro\'')
  } else {
    prompt('Vous êtes mort')
  }
} else {
  window.alert('Vous êtes mort');
}

// 5.
//Pas possible car pas dans une fonction

// 6.
var truc;
var tern = truc === undefined ? 'cette variable n\’existe pas' : '42';
alert(tern);

// 7.
var familly = (Number(prompt('Choisir un nombre entre 0 et 50')));
console.log(familly)
switch (familly)
    case < 10:
  console
} 
