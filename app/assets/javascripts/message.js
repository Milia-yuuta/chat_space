$(function(){
function buildHTML(message){
  var image_url = (message.image)? `<image class="message__text__image" src = "${message.image}">` :"";
    var html = 
      `<div class="message" data-message-id=${message.id}>
        <div class="message__upper-info">
          <div class="message__upper-info__talker">
            ${message.user_name}
          </div>
          <div class="message__upper-info__date">
            ${message.date}
          </div>
        </div>
          <div class="message__text">
            <p class="message__text__content">
            ${message.content}
            </p>
        </div>
      <img src=${image_url} > 
      </div>`
      return html
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
  
  return false;
});
