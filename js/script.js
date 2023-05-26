console.log('JS OK')

const basePrice = 0.25;

const userAge = parseInt(prompt('Digita qual è la tua età:'));
const userTripLong = parseInt(prompt('Indica quanti km devi percorrere')); 

let discount
if (userAge < 18) {
    discount = 20/100
} else if (userAge >= 65) {
    discount = 40/100
}

const resultPrice = userTripLong * basePrice - discount

console.log(resultPrice)