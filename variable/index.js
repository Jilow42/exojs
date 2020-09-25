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
var valeur = parseInt(prompt('Votre age'));
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
  alert('Cool');
} else if (rand >= 21) {
  alert('Warm');
} else {
  alert('Tepid');
}

// 3.
var date = new Date();
var today = date.getDay();
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
  case 0:
    alert('nous sommes Dimanche et c\'est le Weekend');
    break;
}

// 4.
var plop = prompt('Pour commencer êtes vous un plop ?');
if (plop === 'plop') {
  var hist = prompt("C'est le début vous préférez être stonks ou la bonne réponse ?");
  if (hist === '42') {
    alert('La grande réponse sur la vie, l’univers et le reste !');
  } else if (hist === 'Stonks') {
    alert('Vous êtes milliardaire');
  } else if (hist == '12') {
    alert('Noice try Bro\'');
  } else {
    prompt('Vous êtes mort');
  }
} else {
  alert('Vous êtes mort');
}

// 5.
//Pas possible car pas dans une fonction

// 6.
var truc;
var tern = truc === undefined ? 'cette variable n\’existe pas' : '42';
alert(tern);

// 7.
var family = Math.floor((Math.random() * 41));
var parent;
switch (family - family % 10) {
  case 10:
    var parent = 10;
    break;
  case 20:
    var parent = 20;
    break;
  case 30:
    var parent = 30;
    break;
  case 40:
    var parent = 40;
    break;
  default:
    var parent = "unités";
    break;
}
alert('Ce chiffre (' + family + ') fait partie de la famille des ' + parent);


/**
 * Les boucles
*/

// 1.
var multiplTable = [1, 2, 3, 5, 8];
for (var i = 0; i < multiplTable.length; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(multiplTable[i] * j)
  }
}
console.log(multiplTable[i]);

// 2.
var multiList = document.createElement('ul');
for (var i = 1; i <= 10; i++) {
  var multiplication = document.createElement('li');
  multiplication.textContent = i + ' x 5 = ' + (i * 5);
  multiList.appendChild(multiplication);
}
document.body.appendChild(multiList);

// 3.
var stonks = 0;

while (true) {
  stonks++
  console.log(5 * stonks);
  if (stonks == 10) {
    break;
  }
}


// 4.
var bigTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var trans = bigTable.map(x => x * 5);
console.log(trans);

// 5.
 

// 7.

/**
 * Les fonctions
 */


// 1.
/** 
  * A fonction that return a string after untering a number
  * @myPutStr return the string sentence if it's a String
  * @param {any} param : a parameter that can be a String or a Number
  */

 function myPutStr(param){
  if(typeof param !== 'String' ){
    return "et pourquoi pas 42 ?";
  }
  return param;
}

// 2
/** 
  * A fonction to count surface area
  * @computeSurfaceM2 return a calcul of a square surface
  * @height {Number} height : a Number to calculate the surface with
  * @width {Number} width : a Number to calculate the surface with
  */
function computeSurfaceM2(height, width){
   if(typeof height !== 'number' && typeof width !== 'number'){
     return "Please enter numbers";
   }
   return `${height*width}m2 `;
}

// 3
/**
  * Create my button
  * @param {string} selector
  */
 var createMyButton = function createMyButton(selector) {
  var targetEl = document.querySelector(selector);
  var el = document.createElement('button');
  el.textContent = 'My Button';
  targetEl.appendChild(el);
}
/**
* Detect My Age By Night
* @param {string} selectorButton
*/
var detectMyAgeByNight = function detectMyAgeByNight(selectorButton) {
var btn = document.querySelector(selectorButton);
btn.addEventListener('click', function() {
  var age = prompt('Entrez votre age :');
  if (typeof parseInt(age) !== 'number') {
    return new Error('Not is a number');
  }
  if (parseInt(age) <= 17) {
    alert('Vous n\'avez pas le droit de rentrer dans le club');
    return;
  }
  alert('Vous êtes majeur vous pouvez entrer dans le club');
  return;
});
}
createMyButton('#app');
detectMyAgeByNight('button');

// 4. 
/**
 * MatrixGenerator - generates a matrix and displays it on page
 * @param {int[int[]]}
 * 
 */
function matrixGenerator(array){
  var matrix = document.createElement("table");
  for (var i=0;i<array.length;i++){
      var tr = document.createElement("tr");
      for(var j=0;j<array[i].length;j++){
        var td = document.createElement("td");
        td.insertAdjacentHTML("beforeend","<span>"+array[i][j]+"</span>");
        tr.appendChild(td);
      }
      matrix.appendChild(tr);
  }
  document.querySelector("body").appendChild(matrix);
}
matrixGenerator(
[[1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [1, 0, 0, 1, 1]]
);

// 5.
/**
 * Numerical Clock - Display a numerical clock
 */
var numericalClock = function numericalClock() {
  var clock = document.querySelector('.clock');
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if (seconds < 10) {
      seconds = '0' + seconds;
  }
  if (minutes < 10) {
      minutes = '0' + minutes;
  }
  if (hours < 10) {
      hours = '0' + hours;
  }
  if (!clock) {
      clock = document.createElement('div');
      clock.classList.add('clock');
      document.body.appendChild(clock);
  }
  clock.textContent = hours + ':' + minutes + ':' + seconds;
};
setInterval(numericalClock, 1000);
// 6.
/**
 * a function to illustrate the fibonacci suite
 * @nbr {number} nbr : a number that tell at witch generation to stop
 * @n1 {number} n1 : the first number 
 * @n2 {number} n2 : the second number
 * @somme {number} somme : a var to calculate the next generation number
 */

function fibonacci(nbr) {
  var n1 = 0;
  var n2 = 1;
  var somme = 0;

  for(let i = 2; i <= nbr; i++){
     somme = n1 + n2; 
     n1 = n2; 
     n2 = somme; 
  }

  return nbr ? n2 : n1;
}
console.log(fibonacci(8));