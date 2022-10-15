// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoise = prompt("Scegli pari o dispari");
const userNumber = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(userChoise, userNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let pcNumber = rndNumber(1, 5)
console.log(pcNumber);


/**
 * Description: genera un numero random da 1 a 5 
 * @param {number} min
 * @param {number} max
 * @returns {any} restituisce il numero generato casualmente
 */
function rndNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber
  }
// Sommiamo i due numeri
const calcNumb = userNumber + pcNumber;
console.log(calcNumb);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

/**
 * Description: Calcola la somma di 2 numeri e ne definisce se sia pari o dispari
 * @param {number} calcNumb somma dei 2 numeri
 * @returns {any} risultato dell'espressione
 */
function calc (calcNumb) {
  let result = "";
  if (calcNumb % 2 === 0) {
      result = "pari"
  } else {
      result = "dispari";
  }
  return result;
}

console.log(calcNumb);
// Dichiariamo chi ha vinto.
const output = calc(calcNumb);
console.log(output);

if (output === userChoise) {
  alert("Hai vinto");
}else{
  alert("Hai perso");
}


