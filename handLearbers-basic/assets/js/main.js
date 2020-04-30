$(document).ready(function(){

  //ottengo html del template con selettore java script
  //var source = document.getElementById("#entry-template").html;

  //ottengo html del template con selettore jQuery da usare
  var source = $("#entry-template").html();
  //console.log(source);

  //grazie ad handlebars  genera una utility che mi farà avere un output compilato
  var template = Handlebars.compile(source);
  //console.log(typeof template); // template è una funzione

  // 1 definire struttura di dati e come utilizzarli
  // quali valori assegno a title e body?
  // li assegno ad un oggetto

 //  var data = {
 //    title : 'my singol post',
 //    body : 'lorem ispum dolor sadasdadsdsasdasdasaddsas' // può essere un valore dinamico
 //  }
 //
 //  // inserisci in html
 // // template è una funzione la quale richiede dei parametri. inserisco data poichè contiene tutti i valori che mi servono
 //
 //  var html = template(data);
 //  console.log(html);
 //
 //  // add html
 //  $('.articles').append(html);

 for(var i = 0; i < 10; i++) {
    var data = {
      myClass : 'single',
      title : 'Post numero ' + (i + 1),
      body : 'lorem ispum dolor sadasdadsdsasdasdasaddsas' // può essere un valore dinamico
    }

    // inserisci in html
   // template è una funzione la quale richiede dei parametri. inserisco data poichè contiene tutti i valori che mi servono

    var html = template(data);
    console.log(html);

    // add html
    $('.articles').append(html);
 }

}); // ready
