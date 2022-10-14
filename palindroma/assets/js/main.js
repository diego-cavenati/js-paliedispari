// Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente una parola
const userWord = prompt("Inserisci una parola")

const reverseUserWord = [userWord];
console.log(reverseUserWord);


// creo una funzione per capire se la parola è palindroma
function PalindromeOrNot() {

    if (userWord === reverseUserWord) {
        return true;
    }

    return false;
}

// restituisco un risultato in console
if (PalindromeOrNot()) {
    console.log(`La parola ${userWord} è palindroma!`);
} else {
    console.log(`La parola ${userWord} non è palindroma!`);
}