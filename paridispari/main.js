// const userNum = parseInt(prompt("Inserisci un numero"));

// let risultato = pariODispari(userNum);

// console.log(risultato)

// function pariODispari(numeroUser) {
//     if (numeroUser % 2 === 0 ) {
//         return "pari";
//     } else {
//         return "dispari";
//     }
// }




// andiamo a dichiarare i bottoni pari e dispari
let btnPari = document.getElementById('btn-pari');
let btnDispari = document.getElementById('btn-dispari');

// il numero utente deve inserire un numero da 1 a 5
let userNumber = parseInt(prompt('Inserisci il numero da 1 - 5'));


// se il numero scelto dall'utente 
if ( userNumber > 5 ) {
    alert( "Devi inserire un numero da 1 a 5!")
    location.reload();
}


// Rendiamo attivo il bottone pari
btnPari.addEventListener('click', function() {

    function rollDice() {

        // dice1 e' il numero dell'utente
        let dice1 = userNumber; 

        // Il computer crea un numero randomico da 1 - 5
        let dice2 = Math.floor(Math.random() * 5) + 1;
    
        // output
        document.getElementById("dice").innerHTML = dice1 + " , " + dice2;
    
        // facciamo la somma dei numeri
        return (dice1 + dice2);
        
    }

    const somma = rollDice( );

    // se la somma e' divisibile 2 allora hai vinto
    
    if ( somma % 2 === 0) {
        document.getElementById('vincitore').innerHTML = `Hai Vinto`
    } 
    
    // altrimenti hai perso perche' il risultato e' dispari
    else {
        document.getElementById('vincitore').innerHTML = `Hai Perso`
    }

});


// facciamo la stessa cosa per il bottone dispari
btnDispari.addEventListener('click', function() {

    function rollDice() {

        let dice1 = userNumber;

        let dice2 = Math.floor(Math.random() * 5) + 1;
    
        document.getElementById("dice").innerHTML = dice1 + " , " + dice2;
    
        return (dice1 + dice2);
    }

    const somma = rollDice( );

    // se la somma e' dispari allora hai vinto
    if ( somma % 2 === 1) {
        document.getElementById('vincitore').innerHTML = `Hai Vinto`
    } else {
        document.getElementById('vincitore').innerHTML = `Hai perso`
    }

});





