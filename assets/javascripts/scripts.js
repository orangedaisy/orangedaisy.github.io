// ajax submit contact form
$('#rfqForm').submit(function(){
  $.ajax({
    dataType: 'jsonp',
    url: "https://getsimpleform.com/messages/ajax?form_api_token=7563f5688bb8cb633dcbdfb533235f79",
    data: $('#rfqForm').serialize() 
  }).done(function() {
    //callback which can be used to show a thank you message
    //and reset the form
    $('.js-form-success-message').fadeIn(500);
    $('#rfqForm')[0].reset();
  });
  return false; //to stop the form from submitting
});
