// Descrizione:
// Creare un oggetto che descriva uno studente
// lo studente avrà  le seguenti proprietà: nome, cognome e età.
// Stampare attraverso il for..in tutte le proprietà (chiavi e valori).
// Nome della repo per consegnare l’esercizio: js-oggetti-studenti
// OPZIONALE (in una cartella a parte dal codice per l’esercizio degli oggetti)
// Riprodurre la piccola chat fatta insieme durante la lezione utilizzando handlerbars.

var studente = {
  nome : [' Francesco'],
  cognome : [' Scarniglia'],
  eta : [' 32']
}

//console.log(studente.nome ,studente.cognome, studente.eta);
//console.log(studente['nome'], studente['cognome'], studente['eta']);

for(var key in studente) {
  console.log(key + ':' + studente[key]);
}
