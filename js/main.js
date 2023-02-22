'use strict'

const priceKm = 0.21; 
const rateUnder18 = 0.2; 
const rateOver65 = 0.4; 
let userAge;
let userKm;
let userNames;
let totalPrice;
let finalPrice;
const buttonCreate = document.getElementById("genera-bottone");
const buttonReset = document.getElementById("reset-bottone");


buttonCreate.addEventListener("click",
    function(){

        //assegnamo alle 3 variabili user i valori relativi ai tre input 
        userAge = document.getElementById("input-age").value;
        userKm = document.getElementById("input-km").value;
        userNames = document.getElementById("input-name").value;

        //userKm deve essere di tipo Number e vogliamo al massimo due cifre decimali
        totalPrice =  Number(userKm).toFixed(2) * priceKm;

        //if statement che controlla se possiamo applicare sconti all'utente, userAge da string diventa number
        if (Number(userAge) < 18){
            finalPrice = (totalPrice- rateUnder18 * totalPrice).toFixed(2);
            console.log(finalPrice);
            document.getElementById('offerta').innerHTML = 'Biglietto minorenne';
        }
        else if (Number(userAge) > 65){
            finalPrice = (totalPrice- rateOver65 * totalPrice).toFixed(2); 
            console.log(finalPrice);
            document.getElementById('offerta').innerHTML = 'Biglietto silver';
        }
        else{
            finalPrice = totalPrice
            console.log (finalPrice);
            document.getElementById('offerta').innerHTML = 'Biglietto standard'; 
        }

        document.getElementById('ticket-show-h1').style.display = "block";
        document.getElementById('ticket-show').style.display = "block";

        //Scriviamo il nome passagero nel documento html
        document.getElementById('names').innerHTML = userNames;
        document.getElementById('price').innerHTML = finalPrice +'euro';
        document.getElementById('car').innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById('cp-code').innerHTML = Math.floor(10000 + Math.random() * 90000);
    }
)


