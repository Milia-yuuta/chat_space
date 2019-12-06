$(function(){
function buildHTML(message){
     image = (message.image)? `<img class="message__text__image" src = ${message.image}>` :"";
    var html = 
      `<div class="message" data-message-id= "${message.id}">
        <div class="message__upper-info">
          <div class="message__upper-info__talker">
            ${message.user_name}
          </div>
          <div class="message__upper-info__date">
          ${message.created_at}
          </div>
        </div>
          <div class="message__text">
            <p class="message__text__content">
            ${message.content}
            </p>
        </div>
       ${image}
      </div>`
      return html;
}
  $("#new_message").on("submit",function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action")
    
    $.ajax({
      url:url,
      type:"POST",
      data:formData,
      dataType:"json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
      $(".submit-btn").prop("disabled",false)
    })
    .fail(function(){
      alert("errer");
    });
  })
  

  var reloadMessages = function(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
    var last_message_id = $('.message:last').data('message-id');
    $.ajax({
      url:"api/messages",
      type:"GET",
      dataType:"json",
      data:{id: last_message_id}
    })
  
  .done(function(messages){
    var insertHTML = "";
    messages.forEach(function(message){
      insertHTML = buildHTML(message);
    $(".messages").append(insertHTML)
  });
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
  })
  .fail(function(){
    alert("LGTM");
  });
  }
};

  setInterval(reloadMessages, 7000);
});
