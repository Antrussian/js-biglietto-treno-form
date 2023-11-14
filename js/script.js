/*Descrizione:
Scrivere un programma che chieda all’utente:

Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.1976 € al km)
va applicato uno sconto del 17.65% per i minorenni
va applicato uno sconto del 53.27% per gli over 65.

MILESTONE 1:
 Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.*/


const prezzoKm = 0.1976;


const scontoMinorenne = 17.65;

const scontoOver= 53.27;


document.getElementById("genera").addEventListener("click", function() {

  
 
const numeroKm = parseFloat(document.getElementById('numeroKm').value);

const etaPasseggero = parseFloat (document.getElementById('age-group').value);

const userName = document.getElementById("userName").value;  

    
let imponibile = (numeroKm * prezzoKm);


const minorenne = 18;

 

const over = 65;



let utenteMinorenne = etaPasseggero <= minorenne;

let utenteOver = etaPasseggero >= over;



let prezzoTotale;

if ( etaPasseggero === 1 ) {

    let ImportoScontoMinorenne = (imponibile * scontoMinorenne/100) ;
    prezzoTotale = (imponibile - ImportoScontoMinorenne);
}

else if ( etaPasseggero === 3 ) {

    let ImportoScontoOver = (imponibile * scontoOver/100) ;
    prezzoTotale = (imponibile - ImportoScontoOver);
}

else  { (etaPasseggero === 2 )
    prezzoTotale = imponibile;
}


    let codiceBiglietto = Math.floor (Math.random() *100000 +1);


    let coach = Math.floor (Math.random() *10 +1);



    document.getElementById('carrozza').innerHTML = '' + coach;

    document.getElementById('codice_Biglietto').innerHTML = '' + codiceBiglietto;

    document.getElementById('user_name').innerHTML = '' + userName;

    document.getElementById('prezzoFinale').innerHTML = '' + prezzoTotale.toFixed(2) + ' €';

 

});

















