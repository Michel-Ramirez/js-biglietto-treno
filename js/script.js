console.log('JS OK')


/********** ******** RICAVIAMO I DATI DEL UTENTE ******** **********/

//Recupero il placeholder dove verranno indicati i dati

const fnamePlaceholder = document.getElementById('fname')

const lnamePlaceholder = document.getElementById('lname')

//Dichiaro la variabile assoluta che verrà appostat alla fine della password uguale per tutti
const defaultNumber = 21

//Interrogo nome utente
const fName = prompt('Come ti chiami?').trim();
console.log(fName)


//Interrogo Cognome utente
const lName = prompt('Qual è il tuo cognome?').trim();
console.log(lName)

//Scrivo sul form i dati

fnamePlaceholder.innerText += ' ' + fName

lnamePlaceholder.innerText += ' ' + lName


/********** ******** RICAVIAMO IL PREZZO DEL BIBLIETTO ******** **********/

//Recupero il placeholder dove verranno indicati i dati

const finalPricePlaceholder = document.getElementById('price-ticket');
const targetPlaceholder = document.getElementById('target')

// Dichiaro prezzo prezzo al km del viaggio
const basePrice = 0.25;

// Interrogo età del utente
const userAge = parseInt(prompt('Digita qual è la tua età:'));

// Interrogo km che dovrà percorrere l'utente
const userTripLong = parseInt(prompt('Indica quanti km devi percorrere')); 

// Ricavo il prezzo del biglietto
const priceTicket = basePrice * userTripLong

// Ricavo lo sconto in base all'età
let discount = 0
//Se l'utente indica un'età minore di 18 anni applico lo sconto del 20%
if (userAge < 18) {
    discount = priceTicket * 0.2
//Se l'utente indica un'età maggiore di 65 anni applico lo sconto del 40%
} else if (userAge >= 65) {
    discount = priceTicket * 0.4
}

// Calcolo prezzo finale del biglietto con lo sconto
const resultPrice = priceTicket - discount
console.log(resultPrice)

finalPricePlaceholder.innerText += ' € ' + resultPrice

targetPlaceholder.innerText += ' ' + userTripLong

