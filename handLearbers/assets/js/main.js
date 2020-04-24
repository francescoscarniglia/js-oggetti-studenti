$(document).ready(function () {

//   Descrizione:
// Estendere la chat fatta con handlebars inserendo i messaggi iniziali, visibili al caricamento della pagina, generati da un array di oggetti.
// Gli oggetti conterranno proprietà come testo e orario
// Usiamo Handlebars per la generazione anche di questi messaggi, come avete fatto ieri per i messaggi inseriti dall’utente
// Pushate sempre nella repo dell’esercizio di ieri.
// OPZIONALE: rifare i JSnack visti stamattina
// Snack 1:
// Creare un oggetto palla che abbia le seguenti proprietà:
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
// Snack 2:
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
//  nome e peso.
//  Stampare a schermo la bici con peso minore.
// Snack 3:
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare (scelto da voi), le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti

  // hendelbars chat

  // ref
  var input = $('.msg-input');
  var button = $('.msg-btn');
  var chat = $('.chat');

  var source = $("#entry-template").html();
  //console.log(source);
  var template = Handlebars.compile(source);
  //console.log(typeof source);
  // console.log(typeof template);

  var newMessage = [
    {
      text : 'Hello Frankie!',
      time : '11;00',
      userClass : 'sent'
    },

    {
      text : 'Hello Frank!',
      time : '11;01',
      userClass : 'received'
    }

  ];

  for(var i= 0; i < newMessage.length; i++) {
    console.log(newMessage[i].text + ' ' + newMessage[i].time);
    var item = newMessage[i];
    var dataMex = {
      text : item.text,
      time : item.time
    }

    var output = template(dataMex);

    chat.append(output);

  }





  // insert message
  button.click(function() {
    //console.log('hai pigiato su btn');
    var message = input.val().trim();
    // console.log(message);

    // inserire in html
    var data = {
      text : message,
      time : '18:30',
      userClass : 'sent'
    };

    var html = template(data);
    //console.log(html);

    chat.append(html);

    input.val('');

    // risposta automatica
    setTimeout(function() {
      //alert('ciao')
      var data = {
        text : 'Ciao',
        time : '18:31',
        userClass : 'received'
      };
      var html = template(data);

      chat.append(html);
    }, 1000);

  });




}); //ready
