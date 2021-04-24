// Count the characters and show its the remaining

$(document).ready(function() {
  console.log("Document is ready.");
  $("#tweet-text").attr('maxlength','140');
  $('#tweet-text').keydown(function(){
    const str = $('#tweet-text').val();
    $('#counter').html(140 - str.length);
    if(str.length === 140) {
      $(".Errorbox").html("You have reached the maximum length. Please modify your text or tweet it.").show();
      setTimeout(() => $(".Errorbox").hide(), 5000);
    }
  });
});
