// **Palindroma**
// Chiedere all’utente di inserire una parola
 const userWord = prompt("inserisci una parola");

// Creare una funzione per capire se la parola inserita è palindroma.

function palindroma(str) {   
    const length = userWord.length;  
    for (let i = 0; i < length / 2; i++) {   
        if (userWord[i] !== userWord[length - 1 - i]) {  
            alert("non è palindroma");  
        }
        alert("è palindroma")
}} 
const value = palindroma(userWord);