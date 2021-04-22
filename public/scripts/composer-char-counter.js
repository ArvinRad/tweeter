// Count the characters

$(document).ready(function() {
  console.log("Document is ready.");
  let count = 0;
  $("#tweet-text").on('keydown', function(event) {
    if(event.key) {
      if (event.key === "Backspace") count--;
      else count++;
      $("#counter").html(140 - count)
      if (count > 140) $('#counter').css('color', 'red');
    }
  return count;
  });
});
