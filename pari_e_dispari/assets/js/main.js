// Pari e dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
const userNumber = Number(prompt("inserisci un numero da 1 a 5"));

// Verificare che il numero inserito sia tra 1 e 5
if (userNumber > 5 || userNumber == 0) {
    alert("Solo numeri da 1 a 5!")
}

// Generiamo un numero random (sempre da 1 a 5) per il computer
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

// Sommiamo i due numeri 
const sum = userNumber + generateRandomNumber(1, 5);
console.log(sum);

//creo una funzione pari o dispari
function oddOrEven() {

    // verifico se il numero è pari o dispari
    if (sum % 2 == 0) {
        return true
    } 

    return false
}

// Dichiariamo chi ha vinto.
if (oddOrEven(sum)) {
    console.log("pari");
} else {
    console.log("dispari");
}