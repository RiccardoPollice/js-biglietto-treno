let distance= parseInt(prompt("Inserisci quanti km vuoi percorrere"));
let age= parseInt(prompt("Inserisci la tua età"));
let ticketprice= (distance * 0.21);
let finalprice= ticketprice.toFixed(2);

if (age>=65) {
    ticketprice- (ticketprice * 0.60);
}
else if (age<18) {
    ticketprice- (ticketprice * 0.20);
}
else {
    ticketprice = ticketprice;
}

console.log ("Il prezzo del biglietto è:" + finalprice);
