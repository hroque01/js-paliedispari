function palindromo(parola) {


    const lunghezza = parola.length;
    // prendi lunghezza della parola


    for (let i = 0; i < lunghezza / 2; i++) {

        // guarda se la prima e l'ultima parola sono uguali
        if (parola[i] !== parola[lunghezza - 1 - i]) {
            risultato="La parola "+ parola + " NON è palindroma";
            return risultato
        }
    }
    // confronta il primo carattere con l'ultimo fino ad arrivare a metà parola
    risultato="La parola "+ parola + " è palindroma";
    return risultato
}


const parolaUtente = prompt('Enter a string: ');
// prendi la parola di imput


const output = palindromo(parolaUtente);
// richiama la funzione

console.log(output);
