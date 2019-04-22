$(function(){
  function buildHTML(message){
    var imagedata = message.image ? message.image : ''
  var html=`<div class="message" data-message-id="${message.id}">
              <div class="upper-message">
                <div class="upper-message__user-name">
                  ${ message.user_name }
                </div>
                <div class="upper-message__date">
                  ${ message.time }
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
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      if(data == '' ){
        alert('エラー');
        $('.form__submit').prop('disabled', false);
      } else {
        var html = buildHTML(data);
        $('.messages').append(html);
        $('form')[0].reset();
        $('.form__submit').prop('disabled', false);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      }
    })
    .fail(function(){
      alert('エラー');
      $('.form__submit').prop('disabled', false);
    })
  });
});
