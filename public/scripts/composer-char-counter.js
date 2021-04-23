// Count the characters and show its the remaining

$(document).ready(function() {
  console.log("Document is ready.");
  let count = 0;
  $("#tweet-text").on('keydown', function(event) {
    if(event.key) {
      if (event.key === "Backspace") count--;
      else count++;
      $("#counter").html(140 - count)
      if (count > 140) {
        $("#tweet-text").blur();
        alert("You exceeded 140 character.")
      }
    }
  });
});
