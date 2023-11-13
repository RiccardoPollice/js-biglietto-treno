let distance= parseInt(prompt("Inserisci quanti km vuoi percorrere"));
let age= parseInt(prompt("Inserisci la tua età"));
let ticketPrice= (distance * 0.21);

if (age >= 65) {
    ticketPrice= ticketPrice * 0.6
}
else if (age<18) {
    ticketPrice= ticketPrice * 0.8
}

let finalPrice= ticketPrice.toFixed(2);

console.log ("Il prezzo del biglietto è:" + finalPrice);
document.getElementById("final").innerHTML = finalPrice