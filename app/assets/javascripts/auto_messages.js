$(function(){
  function buildHTML(message){
    console.log(message)
    var imagedata = message.image ? message.image : ''
    var html=`<div class="message" data-message-id="${ message.id }">
              <div class="upper-message">
                <div class="upper-message__user-name">
                  ${ message.user_name }
                </div>
                <div class="upper-message__date">
                  ${ message.created_at }
                </div>
              </div>
              <div class="lower-message">
               <p class="lower-message__content">
                 ${ message.content }
               </p>
               <img src="${ imagedata }">
              </div>
            </div>`
    return html;
  }

var reloadMessages = function() {
   lastMessageId = $(".message:last").data("message-id");
    var url = location.href;
    $.ajax({
      url: url,
      type: "GET",
      data: { lastMessageId: lastMessageId },
      dataType: 'json'
    })
    .done(function(messages) {
      messages.forEach(function(message){
        var html = buildHTML(message);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
    })
    .fail(function() {
      console.log('error');
     });
  };

setInterval(reloadMessages, 5000);
});

