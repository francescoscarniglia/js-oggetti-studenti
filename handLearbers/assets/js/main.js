$(document).ready(function () {
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

  });




});
